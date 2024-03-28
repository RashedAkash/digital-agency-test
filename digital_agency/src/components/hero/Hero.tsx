import BlueButton from "../../shared/BlueButton";
import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import SectionText from "../../shared/SectionText";


const Hero = () => {
   
   const textStyle: React.CSSProperties = {   
     fontSize: "18px",     
   };
  return (
    <FullWidth>
      <Container>
        <div className="hero mb-150 ">
          <div className="hero-text">
            <h1 className="hero-title">
              Building digital products, brands & experience
            </h1>
            <div className="hero-pra">
              <SectionText
                style={textStyle}
                text="Digital Agency is your online team management tool that easy and prompt
"
              />
            </div>
            <BlueButton text="contact us" />
          </div>
          <div className="hero-img">
            <img
              src="/image/hero/business-people-discussing-business-idea.svg"
              alt=""
            />
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default Hero;