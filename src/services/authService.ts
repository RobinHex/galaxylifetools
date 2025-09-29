// src/services/authService.ts
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

/**
 * Registro de usuario en Firebase
 */
export const registerUser = async (email: string, password: string, username: string): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, { displayName: username });
  await sendEmailVerification(user);

  await signOut(auth); // logout hasta verificar

  return user;
};

/**
 * Login con Firebase
 */
export const loginUser = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  if (!user.emailVerified) {
    await signOut(auth);
    throw new Error("Please verify your email before logging in.");
  }
  // Guardar token en localStorage
  const token = await user.getIdToken();
  localStorage.setItem("authToken", token);

  return user;
};

/**
 * Logout global
 */
export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
  localStorage.removeItem("authToken");
};

/**
 * Verificar si hay sesión activa (localStorage)
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("authToken");
};

