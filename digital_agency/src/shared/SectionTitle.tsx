import React from "react";

interface SectionTitleProps {
  title: string;
  style?: React.CSSProperties;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title,style }) => {
  return (
    <div>
      <h1 style={style} className="section-title">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
