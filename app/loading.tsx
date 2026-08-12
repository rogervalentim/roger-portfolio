export default function Loading() {
  return (
    <div
      aria-label="Carregando portfólio"
      aria-live="polite"
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#000319]"
      role="status"
    >
      <div className="flex flex-col items-center gap-5">
        <span className="loading-mark" aria-hidden="true" />
        <span className="text-sm font-medium tracking-[0.14em] text-[#C1C2D3]">
          CARREGANDO EXPERIÊNCIA
        </span>
      </div>
    </div>
  );
}
