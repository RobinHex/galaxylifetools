import React, { useState, useEffect, useCallback } from "react";

import { fetchAllianceByName, saveAllianceMembers } from "../services/allianceService";

export function useAlliance(initialSearch: string = "") {
  const [allianceName, setAllianceName] = useState(initialSearch);
  const [data, setData] = useState<any>(null);
  const [opponentName, setOpponentName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const handleSearch = useCallback(async (name?: string) => {
  const query = (name ?? allianceName ?? "").trim();
  if (!query) {
    setError("Please enter an alliance name");
    setData(null);
    setLoading(false);
    return;
  }

  setLoading(true);
  setError(null);
  setData(null);
  setOpponentName(null);

  try {
    const alliance = await fetchAllianceByName(query);
    setData(alliance);
    await saveAllianceMembers(alliance);

    if (alliance?.OpponentAllianceId) {
      const opponent = await fetchAllianceByName(alliance.OpponentAllianceId);
      setOpponentName(opponent?.Name ?? alliance.OpponentAllianceId);
    } else {
      setOpponentName(null);
    }
  } catch (err: any) {
    setError(err.message || "Alliance not found");
  } finally {
    setLoading(false);
  }
}, [allianceName]); // dependencias reales


  useEffect(() => {
    if (initialSearch) handleSearch(initialSearch);
  }, [initialSearch, handleSearch]);
  
  return { allianceName, setAllianceName, data, opponentName, loading, error, handleSearch };
}
