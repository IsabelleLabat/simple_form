const Form = ({
  email,
  setEmail,
  password,
  setPassword,
  ConfirmPassword,
  setConfirmPassword,
  name,
  setName,
  setSubmitted,
}) => {
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };
  const handleSubmit = (event) => {
    console.log(event);
    // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    event.preventDefault();
    if (password !== ConfirmPassword) {
      alert(" Vos deux mots de passe doivent être identiques");
    } else {
      setSubmitted(true);
    }
  };
  return (
    <>
      <header>
        <h1>Create account</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Jean Dupont"
          name="username"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="name@mail.com"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="enter password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="confirm password"
          name="ConfirmPassword"
          value={ConfirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <input className="submitButton" type="submit" value="Register" />
      </form>
    </>
  );
};

export default Form;
