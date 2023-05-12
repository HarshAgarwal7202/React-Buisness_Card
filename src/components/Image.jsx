import React from "react";
import CandidatePhoto from "../images/photo.jpg";
const Image = () => {
  return (
    <div className="ImagePart">
      <img src={CandidatePhoto} alt="CandidateImage" />
    </div>
  );
};
export default Image;
