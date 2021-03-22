import React from "react";

function Card({ card }) {
  return (
    <div className="col-3 my-1">
      {/* 2 */}
      <img
        className="mx-auto"
        src={card.front}
        alt="card"
        //   used percentages instead of pixels to be responsive with the screen size
        height="100%"
        width="100%"
        key="front"
      />
    </div>
  );
}

export default Card;
