import { Manrope, Red_Hat_Display } from 'next/font/google';
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

const manrope = Manrope({ subsets: ['latin'] });
const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <ThemeToggle />
      <main className="flex flex-col items-center gap-8 text-center">
        <Image
          src="/kulp.svg"
          alt="Kulp logo"
          width={400}
          height={100}
          priority
        />
        <h1 className={`${redHatDisplay.className} text-4xl md:text-5xl font-bold`}>
          Build Beyond Boundaries
        </h1>
      </main>
    </div>
  );
}
