export default function PromoBanner() {
  return (
    <section className="bg-[#FCFAFA] py-16 px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm md:text-2xl text-[#2F241F] font-normal mb-2 md:mb-8 text-center md:text-left">LIMITED DEALS</p>
        <h2 className="text-lg md:text-[64px] font-bold text-[#2F241F] mb-8 leading-tight text-center md:text-left">
          Become a member and get 10% off of <br className="hidden md:block" />
          your first purchase
        </h2>

        <form className="flex md:flex-row w-full md:max-w-xl">
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 px-6 py-4 rounded-t-lg md:rounded-t-none md:rounded-l-lg border border-gray-200 text-[#473A34] placeholder:text-[#473A34] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#e5f0ba] text-[#2B1E1A] px-6 py-4 rounded-b-lg md:rounded-b-none md:rounded-r-lg flex items-center justify-center"
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="#2F241F"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
