// AgeDisplay.jsx
import React from "react";

const AgeDisplay = ({ age }) => {
  if (age.years < 0) return null;

  return (
    <div className="result">
      <p>Sua idade é:</p>
      <div className="age">
        <p> <strong>{age.years}</strong> anos, </p>
        <p> <strong>{age.months}</strong> meses e </p>
        <p> <strong>{age.days}</strong> dias. </p>
      </div>
    </div>
  );
};

export default AgeDisplay;