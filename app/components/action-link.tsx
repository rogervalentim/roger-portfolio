import type { ComponentProps } from "react";

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
    >
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium leading-none transition-colors duration-200";

const variants = {
  primary: "bg-fg text-ink hover:bg-white",
  secondary:
    "border border-line bg-surface text-fg hover:border-line-strong hover:bg-[#16161a]",
  ghost: "px-0 text-muted hover:text-fg",
} as const;

export function ActionLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof variants }) {
  return (
    <a {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

export function ActionButton({
  children,
  className = "",
  variant = "secondary",
  ...props
}: ComponentProps<"button"> & { variant?: keyof typeof variants }) {
  return (
    <button
      type="button"
      {...props}
      className={`${base} cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
