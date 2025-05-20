import bannerImg from "../assets/bannerImg.jpg";
import { FaSpa, FaCalendarAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      id="home"
      className="min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-6xl text-white z-10 relative px-4">
        <div
          className="absolute -bottom-12 -rigth-12 md:-bottom-8 md: -right-8 text-4xl
        md:text-5xl text-amber-300/20 rotate-12"
        >
          <FaSpa />
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6
        font-[Great+Vibes] bg-gradient-to-r from-pink-200 via-rose-250 to-rose-300 bg-clip-text text-transparent drop-shadow-2xl animate-fad    e-in"
        >
          The Royal Spa & Saloon
        </h1>

        {/* Decorative divider */}
        <div
          className="w-48 md:w-64 h-1 bg-gradient-to-r from via-white -700 to-transparent
        mx-auto my-6 md:my-8 rounded-full"
        />

        {/* Tagline */}
        <div className="space-y-4 md:space-y-6 md-8 md:mb-12">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-pink-300 leading-tight">
            "Slay the Day, the Beauty Nation Way."
          </p>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
  <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white text-lg md:text-xl font-semibold px-6 md:px-8 py-3 rounded shadow-lg border border-white hover:scale-105 transition-all duration-300 font-[Poppins]">
    <FaCalendarAlt className="text-xl" />
    <span>Book Appointment</span>
  </button>
</div>

      </div>
    </div>
  );
};

export default Banner;
