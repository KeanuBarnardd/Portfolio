import React from "react";

// Import Components
import './ImageSlider.scss';

export default function ImageSlider(props) {
  return (
    <div className="gallery">
      <img src={props.img1} alt="" />
    </div>
  );
}
