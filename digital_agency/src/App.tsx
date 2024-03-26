
import './App.css'
import BrandingAndDesgin from './components/brandignDesign/BrandingAndDesgin';
import CustomPlugin from './components/customPlugin/CustomPlugin';
import CustomerSupport from './components/customerSupport/CustomerSupport'
import Hero from './components/hero/Hero'
import imageUrl from '../public/image/Ellipse 3.svg'

function App() {
 

  return (
    <>
      <div className="main">
        <Hero />
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
        <CustomerSupport />
      </div>
    </>
  );
}

export default App
