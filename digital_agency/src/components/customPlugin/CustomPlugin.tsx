import Container from "../../shared/Container";
import ContainerFulid from "../../shared/ContainerFulid";
import SectionText from "../../shared/SectionText";
import SectionTitle from "../../shared/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";

const CustomPlugin = () => {
  const textStyle: React.CSSProperties = {
    width: "64%",
  };
  return (
    <ContainerFulid>
      <Container>
        <section className="customer-plugin  ">
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
        </section>
      </Container>
    </ContainerFulid>
  );
};

export default CustomPlugin;
