import FeedbackButton from "../FeedbackButton/FeedbackButton";
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
        <FeedbackButton type="button" img="like" onClick={like} />
        <p>{likes}</p>
      </div>

      <div className="button-counter-container">
        <FeedbackButton type="button" img="dislike" onClick={dislike} />
        <p>{dislikes}</p>
      </div>
      <FeedbackButton
        type="reset"
        img="cleaning"
        onClick={clearLikesAndDislikes}
      />
    </div>
  );
}

export default Feedback;
