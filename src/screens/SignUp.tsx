import React, { useRef } from "react";
import "./css/signup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface Props {
  emailRef: undefined;
  passwordRef: undefined;
}

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, emailRef, passwordRef)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign Up</h1>
        <input type="text" placeholder="first name here" />
        <input type="text" placeholder="last name here" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
        <div className="hybrid-login-form-help">
          <div className="ui-binary-input login-remember-me">
          </div>
        </div>
        <h4>
          Already register ?
          <a href="#" onClick={(e) => SignUp}>
            Sign In here
          </a>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
