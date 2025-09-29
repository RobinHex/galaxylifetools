import React from "react";
import SearchBar from "../components/common/SearchBar";
import Spinner from "../components/common/Spinner";
import ErrorMessage from "../components/common/ErrorMessage";
import { useSearchParams } from "react-router-dom";
import { useAlliance } from "../hooks/useAlliance";
import { AllianceInfoCard } from "../components/alliance/AllianceInfoCard";
import { AllianceMembersGrid } from "../components/alliance/AllianceMembersGrid";

const Alliance: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const { allianceName, setAllianceName, data, opponentName, loading, error, handleSearch } = useAlliance(initialSearch);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleOpponentClick = (name: string) => {
    setAllianceName(name);
    handleSearch(name);
  };

  return (
    <div style={{ color: "white", background: "#1e293b", minHeight: "100vh", paddingBottom: "2rem" }}>
      <SearchBar value={allianceName} onChange={(e) => setAllianceName(e.target.value)} onSearch={handleSearch} onKeyDown={handleKeyDown} placeholder="Enter alliance name" />

      {loading && !data && <Spinner size={60} />}
      <ErrorMessage message={error} />

      {data && (
        <>
          <AllianceInfoCard data={data} opponentName={opponentName} onOpponentClick={handleOpponentClick} />
          <h3 style={{ textAlign: "center", marginTop: "2rem" }}>Members ({data.Members.length})</h3>
          <AllianceMembersGrid members={data.Members} />
        </>
      )}

{/* si se habilita el loading de abajo, la carga es lenta pero funcional */}
      {/* {loading ? (
  <Spinner size={60} />
) : (
  <>
    <ErrorMessage message={error} />
    {data && (
      <>
        <AllianceInfoCard
          data={data}
          opponentName={opponentName}
          onOpponentClick={handleOpponentClick}
        />
        <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
          Members ({data.Members.length})
        </h3>
        <AllianceMembersGrid members={data.Members} />
      </>
    )}
  </>
)} */}

    </div>
  );
};

export default Alliance;
