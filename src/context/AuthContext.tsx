import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

type AuthContextType = {
  user: User | null;
  loading: boolean;
    isRegistering: boolean;
  setIsRegistering: (is: boolean) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = { children: ReactNode };

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
 const [isRegistering, setIsRegistering] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      // Solo aceptamos usuarios con email verificado
       if (isRegistering) {
        setLoading(false); // Seguimos mostrando el spinner de App.tsx
        return;
      }

      if (firebaseUser && firebaseUser.emailVerified) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
}, [isRegistering]);

  return (
   <AuthContext.Provider value={{ user, loading, isRegistering, setIsRegistering }}>
      {children}
    </AuthContext.Provider>
  );
};
