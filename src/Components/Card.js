import React, { useState } from "react";
import cardBack from "../images/CardBack.jpg"; /* 3 */
import ReactCardFlip from "react-card-flip"; /* 1 */

function Card({ card, checkFlipped }) {
  const [flipped, changeFlip] = useState(false); /* 1 */

  /* 3 */
  const handleFlip = () => {
    changeFlip(!flipped);
  };

  return (
    <div className="col-3 my-1">
      {/* 2 */}
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <img
          className="mx-auto"
          src={cardBack}
          alt="back"
          height="100%"
          width="100%"
          key="front"
          onClick={() => handleFlip()}
        />
        <img
          className="mx-auto"
          src={card.front}
          alt="front"
          height="100%"
          width="100%"
          key="back"
          onClick={() => handleFlip()}
        />
      </ReactCardFlip>
    </div>
  );
}

export default Card;
