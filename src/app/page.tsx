
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
      {/* <CldVideoPlayer
        width="1920"
        height="1080"
        src="feo-video-resources/frjvzm5gofltnkcgo1yp"
        sourceTypes={["hls"]} // <-- Add HLS as a source type or dash for MPEG-DASH
        transformation={{
          // <-- Add transformation prop
          streaming_profile: "hd", // <-- Add streaming profile
        }}
        autoPlay
      /> */}
     
    </main>
  );
}
