import LogoIcon from '../assets/icons/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-[#101828] px-6 py-24 text-[12px] md:text-[16px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-80">
        {/* Kiri / Logo dan Deskripsi */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-2 mb-4">
            <img src={LogoIcon} className="h-[30px]" alt="Logo Dekoor" />
            <span className="font-bold text-lg md:text-xl">Dekoor</span>
          </div>
          <p className="leading-relaxed">
            Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture.
            Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.
          </p>
          <p className="text-xs mt-6">©Copyright 2022 Dekoor</p>
        </div>

        {/* Kanan / Tiga kolom sejajar di desktop, bertumpuk di mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 text-[14px] md:text-[20px]">Support</h4>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Care guide</li>
              <li>Redeem warranty</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3 text-[14px] md:text-[20px]">Social Media</h4>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>TikTok</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-3 text-[14px] md:text-[20px]">About Us</h4>
            <ul className="space-y-2">
              <li>Our story</li>
              <li>Designer</li>
              <li>Craftmanship</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
