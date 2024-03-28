import BlueButton from "../../shared/BlueButton";
import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import SectionText from "../../shared/SectionText";
import SectionTitle from "../../shared/SectionTitle";


const CustomerSupport = () => {
   const titleStyle: React.CSSProperties = {
     
     textTransform: "none",
   };
  const textStyle: React.CSSProperties = {
    width: "70%",
   
  };
  return (
    <FullWidth>
      <Container>
        <div className="customer-support mt-135">
          <div className="customer-support-img">
            <img src="/image/customerSupport/customer-support.svg" alt="" />
          </div>
          <div className="customer-support-text">
            <div className="">
              <SectionTitle
                style={titleStyle}
                title="Be a part of the next big thing"
              />
            </div>
            <div className="customer-pra">
              <SectionText
                style={textStyle}
                text="We work with Brans, Startups, to SMEs. Colaborate for more impact and growt
"
              />
            </div>
            <BlueButton text="contact us" />
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default CustomerSupport;