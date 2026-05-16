import { Section } from "@/components/site/Section";
import { supportedIntegrations } from "@/content/site";

export function AgentBand() {
  return (
    <Section aria-label="Integrations">
      <p className="mb-8 text-center text-sm font-medium text-[var(--muted)]">
        Built for the CLI agents and workflows you already use
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {supportedIntegrations.map((name) => (
          <li key={name}>
            <span className="site-pill">{name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
