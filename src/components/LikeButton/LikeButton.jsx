import "./styles.css";

function LikeButton({type, onClick}) {
  return (
    <button type={type} onClick={onClick} className="like-button"></button>
  );
}

export default LikeButton;






// function Button({ name, type, onClick }) {

//   return (
//     <button onClick={onClick} className="button-component" type={type}>
//       {name}
//     </button>
//   );
// }

// export default Button;
