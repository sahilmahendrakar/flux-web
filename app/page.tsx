/** Direct GitHub Release asset URL (tag + filename must match the release). */
const DEFAULT_DOWNLOAD =
  "https://github.com/sahilmahendrakar/flux-web/releases/download/v0.1.0/Flux-0.1.0-arm64.dmg";

export default function Home() {
  const downloadUrl =
    process.env.NEXT_PUBLIC_FLUX_DOWNLOAD_URL ?? DEFAULT_DOWNLOAD;

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <div
        className="hero-ambient pointer-events-none absolute inset-0"
        aria-hidden
      />
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="mb-3 flex items-center gap-3">
            <h1 className="text-[2.75rem] font-extralight tracking-[-0.04em] sm:text-6xl sm:tracking-[-0.045em]">
              Flux
            </h1>
            <span className="rounded-full border border-neutral-300/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] dark:border-white/12">
              Beta
            </span>
          </div>
          <p className="mb-12 max-w-[17rem] text-sm leading-relaxed text-[var(--muted)] sm:max-w-none sm:text-[0.9375rem]">
            Orchestrate your coding agents.
          </p>
          <a
            href={downloadUrl}
            target="_self"
            className="group relative inline-flex h-11 items-center justify-center rounded-full bg-neutral-950 px-8 text-sm font-medium text-white transition-[transform,box-shadow] duration-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_40px_-12px_rgba(0,0,0,0.35)] active:scale-[0.98] dark:bg-white dark:text-neutral-950 dark:hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_12px_48px_-12px_rgba(0,0,0,0.45)]"
          >
            Download
          </a>
        </div>
      </main>
    </div>
  );
}
