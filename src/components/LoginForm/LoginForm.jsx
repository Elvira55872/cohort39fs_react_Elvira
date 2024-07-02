import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  const inputDataEmail = {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  };

  const inputDataPassword = {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
  };

  const loginUser = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("user logged in succesfully");
  };

  return (
    <form className="login-form-wrapper">
      <h1>Login form</h1>
      <div className="login-fields-wrapper">
        <Input inputData={inputDataEmail} />
        <Input inputData={inputDataPassword} />
      </div>
      <Button onClick={loginUser} name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;
