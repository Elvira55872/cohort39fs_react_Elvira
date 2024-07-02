import ButtonResetResult from "../ButtonResetResult/ButtonResetResult";
import DislikeButton from "../DislikeButton/DislikeButton";
import LikeButton from "../LikeButton/LikeButton";
import "./styles.css";
import { useState } from "react";

function Feedback() {
  const [likes, onLike] = useState(0);
  const [dislikes, onDislike] = useState(0);

  const like = () => {
    onLike((prevValue) => {
      return prevValue + 1;
    });
  };

  const dislike = () => {
    onDislike((prevValue) => {
      return prevValue + 1;
    });
  };

  const clearLikesAndDislikes = () => {
    onLike(0);
    onDislike(0);
  };

  // console.log(typeof like);
  // console.log(typeof dislike);

  return (
    <div className="feedback-container">
      <div className="button-counter-container">
        <LikeButton type="button" onClick={like} />
        <p>{likes}</p>
      </div>

      <div  className="button-counter-container">
        <DislikeButton type="button" onClick={dislike} />
        <p>{dislikes}</p>
      </div>

      <ButtonResetResult type="reset" onClick={clearLikesAndDislikes} />
    </div>
  );
}

export default Feedback;
