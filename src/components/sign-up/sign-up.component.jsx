import { SignUpForm, NameInput, MainTitle } from "./sign-up.styles";
import { useState, useContext } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user email already exist");
      } else {
        console.log("user creation encountered error", error);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Container>
      <SignUpForm onSubmit={handleSubmit}>
        <MainTitle>SIGN UP</MainTitle>
        <NameInput controlId='formBasicName'>
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Full Name'
            onChange={handleChange}
            name='displayName'
            value={displayName}
            required
          />
        </NameInput>
        <NameInput controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={handleChange}
            name='email'
            value={email}
            required
          />
        </NameInput>
        <NameInput controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={handleChange}
            name='password'
            value={password}
            required
          />
        </NameInput>
        <NameInput controlId='formBasicConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
            required
          />
        </NameInput>
        <Form.Text>
          I already have an account <Link to='/sign-in'>Sign In</Link>
        </Form.Text>
        <div className='buttons'>
          <Button variant='secondary' type='submit' className='one-button'>
            Sign Up
          </Button>
        </div>
      </SignUpForm>
    </Container>
  );
};

export default SignUp;
