import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Archive } from "@/components/sections/Archive";
import { Experience } from "@/components/sections/Experience";
import { Stack } from "@/components/sections/Stack";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Archive />
        <Experience />
        <Stack />
        <About />
      </main>
      <Footer />
    </>
  );
}
