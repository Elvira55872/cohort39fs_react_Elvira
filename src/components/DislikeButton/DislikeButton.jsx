import "./styles.css";

function DislikeButton({type, onClick}) {
  return (
    <button type={type} onClick={onClick} className="dislike-button"></button>
  );
}

export default DislikeButton;
