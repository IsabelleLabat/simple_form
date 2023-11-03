const StepTwo = (props) => {
  return (
    <>
      <header>
        <h1>Results</h1>
      </header>
      <div className="stepTwo">
        <p>Name : {props.name}</p>
        <p>Email : {props.email}</p>
        <p>Password : {props.password}</p>
      </div>
      <button
        className="backtoform"
        onClick={() => {
          setSubmitted(false);
        }}
      >
        Edit your informations
      </button>
    </>
  );
};

export default StepTwo;
