import VideoPlay from '../assets/icons/play.svg';
import Search from '../assets/icons/search.svg';

const HeroSection = () => {
  return (
    <div className="max-h-screen lg:h-screen w-full mx-0 flex flex-col md:flex-row">
      {/* Left Text Area */}
      <div className="md:w-[60%] w-full flex flex-col justify-center items-center md:items-start p-6 md:p-32 bg-white">
        <h1 className="text-[32px] md:text-7xl font-bold text-center md:text-left text-[#2F241F]">
          The kind of <span className="text-lime-600">furniture</span> you have been looking for
        </h1>

        <div className="mt-6 w-full flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
          <button className="bg-[#E5F0B6] text-[#553B33] hover:bg-lime-300 text-sm md:text-2xl font-normal px-5 py-2 rounded-xl w-[283px] h-[56px] md:w-[344px] md:h-[80px] flex items-center justify-center gap-2">
            <img src={Search} alt="Search" className="w-6 h-6" />
            SEARCH CATALOG
          </button>
          <button className="border border-black text-sm md:text-2xl px-5 py-2 rounded w-[283px] h-[56px] md:w-[344px] md:h-[80px] flex items-center justify-center gap-2">
            <img src={VideoPlay} alt="VideoPlay" className="w-6 h-6" />
            WATCH VIDEOS
          </button>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="md:w-[40%] w-full  relative">
  {/* Mobile-only tag */}
  <div className="absolute top-4 left-4 text-white text-xs px-2 py-1 rounded md:hidden z-10">
    HIGHLIGHTED PRODUCT
  </div>

  {/* Gambar: full, center crop */}
  <img
    src="/img/sofa.png"
    alt="Sofa"
    className="w-full h-[230px] md:h-full object-cover object-center aspect-[4/3]" // aspect ratio opsional
  />

  {/* Lapisan teks & tombol di kiri bawah */}
  <div className="absolute bottom-30 md:bottom-46 left-6 z-10">
    <span className="bg-white/50 text-black px-2 py-1 rounded text-sm h-[36px] w-[68px] md:text-2xl md:w-[61px] md:h-[36px] ">$329</span>
  </div>
  <div className="absolute bottom-20 md:bottom-26 left-6 z-10 text-white text-2xl md:text-[64px] font-normal">
    Pösht Sofa
  </div>
  <div className="absolute bottom-8 md:bottom-12 left-6 z-10">
    <button className="bg-black text-white text-xs md:text-base px-4 py-2 rounded-xl w-[146px] h-[40px] md:w-[197px] md:h-[56px] hover:scale-105 transition-transform duration-300 ease-in-out">
      View Details 
    </button>
  </div>
</div>

    </div>
  );
};

export default HeroSection;
