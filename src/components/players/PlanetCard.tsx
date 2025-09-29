import React, { useState } from "react";
import { SearchInput } from "../common/SearchInput";


interface PlanetCardProps {
  name: string;
  coords: { X: number; Y: number; Destroyed: boolean };
  onToggleDestroyed: () => void;
  onUpdateCoords: (x: number, y: number) => void;
}

const PlanetCard: React.FC<PlanetCardProps> = ({
  name,
  coords,
  onToggleDestroyed,
  onUpdateCoords,
}) => {
  const [x, setX] = useState(coords.X);
  const [y, setY] = useState(coords.Y);

  // 👉 Guardar cuando se presiona Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onUpdateCoords(x, y);
    }
  };

  // 👉 Guardar cuando se pierde el foco
  const handleBlur = () => {
    onUpdateCoords(x, y);
  };

  return (
    <div
      onClick={onToggleDestroyed}
      style={{
        background: coords.Destroyed ? "#dc2626" : "#1e293b", // rojo si está destruido
        border: "2px solid",
        borderColor: coords.Destroyed ? "#b91c1c" : "#3b82f6",
        padding: "1rem",
        borderRadius: "0.5rem",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      <p style={{ fontWeight: "bold" }}>{name}</p>

      {/* Inputs editables */}
      <div onClick={(e) => e.stopPropagation()}>
        <label>
          X:{" "}
          <SearchInput
            type="number"
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            style={{ width: "60px", textAlign: "center" }}
          />
        </label>
      </div>
     <div onClick={(e) => e.stopPropagation()}>
        <label>
          Y:{" "}
    <SearchInput
            type="number"
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            style={{ width: "60px", textAlign: "center" }}
          />
        </label>
      </div>
    </div>
  );
};

export default PlanetCard;
