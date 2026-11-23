"use client";

import { useEffect, useRef, useState } from "react";
import { ActionButton } from "./action-link";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export function CopyEmail({
  email,
  className = "",
  locale = "pt",
  variant = "secondary",
}: {
  email: string;
  className?: string;
  locale?: Locale;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const t = getTranslations(locale);
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <span className={`relative inline-flex ${className}`}>
      <ActionButton
        onClick={copyEmail}
        variant={variant}
        aria-label={`${t.copyEmail}: ${email}`}
        className="w-full"
      >
        {copied ? (
          <>
            <svg
              aria-hidden="true"
              focusable="false"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
            >
              <path d="m4 12 5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.copied}
          </>
        ) : (
          <>
            <svg
              aria-hidden="true"
              focusable="false"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h8" strokeLinecap="round" />
            </svg>
            {t.copyEmail}
          </>
        )}
      </ActionButton>
      {/* Feedback não depende só de cor: muda o ícone, o texto e anuncia em aria-live. */}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? `${t.copied}: ${email}` : ""}
      </span>
    </span>
  );
}
