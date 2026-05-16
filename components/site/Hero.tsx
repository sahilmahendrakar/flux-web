import { ProductShowcase } from "@/components/site/ProductShowcase";
import { ctaLabels, heroContent } from "@/content/site";
import type { SiteUrls } from "@/content/site";

type HeroProps = {
  urls: SiteUrls;
};

export function Hero({ urls }: HeroProps) {
  return (
    <section
      className="hero-section relative overflow-hidden px-6 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:pb-24"
      aria-label="Hero"
    >
      <div className="hero-ambient pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="motion-safe mx-auto max-w-3xl text-center lg:max-w-4xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--brand-violet)]">
            {heroContent.eyebrow}
          </p>
          <h1 className="mb-6 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {heroContent.headline}
          </h1>
          <p className="mb-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {heroContent.body}
          </p>
          <p className="mb-10 text-sm font-medium text-foreground/90 sm:text-base">
            {heroContent.promiseLine}
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
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
              className="site-link-tertiary"
            >
              {ctaLabels.viewGithub}
            </a>
          </div>

          <ul className="mb-14 flex flex-col items-center gap-2 text-xs text-[var(--muted)] sm:mb-16 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
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

        <ProductShowcase />
      </div>
    </section>
  );
}
