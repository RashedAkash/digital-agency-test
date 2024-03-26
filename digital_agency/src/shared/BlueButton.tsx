import React from "react";

interface BlueButtonProps {
  text: string;
}

const BlueButton: React.FC<BlueButtonProps> = ({ text }) => {
  return (
    <div className="blue-btn">
      <button className="blue-button">{text}</button>
    </div>
  );
};

export default BlueButton;
