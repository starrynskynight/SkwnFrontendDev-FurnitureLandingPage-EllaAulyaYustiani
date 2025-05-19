

const WhyChooseUs = () => {
  return (
    <div className="bg-[#2F241F] text-lime-100 py-12 px-6 md:px-48 ">
      <p className="text-sm md:text-2xl uppercase tracking-widest mb-4">Why choose us?</p>
      <h2 className="text-2xl md:text-[72px] font-bold mb-8">
        We care about details and the quality of our products
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-42">
        <div className="flex items-center gap-3">
          <div className="bg-[#E5F0B680] p-2 h-[40px] w-[40px] rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_658)">
            <path d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09 2.53002 2.53 6.09001 3.05 10.32C3.39 13.12 5.61 15.44 8.39 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.50002C5 7.01002 7.01 5.00002 9.5 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.5 14Z" fill="#F4F4F4"/>
            </g>
            <defs>
            <clipPath id="clip0_4_658">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <p className="text-[15px] font-bold md:text-2xl">
            MANUFACTURED WITH <br /> QUALITY MATERIALS
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#E5F0B680] p-2 h-[40px] w-[40px] rounded-lg text-2xl font-bold flex items-center justify-center">
            5
          </div>
          <p className="text-[15px] font-bold md:text-2xl">
            5 YEARS OF WARRANTY <br /> FOR EACH PRODUCT
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#E5F0B680] p-2 h-[40px] w-[40px] rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V2H8V4H12ZM2 7V16C2 16.55 2.45 17 3 17H17C17.55 17 18 16.55 18 16V7C18 6.45 17.55 6 17 6H3C2.45 6 2 6.45 2 7ZM18 4C19.11 4 20 4.89 20 6V17C20 18.11 19.11 19 18 19H2C0.89 19 0 18.11 0 17L0.00999999 6C0.00999999 4.89 0.89 4 2 4H6V2C6 0.89 6.89 0 8 0H12C13.11 0 14 0.89 14 2V4H18Z" fill="#F4F4F4"/>
            </svg>
          </div>
          <p className="text-[15px] font-bold md:text-2xl leading-tight">
            20 YEARS OF EXPERTISE
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
