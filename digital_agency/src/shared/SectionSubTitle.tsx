import React, { FC } from "react";

interface SectionSubTitleProps {
  title: string;
  style?: React.CSSProperties;
}

const SectionSubTitle: FC<SectionSubTitleProps> = ({ title, style }) => {
  return (
    <div>
      <h4 style={style} className="sub-title">
        {title}
      </h4>
    </div>
  );
};

export default SectionSubTitle;
