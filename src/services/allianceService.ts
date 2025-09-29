import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchAllianceByName = async (name: string) => {
  try {
    const res = await fetch(`https://api.galaxylifegame.net/Alliances/get?name=${encodeURIComponent(name)}`);
    if (!res.ok) throw new Error("Alliance not found");
    return await res.json();
  } catch {
    throw new Error("Alliance not found");
  }
};


export const saveAllianceMembers = async (allianceData: any) => {
  const generateDefaultPlanets = () => {
    const planets: Record<string, { X: number; Y: number; Destroyed: boolean }> = {
      "Main planet": { X: 0, Y: 0, Destroyed: false },
    };
    for (let i = 1; i <= 11; i++) {
      planets[`Colony ${i}`] = { X: 0, Y: 0, Destroyed: false };
    }
    return planets;
  };

  for (const member of allianceData.Members) {
    try {
      const playerRef = doc(collection(db, "Players"), member.Id);
      const playerSnap = await getDoc(playerRef);
      let planets = generateDefaultPlanets();
      let destroyed = false;

      if (playerSnap.exists()) {
        const existingData = playerSnap.data();
        if (typeof existingData.Destroyed === "boolean") destroyed = existingData.Destroyed;

        for (const planet in planets) {
          if (existingData.Planets?.[planet]) {
            const existingPlanet = existingData.Planets[planet];
            if (!(existingPlanet.X === 0 && existingPlanet.Y === 0)) {
              planets[planet].X = existingPlanet.X;
              planets[planet].Y = existingPlanet.Y;
            }
            if (typeof existingPlanet.Destroyed === "boolean") {
              planets[planet].Destroyed = existingPlanet.Destroyed;
            }
          }
        }
      }

      const newData = {
        Id: member.Id,
        Name: member.Name,
        Level: member.Level,
        AllianceRole: member.AllianceRole,
        TotalWarPoints: member.TotalWarPoints,
        Avatar: member.Avatar,
        Alliance: allianceData.Name,
        Planets: planets,
        Destroyed: destroyed,
        updatedAt: new Date(),
      };

      if (playerSnap.exists()) {
        const oldData = playerSnap.data();
        const hasChanges = Object.keys(newData).some(
          (key) =>
            key !== "updatedAt" &&
            JSON.stringify(newData[key as keyof typeof newData]) !== JSON.stringify(oldData[key])
        );
        if (hasChanges) await setDoc(playerRef, newData, { merge: true });
      } else {
        await setDoc(playerRef, newData);
      }
    } catch (err) {
      console.error("Error saving member:", err);
    }
  }
};
