import React, { useState } from "react";

function ColorChange() {
  const [bgColor, setBgColor] = useState("");

  function handleColorChange(event) {
    const selectedColor = event.target.value;
    setBgColor(selectedColor);
    document.body.style.backgroundColor = selectedColor; // Change body background color
  }
  return (
    <div className="flex justify-center items-center mt-20 text-2xl">
      <select onClick={handleColorChange}>
        <option value="">select a color</option>
        <option value="red">select red color</option>
        <option value="green">select green color</option>
        <option value="yellow">select yellow color</option>
        <option value="blue">select blue color</option>
      </select>
    </div>
  );
}

export default ColorChange;
