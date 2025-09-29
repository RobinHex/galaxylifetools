import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/common/SearchBar";
import Spinner from "../components/common/Spinner";
import ErrorMessage from "../components/common/ErrorMessage";
import { usePlayer } from "../hooks/usePlayer";
import { PlayerInfoCard } from "../components/players/PlayerInfoCard";

const SearchPlayer: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const {
    playerName,
    setPlayerName,
    player,
    loading,
    error,
    handleSearch,
  } = usePlayer(name || "");

  useEffect(() => {
    if (name) {
      setPlayerName(name);
      handleSearch(name);
    }
  }, [name, handleSearch, setPlayerName]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div style={{ color: "white", background: "#1e293b", minHeight: "100vh", paddingBottom: "2rem" }}>
      <SearchBar
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        onSearch={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Enter player name"
      />

      {loading && <Spinner size={60} />}

      <ErrorMessage message={error} />

      {player && <PlayerInfoCard player={player} />}
    </div>
  );
};

export default SearchPlayer;
