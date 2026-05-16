import { Section } from "@/components/site/Section";
import { workflowPillars } from "@/content/site";

export function WorkflowPillars() {
  return (
    <Section aria-label="Workflow pillars">
      <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
        Built for the full engineering loop
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {workflowPillars.map((pillar) => (
          <li key={pillar.id} className="site-panel p-5">
            <h3 className="mb-2 text-base font-medium">{pillar.label}</h3>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              {pillar.tagline}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
