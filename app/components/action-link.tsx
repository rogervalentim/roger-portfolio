import type { ComponentProps } from "react";

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}

export function ActionLink({ children, className = "", ...props }: ComponentProps<"a">) {
  return (
    <a {...props} className={`border-header flex min-h-[66px] items-center justify-center gap-2.5 rounded-[13px] bg-linear-to-r from-[#161A31] to-[#06091F] px-6 text-[18px] font-medium leading-[120%] tracking-[-0.48px] text-white transition-all duration-300 hover:from-[#1B2B6B] hover:to-[#0A0F3A] ${className}`}>
      {children}
      <ArrowIcon />
    </a>
  );
}
