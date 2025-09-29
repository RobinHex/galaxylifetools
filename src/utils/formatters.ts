// Formatea números con comas (1_000_000 → "1,000,000")
export const formatNumber = (num: number | undefined | null): string =>
  num !== undefined && num !== null ? num.toLocaleString() : "N/A";

// Convierte booleanos a "Yes" o "No"
export const formatBoolean = (value: boolean | undefined | null): string =>
  value ? "Yes" : "No";

// Normaliza nombres: elimina espacios extra y capitaliza
export const normalizeName = (name: string | undefined | null): string =>
  name
    ? name
        .trim()
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
    : "Unknown";
