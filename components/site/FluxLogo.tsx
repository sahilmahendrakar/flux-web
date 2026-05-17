import Image from "next/image";

type FluxLogoProps = {
  className?: string;
};

/** Flux wordmark with app icon. */
export function FluxLogo({ className = "" }: FluxLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`.trim()}
    >
      <Image
        src="/flux-icon.png"
        alt=""
        width={28}
        height={28}
        className="size-7 shrink-0 rounded-lg"
        aria-hidden
      />
      <span>Flux</span>
    </span>
  );
}
