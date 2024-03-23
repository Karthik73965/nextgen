import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SlLogin } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import Navbar from '../components/Navbar';
import Slider from '../components/utils/Slider';

import { emailPasswordSignIn } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { doesSessionExist } from "supertokens-auth-react/recipe/session";
import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdpartyemailpassword";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const sessionExists = await doesSessionExist();
      // Immediately act on the session existence check
      if (sessionExists) {
        navigate("/dashboard");
      }
    };

    checkSession();
  }, [navigate]);

  async function googleSignInClicked() {
    try {
      const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
        thirdPartyId: "google",

        // This is where Google should redirect the user back after login or error.
        // This URL goes on the Google's dashboard as well.
        frontendRedirectURI: "http://localhost:5173/callback/google",
      });

      /*
      Example value of authUrl: https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&client_id=1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com&state=5a489996a28cafc83ddff&redirect_uri=https%3A%2F%2Fsupertokens.io%2Fdev%2Foauth%2Fredirect-to-app&flowName=GeneralOAuthFlow
      */

      // we redirect the user to google for auth.
      window.location.assign(authUrl);
    } catch (err) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert("Oops! Something went wrong." + err);
      }
    }
  }

  async function signInClicked(email, password) {
    try {
      let response = await emailPasswordSignIn({
        formFields: [{
          id: "email",
          value: email
        }, {
          id: "password",
          value: password
        }]
      })

      if (response.status === "FIELD_ERROR") {
        response.formFields.forEach(formField => {
          if (formField.id === "email") {
            // Email validation failed (for example incorrect email syntax).
            window.alert(formField.error)
          }
        })
      } else if (response.status === "WRONG_CREDENTIALS_ERROR") {
        window.alert("Email password combination is incorrect.")
      } else if (response.status === "SIGN_IN_NOT_ALLOWED") {
        // this can happen due to automatic account linking. Tell the user that their 
        // input credentials is wrong (so that they do through the password reset flow)
      } else {
        // sign in successful. The session tokens are automatically handled by
        // the frontend SDK.
        window.location.href = "/dashboard"
      }
    } catch (err) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert("Oops! Something went wrong.\n" + err);
      }
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await googleSignInClicked();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInClicked(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='h-20'></div> {/* Use standard spacing units */}
      <div className="flex m-8 mt-14 justify-center">
        <div className='flex min-h-[60] align-baseline border w-full max-w-4xl mx-auto border-black rounded-xl'>
          <section className='w-1/2 border-r hidden sm:block border-black'>
            <Slider />
          </section>
          <section className='sm:w-1/2 p-8'>
            <div>
              <h2 className='text-3xl  flex gap-x-4 font-semibold text-center mb-8'>
                <SlLogin /> Login to your account
              </h2>
              <form className='my-[10vh]' onSubmit={handleSubmit}>
                {/* <div onClick={handleGoogleLogin} className='border-2 cursor-pointer p-2 rounded-lg border-gray-900 flex align-middle justify-center'>
                  <FcGoogle size={25} className='mr-7' /> Login with Google
                </div> */}
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  className='border my-3 w-full p-2 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500'
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <input
                  type='password'
                  id='password'
                  placeholder='Enter password'
                  className='border w-full mt-3 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500'
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                <div className='justify-between items-center my-6'>
                  <button type='submit' className="bg-black w-full font-medium rounded-full text-sm p-3 text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Login
                  </button>
                </div>
                <Link to="/signup" className='text-gray-900 hover:text-gray-800'>
                  Don't have an account? Sign up
                </Link>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
