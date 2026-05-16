type FluxLogoProps = {
  className?: string;
};

/** Flux wordmark with violet accent mark. */
export function FluxLogo({ className = "" }: FluxLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`.trim()}
    >
      <span
        className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-[0_0_20px_-4px_var(--accent-glow)]"
        aria-hidden
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 7h4.5M7.5 7H12M7 2v4.5M7 7.5V12"
            stroke="var(--brand-violet)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="7" cy="7" r="1.25" fill="var(--brand-violet)" />
        </svg>
      </span>
      <span>Flux</span>
    </span>
  );
}
