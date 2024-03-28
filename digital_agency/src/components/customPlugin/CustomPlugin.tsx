import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import SectionText from "../../shared/SectionText";
import SectionTitle from "../../shared/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";

const CustomPlugin = () => {
  const textStyle: React.CSSProperties = {
    width: "64%",
  };
  return (
    <FullWidth>
      <Container>
        <div className="customer-plugin mt-150">
          <div className="customer-plugin-text">
            <div className="mb-25">
              <SectionTitle title="Custome & Plugin Development" />
            </div>
            <div>
              <SectionText
                style={textStyle}
                text="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"
              />
            </div>

            <div className="arrow mt-45">
              <FaArrowRightLong />
            </div>
          </div>
          <div className="customer-plugin-img">
            <img src="/image/plugin/businessman-analyzing-data.svg" alt="" />
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default CustomPlugin;
