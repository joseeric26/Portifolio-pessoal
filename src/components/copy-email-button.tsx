"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("E-mail copiado.");
    } catch {
      setMessage("Não foi possível copiar. Selecione o e-mail e copie manualmente.");
    }
  }

  return (
    <div className="copy-email">
      <button className="button button--outline" onClick={copyEmail} type="button">
        Copiar e-mail
      </button>
      {message && (
        <span className="copy-email__status" role="status">
          {message}
        </span>
      )}
    </div>
  );
}
