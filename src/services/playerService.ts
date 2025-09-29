import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchPlayerByName = async (name: string) => {
  if (!name.trim()) throw new Error("Player name is required");

  const playersRef = collection(db, "Players");
  const q = query(playersRef, where("Name", "==", name));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    throw new Error("Player not found in database");
  }

  return snapshot.docs[0].data();
};
