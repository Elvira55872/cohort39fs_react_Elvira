import "./styles.css";

function Button({ name, type, onClick }) {

  return (
    <button onClick={onClick} className="button-component" type={type}>
      {name}
    </button>
  );
}

export default Button;
