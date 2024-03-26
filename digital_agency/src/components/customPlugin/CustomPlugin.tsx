import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import SectionText from "../../shared/SectionText";
import SectionTitle from "../../shared/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";
const CustomPlugin = () => {
  const textStyle: React.CSSProperties = {
    width: "66%",
  };
  return (
    <FullWidth>
      <Container>
        <div className="hero">
          <div className="hero-text">
            <SectionTitle title="Custome & Plugin Development" />
            <SectionText
              style={textStyle}
              text="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"
            />

            <div className="arrow">
              <FaArrowRightLong />
            </div>
          </div>
          <div className="hero-img">
            <img
              src="../../../public/image/plugin/businessman-analyzing-data.svg"
              alt=""
            />
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default CustomPlugin;
