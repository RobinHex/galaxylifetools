import { useState, useEffect, useCallback } from "react";
import { fetchPlayerByName } from "../services/playerService";

export function usePlayer(initialSearch: string = "") {
  const [playerName, setPlayerName] = useState(initialSearch);
  const [player, setPlayer] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (name?: string) => {
    const query = (name ?? playerName ?? "").trim();
    if (!query) {
      setError("Please enter a player name");
      setPlayer(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setPlayer(null);

    try {
      const data = await fetchPlayerByName(query);
      setPlayer(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [playerName]);

  useEffect(() => {
    if (initialSearch) handleSearch(initialSearch);
  }, [initialSearch, handleSearch]);

  return {
    playerName,
    setPlayerName,
    player,
    loading,
    error,
    handleSearch,
  };
}
