import Hero from "@/components/home/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "./data";
import Grid from "@/components/home/grid";

export default function Home() {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      {/* <ThemeToggle></ThemeToggle> */}
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
