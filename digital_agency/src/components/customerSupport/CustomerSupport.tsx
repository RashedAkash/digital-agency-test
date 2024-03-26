import BlueButton from "../../shared/BlueButton";
import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import SectionText from "../../shared/SectionText";
import SectionTitle from "../../shared/SectionTitle";


const CustomerSupport = () => {
   const titleStyle: React.CSSProperties = {
     width: "80%",
  };
  const textStyle: React.CSSProperties = {
    width: "70%",
  };
  return (
    <FullWidth>
      <Container>
        <div className="customer-support">
          <div className="customer-support-img">
            <img
              src="../../../public/image/customerSupport/customer-support.svg"
              alt=""
            />
          </div>
          <div className="customer-support-text">
            <SectionTitle
              style={titleStyle}
              title="Be a part of the next big thing"
            />
            <SectionText
              style={textStyle}
              text="We work with Brans, Startups, to SMEs. Colaborate for more impact and growt
"
            />
            <BlueButton text="contact us" />
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default CustomerSupport;