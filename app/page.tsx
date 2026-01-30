import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import JoinUs from "@/components/sections/JoinUs";
import Mission from "@/components/sections/Mission";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Activities />
      <Gallery />
      <Impact />
      <JoinUs />
    </>
  );
}
