import React, { FormEvent, FormEventHandler, useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "./css/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const preventDefault = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          className="login__logo"
        />
        <button className="login__button" onClick={() => {navigate('/signin')}}>
          Sign In
        </button>
      </div>
      <div className="login__body">
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch Anywhere, Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form className="login__form">
                <input type="text" placeholder="Email Address" />
                <button
                  onClick={(e) => preventDefault}
                  className="loginScreen_getStart"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
      </div>
      <div className="login__gradient"></div>
    </div>
  );
}

export default Login;
