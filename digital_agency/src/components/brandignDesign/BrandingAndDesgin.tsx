import Container from "../../shared/Container";

import SectionText from "../../shared/SectionText";
import SectionTitle from "../../shared/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";
import ContainerFulid from "../../shared/ContainerFulid";
const BrandingAndDesgin = () => {
  const textStyle: React.CSSProperties = {
    width: "90%",
  };
  return (
    <ContainerFulid>
      <Container>
        <section className="branding-section bg-none mt-138  ">
          <div className="branding-section-img block">
            <img
              src="/image/branding/designer-team-working-on-creative-design.svg"
              alt=""
            />
          </div>
          <div className="branding-section-text">
            <SectionTitle title="Branding & Design system" />
            <SectionText
              style={textStyle}
              text="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"
            />
            <div className="arrow mt-45">
              <FaArrowRightLong />
            </div>
          </div>
        </section>
      </Container>
    </ContainerFulid>
  );
};

export default BrandingAndDesgin;
