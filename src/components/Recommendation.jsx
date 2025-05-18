import React, { useEffect, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';

const FurnitureCategories = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://68275d656b7628c529101491.mockapi.io/product_recommendation'); // file JSON lokal di public/
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const activeCategory = categories[activeIndex];

  return (
    <div className="flex flex-col md:flex-row items-start p-4 md:p-10">

      {/* Images */}
      <div className="w-full md:w-3/5 flex items-center justify-center gap-4 order-2 md:order-1 pt-4">
        {activeCategory?.images?.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="furniture"
            className="h-[132px] w-[104px] md:h-[523px] md:w-[148px] lg:hover:w-[472px] lg:active:w-[472px] transition-all duration-500 object-cover rounded-2xl"
          />
        ))}
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-2/5 order-1 md:order-2 md:mr-24">
        <p className="text-sm md:text-2xl text-[#2F241F] mb-4 text-center md:text-left">Categories</p>
        <h2 className="text-lg md:text-5xl font-bold text-gray-900 mb-6 text-center md:text-left">
          Furniture Sets <br /> Recommendations
        </h2>
        <div className="rounded-xl overflow-hidden">
        {categories.map((cat, index) => (
          <div
            key={cat.name}
            className={clsx(
              'px-6 py-4 cursor-pointer transition-all',
              index === activeIndex ? 'bg-[#E5F0B6]' : 'hover:bg-gray-50'
            )}
            onClick={() => setActiveIndex(index)}
          >
            <p className="font-bold text-[18px] text-black">
              {cat.name}
            </p>
            {index === activeIndex && (
              <p className="text-sm mt-1 text-black text-[14px]">{cat.description}</p>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FurnitureCategories;
