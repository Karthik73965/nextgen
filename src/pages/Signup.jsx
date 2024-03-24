import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assests/signup/signup.png";
import Navbar from '../components/Navbar';
import axios from "axios";

import { emailPasswordSignUp } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { doesSessionExist, getUserId } from "supertokens-auth-react/recipe/session";


export default function Signup() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const sessionExists = await doesSessionExist();
      if (sessionExists) {
        navigate("/dashboard");
      }
    };

    checkSession();
  }, [navigate]);

  async function signUpClicked(email, password) {
    try {
      let response = await emailPasswordSignUp({
        formFields: [{
          id: "email",
          value: email
        }, {
          id: "password",
          value: password
        }]
      })

      if (response.status === "FIELD_ERROR") {
        // one of the input formFields failed validaiton
        response.formFields.forEach(formField => {
          if (formField.id === "email") {
            // Email validation failed (for example incorrect email syntax),
            // or the email is not unique.
            window.alert(formField.error)
          } else if (formField.id === "password") {
            // Password validation failed.
            // Maybe it didn't match the password strength
            window.alert(formField.error)
          }
        })
      } else if (response.status === "SIGN_UP_NOT_ALLOWED") {
        // this can happen during automatic account linking. Tell the user to use another
        // login method, or go through the password reset flow.
      } else {
        // sign up successful. The session tokens are automatically handled by
        // the frontend SDK.
        // window.location.href = "/createprofile"
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

  const validateF1Fields = () => {
    let newErrors = { ...errors }; // Start with current errors

    // Validation for First Name
    if (!firstName) {
      newErrors.firstName = "First Name is required";
    } else {
      delete newErrors.firstName;
    }

    // Validation for Last Name
    if (!lastName) {
      newErrors.lastName = "Last Name is required";
    } else {
      delete newErrors.lastName;
    }

    // Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    } else {
      delete newErrors.email;
    }

    // Basic Username Validation
    if (!userName) {
      newErrors.userName = "Username is required";
    } else if (userName.length < 4) {
      newErrors.userName = "Username must be at least 4 characters long";
    } else {
      delete newErrors.userName;
    }

    // Password Length Validation
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else {
      delete newErrors.password;
    }

    // Password Confirmation Validation
    if (cnfPassword !== password) {
      newErrors.cnfPassword = "Passwords do not match";
    } else {
      delete newErrors.cnfPassword;
    }

    setErrors(newErrors); // Update the state with the new or updated errors
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateF1Fields()) {
      try {
        await signUpClicked(email, password);
        const uid = await getUserId();
        const data_obj = {
          uid: uid,
          username: userName,
          email: email,
          firstname: firstName,
          lastname: lastName,
          gender: "",
          standard: "",
          institute: "",
          country: "",
          dob: ""
        };

        const resp = await axios.post("http://localhost:5000/users", data_obj);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-20"></div> {/* Use standard spacing units */}
      <div className="flex mt-20 sm:mt-10 items-center justify-end w-full max-w-4xl sm:mx-auto rounded-xl pe-5 pb-2">
        {/* Display error messages here if any */}
        {Object.keys(errors).length > 0 && (
          <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-xl  animate-fadeIn">
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-center pb-10">
        <div className="flex min-h-[60vh] border-[2.5px] shadow-2xl w-full max-w-4xl mx-auto border-black rounded-xl">
          <section className="sm:w-1/2 border-r-[2.5px] hidden sm:block border-black">
            {/* slider component will go here */}
            <img
              src={signupImg}
              alt=""
              className="object-cover w-full h-full"
            />
          </section>
          <section className="sm:w-1/2 p-8">
            <div>
              <h2 className="text-3xl font-semibold text-center mb-8">
                <span role="img" aria-label="party popper">
                  🎉
                </span>
                <span className="border-b-2 border-gray-  00">
                  Create Your Account Now
                </span>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  className="border w-full p-2 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="border w-full p-2 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setcnfPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    to="/login"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Already have an account? Login
                  </Link>
                  <button
                    type="submit"
                    className="bg-black font-medium rounded-full text-sm px-5 py-2 text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
