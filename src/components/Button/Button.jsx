import "./styles.css";

function Button({ buttonData }) {
  const { name, type } = buttonData;
  
  return (
    <button className="button-component" type={type}>
      {name}
    </button>
  );
}

export default Button;
