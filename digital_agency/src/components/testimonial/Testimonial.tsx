import Container from "../../shared/Container";
import ContainerFulid from "../../shared/ContainerFulid";
import SectionSubTitle from "../../shared/SectionSubTitle";
import SectionTitle from "../../shared/SectionTitle";
import { testimonialData } from "../../../public/data/testimonial";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const titleStyle: React.CSSProperties = {
   
    margin: "0 auto",
    textAlign: "center",
  };
  const subTitleStyle: React.CSSProperties = {
    
    margin: "0 auto",
    textAlign: "center",
    textTransform: "uppercase",
  };
  return (
    <ContainerFulid>
      <Container>
        <section className=" testimonials  responsive-mt ">
          <div>
            <div className="testimonial-title">
              <SectionSubTitle style={subTitleStyle} title="testimonials" />
            </div>
            <div className="testimonial-title">
              <SectionTitle
                style={titleStyle}
                title="Read What Other have to Say"
              />
            </div>
          </div>
          <div className="testimonial ">
            {testimonialData?.map((test, index) => (
              <TestimonialCard key={index} test={test} />
            ))}
          </div>
        </section>
      </Container>
    </ContainerFulid>
  );
};

export default Testimonial;
