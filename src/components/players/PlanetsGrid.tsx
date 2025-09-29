import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import PlanetCard from "./PlanetCard";
import { db } from "../../firebaseConfig";



interface PlanetsGridProps {
  playerId: string;
  planets: Record<string, { X: number; Y: number; Destroyed: boolean }>;
}

const PlanetsGrid: React.FC<PlanetsGridProps> = ({ planets, playerId }) => {
  const [localPlanets, setLocalPlanets] = useState(planets);

  // 👉 Función para alternar Destroyed
  const handleToggleDestroyed = async (planetName: string) => {
    const planet = localPlanets[planetName];

    if (planet.X === 0 && planet.Y === 0) {
      console.error(`❌ No se puede actualizar ${planetName}, no tiene coordenadas válidas`);
      alert(
        `The "${planetName}" doesn´t have valid coordinates, it can´t be marked as destroyed.`
      );
      return;
    }

    const updatedPlanets = {
      ...localPlanets,
      [planetName]: {
        ...localPlanets[planetName],
        Destroyed: !localPlanets[planetName].Destroyed,
      },
    };

    // Actualizar UI inmediatamente
    setLocalPlanets(updatedPlanets);

    try {
      const playerRef = doc(db, "Players", playerId);
      await updateDoc(playerRef, { Planets: updatedPlanets });
      console.log(`🔥 Planeta ${planetName} actualizado en Firestore`);
    } catch (err) {
      console.error("Error actualizando Firestore:", err);
    }
  };

  // 👉 Función para actualizar coordenadas
  const handleUpdateCoords = async (planetName: string, newX: number, newY: number) => {
    const updatedPlanets = {
      ...localPlanets,
      [planetName]: {
        ...localPlanets[planetName],
        X: newX,
        Y: newY,
      },
    };

    setLocalPlanets(updatedPlanets);

    try {
      const playerRef = doc(db, "Players", playerId);
      await updateDoc(playerRef, { Planets: updatedPlanets });
      console.log(`✅ Coordenadas de ${planetName} actualizadas a (${newX}, ${newY})`);
    } catch (err) {
      console.error("❌ Error actualizando coordenadas en Firestore:", err);
    }
  };

  // 👉 Ordenar planetas (Main Planet primero, luego colonias numéricas)
  const orderedPlanets = Object.entries(localPlanets).sort(([nameA], [nameB]) => {
    if (nameA === "Main Planet") return -1;
    if (nameB === "Main Planet") return 1;

    const matchA = nameA.match(/Colony (\d+)/);
    const matchB = nameB.match(/Colony (\d+)/);
    const numA = matchA ? parseInt(matchA[1], 10) : 0;
    const numB = matchB ? parseInt(matchB[1], 10) : 0;
    return numA - numB;
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        marginTop: "1rem",
        width: "100%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {orderedPlanets.map(([planetName, coords]) => (
        <PlanetCard
          key={planetName}
          name={planetName}
          coords={coords}
          onToggleDestroyed={() => handleToggleDestroyed(planetName)}
          onUpdateCoords={(x, y) => handleUpdateCoords(planetName, x, y)}
        />
      ))}
    </div>
  );
};

export default PlanetsGrid;
