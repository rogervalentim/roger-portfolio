"use client";

import { useRef, type ReactNode } from "react";

export function StackDialog({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls="complete-stack"
        onClick={() => dialogRef.current?.showModal()}
        className="mt-5 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[7px] border border-[#3637497d] bg-[#10132E] px-4 py-2 text-sm font-medium text-[#E4ECFF] transition-colors hover:border-[#CBACF9]/50 hover:text-[#CBACF9]"
      >
        Ver stack completa
        <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        id="complete-stack"
        data-stack-dialog
        aria-labelledby="complete-stack-title"
        aria-describedby="complete-stack-description"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[720px] overflow-hidden rounded-[23px] border border-[#363749] bg-[#04071D] p-0 text-[#E4ECFF] shadow-2xl backdrop:bg-[#000319]/80 backdrop:backdrop-blur-sm"
      >
        <div className="flex max-h-[calc(100dvh-2rem)] flex-col bg-linear-to-r from-[#04071D] to-[#0C0E23]">
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[#3637497d] p-6 md:px-8">
            <div>
              <h2 id="complete-stack-title" className="text-2xl font-bold leading-tight text-white md:text-3xl">
                Stack <span className="text-[#CBACF9]">completa</span>
              </h2>
              <p id="complete-stack-description" className="mt-2 text-sm leading-relaxed text-[#C1C2D3]">
                Tecnologias e ferramentas organizadas por área.
              </p>
            </div>
            <button
              type="button"
              aria-label="Fechar stack completa"
              onClick={() => dialogRef.current?.close()}
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-[7px] border border-[#3637497d] bg-[#10132E] text-[#C1C2D3] transition-colors hover:text-white"
            >
              <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m6 6 12 12M6 18 18 6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 overflow-y-auto overscroll-contain p-6 md:p-8">
            {children}
          </div>
        </div>
      </dialog>
    </>
  );
}
