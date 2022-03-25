import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./css/signin.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignIn = () => {
  const navigate = useNavigate();
  const preventDefault = (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault();
  // const [signUp, SetSignUp] = useState(false);
  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  return (
    <div className="signUpScreen">
      <div className="login__header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          className="login__logo"
        />
      </div>
      <div className="form_container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button onClick={() => navigate("/whoswatching")}>Sign In</button>
        </form>
        <div className="form-help">
          <div className="ui-binary-input login-remember-me">
            <FormControlLabel
              control={<Checkbox value="remember" />}
              label={'Remember me'}
            />
          </div>
          Need Help ?
        </div>
        <div className="fb_icon">
          <FacebookIcon color="primary" />
          Login with Facebook
        </div>
        <div className="form_new">
          <h4>
            New to Netflix ?
          </h4>
            <Typography>
              <Link className="form_new" onClick={preventDefault} to={""}>
              Sign Up Now.
              </Link>
            </Typography>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
