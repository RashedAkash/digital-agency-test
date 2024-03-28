import { FC } from "react";

interface Testimonial {
  image?: string;
  title?: string;
  text?: string;
}

interface TestimonialCardProps {
  test?: Testimonial;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ test }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-img">
        <img src={test?.image} alt="" />
      </div>
      <div>
        <h4 className="testimonial-card-title">{test?.title}</h4>
        <p className="testimonial-card-text">{test?.text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
