import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import PartneredBrands from './components/PartneredBrand'
import Recommendations from './components/Recommendation'
import BestSeller from './components/BestSeller'
import PromoBanner from './components/PromoBanner'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <main className='w-full pt-[64px] md:pt-[140px]'>
        <HeroSection/>
        <WhyChooseUs/>
        <PartneredBrands/>
        <Recommendations/>
        <BestSeller/>
        <PromoBanner/>
        <Footer/>
      </main>
    </>
  )
}

export default App
