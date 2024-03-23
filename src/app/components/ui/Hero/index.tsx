import "next-cloudinary/dist/cld-video-player.css";

export const Hero = () => {
  return (
    <div className="w-full overflow-hidden h-screen">
      <video
        className="inset-0 object-cover w-full h-full"
        muted
        playsInline
        loop
        autoPlay
        src="https://pro2-bar.myportfolio.com/v1/ccvproxy/RYHa8hhid_Y?width=1920&type=mp4&h=710a37f1bb12980df9a8d477656c0957"
      />
    </div>
  );
};
