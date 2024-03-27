import React, { useRef, useState } from "react";
import { Header } from "./Header";
import {
  checkSignInValidateData,
  checkSignUpValidateData,
} from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };
  const navigate = useNavigate()
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const renderSignInRedirection = () => {
    return (
      <p className="my-3 text-white">
        <span className="text-[#b3b4b4]">New to Netflix? </span>
        <span
          className="font-semibold hover:underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          Sign up now.
        </span>
      </p>
    );
  };

  const renderSignUpRedirection = () => {
    return (
      <p className="my-3 text-white">
        <span className="text-[#b3b4b4]">Already registered? </span>
        <span
          className="font-semibold hover:underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          Sign In now.
        </span>
      </p>
    );
  };

  const onHandelSingIn = (event) => {
    event.preventDefault();
    const errorMessage = checkSignInValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMessage); // Set error message based on validation result
    if (errorMessage) return;
    signInWithEmailAndPassword(auth, 
      email.current.value,
      password.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        navigate('/browse')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage)
      });
  };

  const onHandelSingUp = (event) => {
    event.preventDefault();
    const errorMessage = checkSignUpValidateData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(errorMessage); // Set error message based on validation result
    if (errorMessage) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });
  };

  const renderForm = () => {
    return (
      <form className="absolute  flex flex-col justify-center  bg-[#060403] opacity-85  rounded-md mx-auto  right-0 left-0 w-[85%]   mb-10 pb-10  m-5  md:w-[450px] mt-[90px] px-12  pt-10 pb-36">
        <h1 className="text-2xl m-2  font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            className="p-2 py-3 m-2 my-3 border-2 border-[#605f5f] text-white bg-[#141414] outline-red-500  rounded-md"
            type="text"
            placeholder="Full Name"
            ref={name}
          />
        )}

        <input
          className="p-2 py-3 m-2 my-3  border-2 border-[#605f5f] text-white bg-[#141414] outline-red-500  rounded-md "
          type="text"
          placeholder="Email or phone number"
          ref={email}
        />
        <input
          className="p-2 py-3 m-2 my-3 border-2 border-[#605f5f] text-white bg-[#141414] outline-red-500  rounded-md"
          type="text"
          placeholder="Password"
          ref={password}
        />

        {errorMessage && (
          <p className="text-[#eb3942] font-bold px-2 mx-2">{errorMessage}</p>
        )}

        <button
          className="bg-[#c11119]  p-2  m-2  text-white rounded-sm"
          onClick={isSignInForm ? onHandelSingIn : onHandelSingUp}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? renderSignInRedirection() : renderSignUpRedirection()}

        <p className="my-3 text-[#b3b4b4] text-[12px]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    );
  };

  return (
    <div className="bg-[#000000] min-h-screen block bg-cover md:bg-none" >
      <Header />
      <div className="absolute bg-cover ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-home"
          className="hidden md:block min-h-screen bg-cover"
        />
      </div>
      {renderForm()}
    </div>
  );
};
