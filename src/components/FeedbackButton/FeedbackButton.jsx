import "./styles.css";
import classNames from "classnames";

function FeedbackButton({ type, img, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames("feedback-button", img)}
    ></button>
  );
}

export default FeedbackButton;
