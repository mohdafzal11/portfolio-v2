import { Shell } from "@/components/ui/Shell";
import { Button, MonoLabel } from "@/components/ui/Primitives";
import { LocalTime } from "@/components/ui/LocalTime";
import { AgentGraph } from "@/components/hero/AgentGraph";
import { personalInfo } from "@/lib/data";

/** Staggered mount entrance, done in CSS so it needs no JS to resolve. */
const at = (prop: string, ms: number) =>
  ({ [prop]: `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      // overflow-hidden clips the drifting aura, which scales past the
      // viewport edge and otherwise adds a couple of px of scroll on mobile.
      className="relative isolate overflow-hidden pt-32 pb-16 md:pt-44 md:pb-20"
    >
      {/* Ambient backdrop — sits behind everything, never intercepts clicks. */}
      <div
        aria-hidden
        className="hero-aura pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(90% 70% at 30% 20%, black 10%, transparent 70%)",
        }}
      />

      <Shell>
        {/* Text left, topology graph right. The metadata rail below stays
            full-width, so the drawing hairline isn't cut in half. */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-8">
          <div>
            <div className="animate-rise" style={at("--rise-delay", 0)}>
              <MonoLabel className="block">
                {personalInfo.title} · {personalInfo.location}
              </MonoLabel>
            </div>

            {/* Each line rises out from behind its own clip window. */}
            <h1 className="type-hero mt-6">
              <span className="line-mask">
                <span style={at("--line-delay", 120)}>
                  {personalInfo.firstName}
                </span>
              </span>
              <span className="line-mask">
                <span
                  className="block text-fg-muted italic"
                  style={at("--line-delay", 240)}
                >
                  {personalInfo.lastName}
                </span>
              </span>
            </h1>

            <p
              className="animate-rise mt-8 max-w-2xl text-lg text-fg-muted md:text-xl"
              style={at("--rise-delay", 560)}
            >
              {personalInfo.positioning}
            </p>

            <div
              className="animate-rise mt-10 flex flex-wrap gap-3"
              style={at("--rise-delay", 700)}
            >
              <Button href={`mailto:${personalInfo.email}`}>
                Get in touch
              </Button>
              <Button
                href={personalInfo.resumeUrl}
                variant="secondary"
                external
              >
                View résumé
              </Button>
            </div>
          </div>

          {/* Decorative — desktop only, where the dead space actually is. */}
          <div
            className="animate-rise hidden lg:block"
            style={at("--rise-delay", 420)}
          >
            <AgentGraph />
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div
            className="rule-draw h-px w-full bg-hairline"
            style={at("--rule-delay", 840)}
          />
          <dl
            className="animate-rise grid grid-cols-2 gap-x-8 gap-y-6 pt-8 md:grid-cols-4"
            style={at("--rise-delay", 960)}
          >
            {[
              { label: "Currently", value: personalInfo.currentRole },
              {
                label: "Experience",
                value: `${personalInfo.yearsExperience} years`,
              },
              { label: "Status", value: personalInfo.availability },
              { label: "Local time", value: <LocalTime /> },
            ].map((item) => (
              <div key={item.label}>
                <dt className="type-label">{item.label}</dt>
                <dd className="mt-2 font-mono text-[0.8125rem] text-fg">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  );
}
