import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import JoinUs from "@/components/sections/JoinUs";
import Mission from "@/components/sections/Mission";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Activities />
      <Impact />
      <JoinUs />
      <Contact />
    </>
  );
}
