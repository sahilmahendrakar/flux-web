import { ctaLabels, heroContent } from "@/content/site";
import type { SiteUrls } from "@/content/site";

type HeroProps = {
  urls: SiteUrls;
};

export function Hero({ urls }: HeroProps) {
  return (
    <section
      className="site-section flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center px-6 py-20 sm:px-8"
      aria-label="Hero"
    >
      <div className="motion-safe mx-auto w-full max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-violet)]">
          {heroContent.eyebrow}
        </p>
        <h1 className="mb-6 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl md:text-5xl">
          {heroContent.headline}
        </h1>
        <p className="mb-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {heroContent.body}
        </p>
        <p className="mb-10 text-sm font-medium text-foreground/90 sm:text-base">
          {heroContent.promiseLine}
        </p>
        <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href={urls.downloadUrl} className="site-btn-primary">
            {ctaLabels.downloadMac}
          </a>
          <a href="#demo" className="site-btn-secondary">
            {ctaLabels.watchDemo}
          </a>
          <a
            href={urls.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--muted)] underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-violet)]"
          >
            {ctaLabels.viewGithub}
          </a>
        </div>
        <ul className="flex flex-col items-center gap-2 text-xs text-[var(--muted)] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
          {heroContent.trustRow.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className="size-1 rounded-full bg-[var(--brand-violet)]"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
