import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import SectionText from "../../shared/SectionText";
import SectionTitle from "../../shared/SectionTitle";

const Hero = () => {
   const titleStyle: React.CSSProperties = {   
     fontSize: "64px",     
   };
   const textStyle: React.CSSProperties = {   
     fontSize: "18px",     
   };
  return (
    <FullWidth>
      <Container>
        <div className="hero">
          <div className="hero-text">
            <SectionTitle
              style={titleStyle}
              title="Building digital products, brands & experience"
            />
            <SectionText
              style={textStyle}
              text="Digital Agency is your online team management tool that easy and prompt
"
            />
          </div>
          <div className="hero-img">
            <img
              src="../../../public/image/hero/business-people-discussing-business-idea.svg"
              alt=""
            />
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default Hero;