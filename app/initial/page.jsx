import Nav from '@/components/initialpageUI/Navigation';
import Hero from '@/components/initialpageUI/Herosection';
import Feature from '@/components/initialpageUI/FeatureTabs'
import Results from '@/components/initialpageUI/Results'; 
import Contact from '@/components/initialpageUI/Contact';
import Footer from '@/components/initialpageUI/Footer';
// import Sponser from '../../components/initialpageUI/InfiniteMoving'
import Testimonials from '@/components/initialpageUI/Testimonials';
const page = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Feature/>
      <Results/>
      <Testimonials/>
      {/* <Sponser/> */}
      <Contact/>
      <Footer/>
    </div>  
  )
}

export default page
