
import "next-cloudinary/dist/cld-video-player.css";

import { Hero } from "./components/ui/Hero";
import { Showcase } from "./components/ui/Showcase";
import { Person } from "./components/ui/Person";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Showcase />
      <Person />
    </main>
  );
}
