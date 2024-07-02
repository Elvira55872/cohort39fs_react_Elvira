import FeedbackButton from "../FeedbackButton/FeedbackButton";
import "./styles.css";
import { useState } from "react";

function Feedback() {
  const [likes, setLike] = useState(0);
  const [dislikes, setDislike] = useState(0);

  const addLike = () => {
    setLike((prevValue) => {
      return prevValue + 1;
    });
  };

  const addDislike = () => {
    setDislike((prevValue) => {
      return prevValue + 1;
    });
  };

  const clearLikesAndDislikes = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="feedback-container">
      <div className="button-counter-container">
        <FeedbackButton type="button" img="like" onClick={addLike} />
        <p>{likes}</p>
      </div>

      <div className="button-counter-container">
        <FeedbackButton type="button" img="dislike" onClick={addDislike} />
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
