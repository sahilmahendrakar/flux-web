import type { FeatureBlock } from "@/content/site";

type FeatureSectionProps = {
  feature: FeatureBlock;
  reversed?: boolean;
};

/** Reusable feature block — visual slot is a placeholder for follow-up tasks. */
export function FeatureSection({ feature, reversed = false }: FeatureSectionProps) {
  return (
    <section
      id={feature.id}
      aria-label={feature.title}
      className="site-section px-6 py-16 sm:px-8 sm:py-20"
    >
      <div
        className={`motion-safe mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight">
            {feature.title}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-[var(--muted)]">
            {feature.message}
          </p>
          <ul className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            {feature.proofPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span
                  className="mt-2 size-1 shrink-0 rounded-full bg-[var(--brand-violet)]"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="site-panel flex aspect-[4/3] items-center justify-center p-6"
          aria-hidden
        >
          <span className="text-xs text-[var(--muted)]">Visual placeholder</span>
        </div>
      </div>
    </section>
  );
}
