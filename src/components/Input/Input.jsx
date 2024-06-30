import "./styles.css";

function Input({ inputData }) {
  const { name, type, placeholder, label } = inputData;
  return (
    <form className="input-container">
      <label htmlFor={name}>{label}</label>
      <input  name={name} type={type} placeholder={placeholder} />
    </form>
  );
}

export default Input;
