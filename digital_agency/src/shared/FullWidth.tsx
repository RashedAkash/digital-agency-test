import React, { ReactNode } from "react";

interface FullWidthProps {
  children: ReactNode;
}

const FullWidth: React.FC<FullWidthProps> = ({ children }) => {
  return <div className="full-width">{children}</div>;
};

export default FullWidth;
