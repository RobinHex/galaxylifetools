import { useState } from "react";
import { registerUser } from "../services/authService";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (
    email: string,
    username: string,
    password: string,
    confirmPassword: string
  ) => {
    setError(null);

    if (!email || !username || !password || !confirmPassword) {
      setError("Please fill all fields");
      return null;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return null;
    }

    setLoading(true);
    try {
      const user = await registerUser(email, password, username);
      return user;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error };
}
