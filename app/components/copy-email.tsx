"use client";

import { useState } from "react";

export function CopyEmail({ email, className = "", locale = "pt" }: { email: string; className?: string; locale?: "pt" | "en" }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-live="polite"
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center rounded-[7px] border border-[#363749] px-4 text-sm text-[#E4ECFF] transition-colors hover:border-[#CBACF9]/60 hover:text-[#CBACF9] ${className}`}
    >
      {copied ? (locale === "en" ? "Email copied!" : "E-mail copiado!") : (locale === "en" ? "Copy email" : "Copiar e-mail")}
    </button>
  );
}
