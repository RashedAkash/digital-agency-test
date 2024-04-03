import BlueButton from "../../shared/BlueButton";
import Container from "../../shared/Container";
import ContainerFulid from '../../shared/ContainerFulid'
import SectionText from "../../shared/SectionText";

const Hero = () => {

  return (
    <ContainerFulid>
      <Container>
        <section className="hero  ">
          <div className="hero-text">
            <h1 className="hero-title">
              Building digital products, brands & experience
            </h1>
            <div className="hero-pra">
              <SectionText
                
                text="Digital Agency is your online team management tool that easy and prompt
"
              />
            </div>
            <div className="hero-button">
              <BlueButton text="contact us" />
            </div>
          </div>
          <div className="hero-img">
            <img
              src="/image/hero/business-people-discussing-business-idea.svg"
              alt=""
            />
          </div>
        </section>
      </Container>
    </ContainerFulid>
  );
};

export default Hero;
