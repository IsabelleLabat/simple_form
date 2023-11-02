const StepTwo = (props) => {
  return (
    <div className="stepTwo">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Password: {props.password}</p>
    </div>
  );
};

export default StepTwo;
