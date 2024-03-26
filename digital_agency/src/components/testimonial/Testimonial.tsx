import Container from "../../shared/Container";
import FullWidth from "../../shared/FullWidth";
import SectionSubTitle from "../../shared/SectionSubTitle";
import SectionTitle from "../../shared/SectionTitle";
import { testimonialData } from "../../../public/data/testimonial";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const titleStyle: React.CSSProperties = {
    width: "45%",
    margin: "0 auto",
    textAlign: "center",
  };
  const subTitleStyle: React.CSSProperties = {
    width: "45%",
    margin: "0 auto",
    textAlign: "center",
    textTransform: "uppercase",
  };
  return (
    <FullWidth>
      <Container>
        <div className="mt-100 mb-100">
          <div>
            <SectionSubTitle style={subTitleStyle} title="testimonial" />
            <SectionTitle
              style={titleStyle}
              title="Read What Other have to Say"
            />
          </div>
          <div className="testimonial">
            {testimonialData?.map((test, index) => (
              <TestimonialCard key={index} test={test} />
            ))}
          </div>
        </div>
      </Container>
    </FullWidth>
  );
};

export default Testimonial;
