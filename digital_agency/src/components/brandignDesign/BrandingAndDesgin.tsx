import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import SectionText from "../../shared/SectionText";
import SectionTitle from "../../shared/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";

const BrandingAndDesgin = () => {
  const textStyle: React.CSSProperties = {
    width: "75%",
  };
  return (
    <FullWidth>
      <Container>
        <div className="branding-section bg-none mt-150 mb-100">
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
        </div>
      </Container>
    </FullWidth>
  );
};

export default BrandingAndDesgin;