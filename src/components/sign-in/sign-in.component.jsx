import {
  signInWithGooglePopup,
  createUSerDocumentFromAuth,
} from "../../utils/firebase.utils";

import "./sign-in.styles.scss";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUSerDocumentFromAuth(user);
  };

  return (
    <Container>
      <Form className='form'>
        <h1>SIGN IN</h1>
        <p>Sign in with your email and password</p>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Text className='form-text'>
          I don't have an account <Link to='/sign-up'>Sign Up</Link>
        </Form.Text>
        <div className='buttons'>
          <Button variant='secondary' type='submit' className='one-button'>
            Sign In
          </Button>{" "}
          <Button
            variant='secondary'
            onClick={logGoogleUser}
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
