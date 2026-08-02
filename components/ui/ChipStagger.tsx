import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Primitives";

/**
 * Staggers chips in one at a time instead of the whole card fading as a block.
 *
 * Built on the CSS `Reveal` rather than Framer's `whileInView` on purpose:
 * chip labels are real content, and Framer's inline `opacity: 0` would strand
 * them if IntersectionObserver never fired. Reveal defaults to visible and
 * RevealObserver already carries a 1.5s failsafe, so the stagger is free.
 */
export function ChipStagger({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 30}>
          <Chip>{item}</Chip>
        </Reveal>
      ))}
    </div>
  );
}
