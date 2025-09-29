import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Obtener un documento por colección e ID
export const getDocById = async (collectionName: string, id: string) => {
  const ref = doc(collection(db, collectionName), id);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? snapshot.data() : null;
};

// Crear o actualizar documento (merge opcional)
export const setDocById = async (collectionName: string, id: string, data: any, merge = true) => {
  const ref = doc(collection(db, collectionName), id);
  await setDoc(ref, data, { merge });
};

// Obtener referencia a colección
export const getCollectionRef = (collectionName: string) => collection(db, collectionName);
