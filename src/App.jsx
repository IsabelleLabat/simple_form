import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="container">
        {submitted === false ? (
          <Form
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            ConfirmPassword={ConfirmPassword}
            setConfirmPassword={setConfirmPassword}
            name={name}
            setName={setName}
            setSubmitted={setSubmitted}
          />
        ) : (
          <StepTwo
            email={email}
            password={password}
            name={name}
            setSubmitted={setSubmitted}
          />
        )}
      </div>
    </>
  );
}

export default App;
