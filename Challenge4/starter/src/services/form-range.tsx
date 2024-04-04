import React, { useEffect, useState } from "react";

interface FormRangeProps {
  onRangeChange: (value: number) => void;
}

export const FormRange: React.FC<FormRangeProps> = ({ onRangeChange }) => {
  const [slideRange, setSlideRange] = useState(0);

  useEffect(() => {
    const inputRange = document.getElementById("stars") as HTMLInputElement;
    if (inputRange) {
      inputRange.value = slideRange.toString();
    }
  }, [slideRange]);

  const handleInputChange = (e: any) => {
    const newValue = parseInt(e.target.value);
    setSlideRange(newValue);
    onRangeChange(newValue);
  };

  return (
    <div className="form-group mb-3">
      <label htmlFor="formControlRange">Stars</label>
      <input
        type="range"
        className="form-control-range w-100"
        id="stars"
        min="0"
        max="5"
        step="1"
        value={slideRange}
        onChange={handleInputChange}
      />
      <div className="tick-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="tick">
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};
