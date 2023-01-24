import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import { SignInForm, Buttons, OneButton, Heading, P } from "./sign-in.styles";

import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const setCurrentUser = useSelector((state) => state.currentUser.currentUser);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);

      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("User does not exist");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <Container>
      <SignInForm>
        <Heading>SIGN IN</Heading>
        <P>Sign in with your email and password</P>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={handleChange}
            name='email'
            value={email}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={handleChange}
            name='password'
            value={password}
            required
          />
        </Form.Group>
        <Form.Text>
          Don't have an account <Link to='/sign-up'>Sign Up</Link>
        </Form.Text>

        <Buttons>
          <OneButton variant='secondary' onClick={handleSubmit}>
            Sign In
          </OneButton>{" "}
          <OneButton
            type='button'
            variant='secondary'
            onClick={signInWithGoogle}
          >
            Sign in with <i className='fa-brands fa-google'></i>
          </OneButton>
        </Buttons>
      </SignInForm>
    </Container>
  );
};

export default SignIn;
