
import './App.css'
import BrandingAndDesgin from './components/brandignDesign/BrandingAndDesgin';
import CustomPlugin from './components/customPlugin/CustomPlugin';
import CustomerSupport from './components/customerSupport/CustomerSupport'
import Hero from './components/hero/Hero'
import imageUrl from '/image/Ellipse 3.svg'
import Testimonial from './components/testimonial/Testimonial';
import CompanyLogo from './components/companyLogo/CompanyLogo';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
 

  return (
    <>
      <div className="main">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: " left top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
          <Hero />
        </div>
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
        </div>
        <Testimonial />
        <CustomerSupport />
        <Footer />
      </div>
    </>
  );
}

export default App
