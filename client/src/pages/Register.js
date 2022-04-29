import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";

const initialState = {
  Name: "",
  Email: "",
  Password: "",
  isMember: false,
  
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const {isLoading, showAlert, displayAlert} = useAppContext();


  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember} = values
      // check if not is member or name is missing
    if (!email || !password || (!isMember && !name) ) {
      displayAlert()
      return
    }
    console.log(values)
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="Name"
            values={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="Email"
          values={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="Password"
          values={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
