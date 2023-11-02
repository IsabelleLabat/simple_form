import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <div className="container">
        <header>
          <h1>Create account</h1>
        </header>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          ConfirmPassword={ConfirmPassword}
          setConfirmPassword={setConfirmPassword}
          name={name}
          setName={setName}
        />

        <StepTwo email={email} password={password} name={name} />
      </div>
    </>
  );
}

export default App;
