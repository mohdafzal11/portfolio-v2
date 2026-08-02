"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

/**
 * Live local time in Bengaluru. Renders a stable placeholder until mounted
 * so the static export and the hydrated client agree on first paint.
 */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: personalInfo.timezone,
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time ?? "——"} IST</span>;
}
