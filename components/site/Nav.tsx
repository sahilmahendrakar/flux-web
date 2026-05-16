import { ctaLabels, navLinks } from "@/content/site";
import type { SiteUrls } from "@/content/site";

type NavProps = {
  urls: SiteUrls;
};

export function Nav({ urls }: NavProps) {
  return (
    <header className="site-nav sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--surface-nav)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <div className="flex items-center gap-2.5">
          <a href="#" className="text-sm font-semibold tracking-tight">
            Flux
          </a>
          <span className="site-pill">Beta</span>
        </div>
        <nav
          className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={
                link.label === "GitHub" ? urls.githubUrl : link.href
              }
              className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-violet)]"
              {...(link.label === "GitHub"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={urls.downloadUrl}
          className="site-btn-primary shrink-0 text-sm"
        >
          {ctaLabels.downloadMac}
        </a>
      </div>
    </header>
  );
}
