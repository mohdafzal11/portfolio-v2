"use client";

interface AsciiArtProps {
  lines: string[];
}

export default function AsciiArt({ lines }: AsciiArtProps) {
  return (
    <div className="overflow-hidden my-2">
      <pre
        className="text-[#D2FF70] font-mono whitespace-pre select-none leading-tight"
        style={{ fontSize: "clamp(8px, 1.6vw, 16px)" }}
      >
        {lines.join("\n")}
      </pre>
    </div>
  );
}
