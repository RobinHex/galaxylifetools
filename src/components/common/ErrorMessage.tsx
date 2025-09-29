import React from "react";

interface Props {
  message: string | null;
}

const ErrorMessage: React.FC<Props> = ({ message }) => (
  message ? <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
    {message}</p> : null
);

export default ErrorMessage;
