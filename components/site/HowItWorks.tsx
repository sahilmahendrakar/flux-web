import { Section } from "@/components/site/Section";
import { howItWorksSteps } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="how-it-works" aria-label="How it works">
      <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
        How it works
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base">
        Plan, delegate, track, and review — the full loop for AI-assisted
        engineering work.
      </p>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorksSteps.map((step, index) => (
          <li key={step.id} className="site-panel flex flex-col gap-3 p-5">
            <span className="text-xs font-medium text-[var(--brand-violet)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-medium">{step.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              {step.description}
            </p>
            <div
              className="mt-auto flex h-24 items-center justify-center rounded-lg border border-dashed border-[var(--border-subtle)] bg-[var(--surface-inset)] text-xs text-[var(--muted)]"
              aria-hidden
            >
              UI fragment
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
