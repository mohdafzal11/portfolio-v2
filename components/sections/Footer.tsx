import { Shell } from "@/components/ui/Shell";
import { Reveal } from "@/components/ui/Reveal";
import { MonoLabel } from "@/components/ui/Primitives";
import { personalInfo } from "@/lib/data";

const socials = Object.values(personalInfo.social);

export function Footer() {
  return (
    <footer id="contact" className="border-t border-hairline py-20 md:py-28">
      <Shell>
        <Reveal>
          <MonoLabel className="block">05 / Contact</MonoLabel>
          <a
            href={`mailto:${personalInfo.email}`}
            className="link-sweep type-h2 mt-6 inline-block break-all transition-colors duration-300 hover:text-accent"
          >
            {personalInfo.email}
          </a>
          <p className="mt-6 max-w-xl text-fg-muted">
            {personalInfo.availability}. The fastest way to reach me is email —
            I read everything and reply to most.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-hairline pt-8">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-sweep inline-flex min-h-11 items-center font-mono text-[0.75rem] tracking-[0.08em] text-fg-muted transition-colors hover:text-fg"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>

            <MonoLabel>
              © {new Date().getFullYear()} {personalInfo.name} · Built with
              Next.js
            </MonoLabel>
          </div>
        </Reveal>
      </Shell>
    </footer>
  );
}
