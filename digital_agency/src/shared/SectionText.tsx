import React from "react";

interface SectionTextProps {
  text: string;
  style?: React.CSSProperties;
}

const SectionText: React.FC<SectionTextProps> = ({ text,style }) => {
  return (
    <div>
      <p style={style} className="section-text">
        {text}
      </p>
    </div>
  );
};

export default SectionText;
