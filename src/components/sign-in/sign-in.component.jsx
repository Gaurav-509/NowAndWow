import {
  signInWithGooglePopup,
  createUSerDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUSerDocumentFromAuth(user);
  };
  return (
    <div>
      <h1> Sign In Page</h1>
      <button onClick={logGoogleUser}> Google popup</button>
    </div>
  );
};

export default SignIn;
