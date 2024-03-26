
import './App.css'
import CustomPlugin from './components/customPlugin/CustomPlugin';
import CustomerSupport from './components/customerSupport/CustomerSupport'
import Hero from './components/hero/Hero'

function App() {
 

  return (
    <>
      <div className='main'>
        <Hero />
        <CustomPlugin />
        <CustomerSupport />
      </div>
    </>
  );
}

export default App
