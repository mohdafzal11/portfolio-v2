import { cn } from "@/lib/utils";

/**
 * Scroll-reveal wrapper.
 *
 * Renders as a plain server component with `data-reveal`. The hidden state
 * lives in CSS behind an `.js` class on <html>, and RevealObserver adds
 * `.is-visible` when the element scrolls into view. Visible is the default,
 * so content can never be stranded at opacity 0 if JS or the observer fails.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Milliseconds. Use index * 60 for staggered lists. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  return (
    <Tag
      data-reveal=""
      className={cn(className)}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
