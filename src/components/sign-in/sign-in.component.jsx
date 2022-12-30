import React, { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import "./sign-in.styles.scss";
import { UserContext } from "../context/user.context";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

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
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
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
      <Form className='form' onSubmit={handleSubmit}>
        <h1>SIGN IN</h1>
        <p>Sign in with your email and password</p>
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

        <div className='buttons'>
          <Button variant='secondary' type='submit' className='one-button'>
            Sign In
          </Button>{" "}
          <Button
            type='button'
            variant='secondary'
            onClick={signInWithGoogle}
            className='one-button'
          >
            Sign in with <i className='fa-brands fa-google'></i>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;
