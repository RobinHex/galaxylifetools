import { useState } from "react";
import { loginUser } from "../services/authService";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields");
      return null;
    }

    setLoading(true);
    try {
      const user = await loginUser(email, password);
      return user;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
}
