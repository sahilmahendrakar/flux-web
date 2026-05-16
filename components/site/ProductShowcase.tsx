import { Section } from "@/components/site/Section";

/** Placeholder for the hero product composition — filled in by a follow-up task. */
export function ProductShowcase() {
  return (
    <Section id="product" aria-label="Product showcase" className="py-12 sm:py-16">
      <div
        className="site-panel aspect-[16/10] w-full overflow-hidden"
        aria-hidden
      >
        <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            Product composition
          </p>
          <p className="max-w-md text-sm text-[var(--muted)]">
            Planning docs, kanban board, delegated agents, worktrees, and review
            — visual placeholder for the cinematic hero showcase.
          </p>
        </div>
      </div>
    </Section>
  );
}
