import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="relative z-0 flex-1">
        <Hero />
        <TrustBar />
        <Work />
        <Process />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
