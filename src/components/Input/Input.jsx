import "./styles.css";

function Input({ inputData }) {
  const { id, name, type, placeholder, label } = inputData;
  
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input  id={id} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
