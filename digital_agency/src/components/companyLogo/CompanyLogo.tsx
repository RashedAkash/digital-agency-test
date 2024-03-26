import React from "react";
import { imageData } from "../../../public/data/companyLogoData";
import SectionSubTitle from "../../shared/SectionSubTitle";
import Marquee from "react-fast-marquee";

// Define the type for an image object
type ImageData = {
  id: number;
  img: string;
};

const CompanyLogo: React.FC = () => {
  return (
    <div className="company-logo ">
      <div className="company-title">
        <SectionSubTitle title="Trusted by 4,000+ companies" />
      </div>
      <Marquee>
        <div className="image-grid">
          {imageData?.map((imgData: ImageData, index: number) => (
            <div key={index} className="image-item">
              <img src={imgData.img} alt={`Image ${imgData.id}`} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CompanyLogo;
