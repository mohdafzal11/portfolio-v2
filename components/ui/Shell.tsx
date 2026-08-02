import { cn } from "@/lib/utils";

/**
 * The single layout container for the whole site. Replaces the 900px
 * inline-style object that used to be duplicated across four call sites
 * with fixed 24px gutters at every viewport.
 */
export function Shell({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
}) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10", className)}
    >
      {children}
    </Tag>
  );
}
