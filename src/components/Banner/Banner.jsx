import videoBaking from "../../assets/videos/baking.mp4";
import "./Banner.scss";
const Banner = () => {
  return (
    <>
      <div className="relative z-[-1]">
        <p className="overlay-banner"></p>
        <span className="w-full h-full flex flex-col justify-center font-[Alegreya] text-3xl text-center absolute text-white md:text-5xl lg:text-6xl">
          In The Oven
          <p className="text-xl text-center italic mt-3 b">
            Freshly baked, everyday
          </p>
        </span>
        <video
          className="w-full h-[300px] md:h-[350px] lg:h-[450px] object-cover"
          loop
          muted
          autoPlay="autoplay"
        >
          <source src={videoBaking} type="video/mp4"></source>
        </video>
      </div>
    </>
  );
};
export default Banner;
