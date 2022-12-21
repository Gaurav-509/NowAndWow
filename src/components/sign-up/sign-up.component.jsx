import "./sign-up.styles.scss";
import { useState } from "react";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container>
      <Form className='form'>
        <h1>SIGN UP</h1>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control type='name' placeholder='Enter Full Name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='confirm-password'
            placeholder='Confirm Password'
          />
        </Form.Group>
        <Form.Text>
          I already have an account <Link to='/sign-in'>Sign In</Link>
        </Form.Text>
        <div className='buttons'>
          <Button variant='secondary' type='submit' className='one-button'>
            Sign Up
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
