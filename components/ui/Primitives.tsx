import { cn } from "@/lib/utils";

/** Small uppercase monospace label — used for section numbers, dates, metadata. */
export function MonoLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("type-label", className)}>{children}</span>;
}

/** Section heading with a monospace index above a serif title. */
export function SectionHeading({
  index,
  title,
  aside,
}: {
  index: string;
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-hairline pb-6">
      <div>
        <MonoLabel className="block">{index}</MonoLabel>
        <h2 className="type-h2 mt-3">{title}</h2>
      </div>
      {aside ? <div className="pb-1">{aside}</div> : null}
    </div>
  );
}

/** Stack tag. */
export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.6875rem] tracking-[0.06em] text-fg-muted">
      {children}
    </span>
  );
}

/** Primary / secondary call-to-action button. */
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-5 py-3 font-mono text-[0.75rem] tracking-[0.08em] uppercase transition-colors duration-200",
        variant === "primary"
          ? "bg-accent text-accent-fg hover:bg-accent/85"
          : "border border-hairline-strong text-fg hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
    </a>
  );
}
