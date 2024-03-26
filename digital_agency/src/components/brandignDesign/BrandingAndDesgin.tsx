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
        <div className="customer-support bg-none mt-100 mb-100">
          <div className="customer-support-img block">
            <img
              src="../../../public/image/branding/designer-team-working-on-creative-design.svg"
              alt=""
            />
          </div>
          <div className="customer-support-text">
            <SectionTitle title="Branding & Design system" />
            <SectionText
              style={textStyle}
              text="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"
            />
            <div className="arrow">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default BrandingAndDesgin;