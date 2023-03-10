import React from "react";
import "./ImageLinkForm.scss";

const ImageLinkForm = ({ handleChange, onSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your pictures. Try it!"}
      </p>
      <div className="center">
        <div className=" form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={handleChange("input")}
          />
          <button
            className=" w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
