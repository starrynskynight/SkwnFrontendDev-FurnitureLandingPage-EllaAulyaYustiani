import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BestSellerCarousel() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    axios.get('https://68275d656b7628c529101491.mockapi.io/best_seller')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  useEffect(() => {
    const handleResize = () => setSwiperKey((prev) => prev + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#2e221c] h-[420px] md:h-[775px] text-lime-100 py-14 px-4 relative">
      <div className="flex justify-between items-center mb-8 md:px-32 md:pt-18">
        <div>
          <p className="text-sm md:text-2xl uppercase text-[#E5F0B6]">Our Products</p>
          <h2 className="text-lg md:text-5xl font-bold text-[#E5F0B6]">
            This month’s best seller
          </h2>
        </div>
        <button className="bg-[#E5F0B6] text-[#2F241F] text-xs md:text-base font-normal px-[16px] py-[12px] uppercase rounded-md">
          See More
        </button>
      </div>

      <Swiper
        key={swiperKey}
        modules={[Navigation]}
        spaceBetween={32}
        slidesPerView={2}
        loop={products.length > 5} 
        speed={700}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="!px-1"
      >
        {products.map((product, idx) => {
          const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
          const isDesktop = width >= 1024;
          const isTablet = width >= 768 && width < 1024;

          const isActive = isDesktop
            ? idx === (activeIndex + 1) % products.length
            : idx === activeIndex % products.length;

          const sizeClass = isDesktop
            ? isActive
              ? 'w-[354px] h-[472px]'
              : 'w-[300px] h-[400px]'
            : isTablet
            ? isActive
              ? 'w-[240px] h-[320px]'
              : 'w-[220px] h-[290px]'
            : isActive
            ? 'w-[192px] h-[256px]'
            : 'w-[163px] h-[217px]';

          return (
            <SwiperSlide key={product.id}>
              <div
                className={clsx(
                  sizeClass,
                  'rounded-xl overflow-hidden relative bg-white text-black transition-all duration-500 ease-in-out mx-auto'
                )}
              >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {isActive && (
                  <div className="absolute bottom-12 left-6 bg-white/80 text-black px-2 py-1 text-xs font-semibold rounded">
                    ${product.price}
                  </div>
                )}
                {isActive && (
                  <div className="absolute bottom-10 left-6 translate-y-6 text-xl font-bold text-white drop-shadow-lg">
                    {product.name}
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="hidden md:flex absolute bottom-8 right-36 gap-10 z-10 text-5xl">
        <button className="custom-prev w-[56px] mh-[56px] rounded-full bg-[#E5F0B6] text-[#2e221c] flex items-center justify-center">
          &#x2039;
        </button>
        <button className="custom-next w-[56px] h-[56px] rounded-full bg-[#E5F0B6] text-[#2e221c] flex items-center justify-center">
          &#x203A;
        </button>
      </div>

      <div className="flex md:hidden absolute inset-y-1/2 left-0 right-0 px-2 justify-between z-10 text-4xl">
        <button className="custom-prev w-[48px] h-[48px] rounded-full bg-[#E5F0B6] text-[#2e221c] flex items-center justify-center">
          &#x2039;
        </button>
        <button className="custom-next w-[48px] h-[48px] rounded-full bg-[#E5F0B6] text-[#2e221c] flex items-center justify-center">
          &#x203A;
        </button>
      </div>
    </div>
  );
}
