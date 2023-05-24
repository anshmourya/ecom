import React from "react";

function SingleImg({ image, title }) {
  return (
    <>
      <img src={image} alt={title} />
    </>
  );
}

export default SingleImg;
