const PartneredBrands = () => {
  return (
    <div className="bg-[#FCFAFA] py-12 md:py-24 px-4 md:px-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-8xl font-bold text-[#2F241F]">25+</h2>
          <p className="text-sm md:text-2xl tracking-wide text-[#2F241F] mt-1">PARTNERED BRANDS</p>
        </div>

        <div className="flex items-center justify-center md:justify-start flex-wrap gap-6 md:gap-8">
          <img src="/brands/gusto.svg" alt="Gusto" className="h-7 md:h-18 object-contain" />
          <img src="/brands/stripe.svg" alt="Stripe" className="h-7 md:h-18 object-contain" />
          <img src="/brands/treehouse.svg" alt="Treehouse" className="h-7 md:h-18 object-contain" />
          <img src="/brands/upwork.svg" alt="Upwork" className="h-7 md:h-18 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default PartneredBrands;
