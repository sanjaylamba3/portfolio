import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      {/* <ThemeToggle></ThemeToggle> */}
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
}
