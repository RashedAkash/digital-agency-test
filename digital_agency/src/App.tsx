
import './App.css'
import BrandingAndDesgin from './components/brandignDesign/BrandingAndDesgin';
import CustomPlugin from './components/customPlugin/CustomPlugin';
import CustomerSupport from './components/customerSupport/CustomerSupport'
import Hero from './components/hero/Hero'
import imageUrl from '/image/Ellipse 3.svg'
import Testimonial from './components/testimonial/Testimonial';
import CompanyLogo from './components/companyLogo/CompanyLogo';

function App() {
 

  return (
    <>
      <div className="main">
        <Hero />
        <CompanyLogo />
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <BrandingAndDesgin />
          <CustomPlugin />
        C</div>
        <Testimonial />
        <CustomerSupport />
      </div>
    </>
  );
}

export default App
