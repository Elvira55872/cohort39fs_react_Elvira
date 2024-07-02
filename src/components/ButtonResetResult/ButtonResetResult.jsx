import "./styles.css";

function ButtonResetResult({type, onClick}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="reset-result-button"
    ></button>
  );
}

export default ButtonResetResult;
