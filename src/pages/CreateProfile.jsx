import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/utils/Slider'
import axios from 'axios';
import { getUserId } from 'supertokens-auth-react/recipe/session';

export default function CreateProfile() {

  const [gender, setGender] = useState("");
  const [standard, setStandard] = useState("");
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [institute, setInstitute] = useState("");
  const [selectedCountry, setSelectedCountry] = useState('');
  const [dob, setDob] = useState('');

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "India",
    "Brazil",
  ];

  const [errors, setErrors] = useState({});


  const validateF2Fields = () => {
    let newErrors = { ...errors }; // Start with current errors

    // Validation for Gender
    if (!gender) {
      newErrors.gender = "Gender selection is required";
    } else {
      delete newErrors.gender;
    }

    // Validation for Standard
    if (!standard) {
      newErrors.standard = "Academic standard is required";
    } else {
      delete newErrors.standard;
    }

    if (!selectedCountry) {
      newErrors.selectedCountry = "Country is required";
    } else {
      delete newErrors.selectedCountry;
    }

    if (!dob) {
      newErrors.dob = "DOB is Required";
    } else {
      delete newErrors.dob;
    }
    // Validation for Institute
    if (!institute) {
      newErrors.institute = "Institute name is required";
    } else {
      delete newErrors.institute;
    }

    // Validation for Accepting Terms and Conditions
    if (!acceptTnC) {
      newErrors.acceptTnC = "You must agree to the terms and conditions";
    } else {
      delete newErrors.acceptTnC;
    }

    setErrors(newErrors); // Update the state with the new or updated errors

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateF2Fields()) {
      const uid = await getUserId();
      const data_obj = {
        uid: uid,
        username: "",
        email: "",
        firstname: "",
        lastname: "",
        gender: gender,
        standard: standard,
        institute: institute,
        country: selectedCountry,
        dob: dob
      };

      const resp = await axios.post("http://localhost:5000/users/complete_prof", data_obj);
      window.location.assign("/dashboard");
    }
  }

  return (
    <>

      <Navbar />
      <div className='h-20'></div> {/* Use standard spacing units */}
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
      <div className="flex m-8 justify-center">
        <div className='flex min-h-[60vh] border-[2.5px] shadow-2xl w-full max-w-4xl mx-auto border-black rounded-xl'>
          <section className='w-1/2 border-r-[2.5px] hidden sm:block border-black'>
            <Slider />
          </section>
          <section className='sm:w-1/2 p-8'>

            <div>
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-semibold text-center mb-8">
                  <span role="img" aria-label="party popper">
                    🎉
                  </span>
                  <span className="border-b-2 border-gray-  00">
                    You are One step to go{" "}
                  </span>
                </h2>
                <label className="font-bold "> What is your Gender :</label>
                <div className="flex justify-around my-2  ">
                  <div
                    className={`${gender === "male" ? "bg-gray-300" : ""
                      }  rounded-full border-2  p-3`}
                    onClick={() => {
                      setGender("male");
                    }}
                  >
                    Male
                  </div>
                  <div
                    className={`${gender === "female" ? "bg-gray-300" : ""
                      } rounded-full  border-2  p-3`}
                    onClick={() => {
                      setGender("female");
                    }}
                  >
                    Female
                  </div>
                  <div
                    className={`${gender === "denied" ? "bg-gray-300" : ""
                      } rounded-full border-2 p-3`}
                    onClick={() => {
                      setGender("denied");
                    }}
                  >
                    Not Say
                  </div>
                </div>
                <label htmlFor="date-picker" className="font-bold">
                  Date of Birth
                </label>
                <div className="flex flex-col items-center justify-center">
                  <input
                    type="date"
                    id="date-picker"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="form-input px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    max={new Date().toISOString().split('T')[0]} // Limits the date picker to today's date or earlier  
                    style={{ boxShadow: "0 0 0 2px #cbd5e1" }} // Adds a subtle shadow around the input for better visibility

                  />
                </div>
                <label className="font-bold ">
                  {" "}
                  What is your current academic standard :
                </label>
                <div className="flex justify-center items-center">
                  <select
                    id="class-select"
                    value={standard}
                    onChange={(e) => { setStandard(e.target.value) }}
                    className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select a class</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}th
                      </option>
                    ))}
                  </select>
                </div>
                <label className="font-bold ">
                  {" "}
                  What is your country:
                </label>
                <div className="flex justify-center items-center">
                  <select
                    id="country-select"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select a country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="font-bold mt-2 ">
                  {" "}
                  Where are you currently studying at :
                </label>
                <input
                  type="text"
                  id="insName"
                  placeholder="Enter Institute name"
                  className="border w-full p-2 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500"
                  value={institute}
                  onChange={(e) => setInstitute(e.target.value)}
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="termsAndConditions"
                      className="mx-2"
                      name="checkbox"
                      value={acceptTnC}
                      onChange={(e) => setAcceptTnC(e.target.checked)}
                    />
                    <label htmlFor="termsAndConditions">
                      Agree to our terms and conditions
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-around">
                  <button
                    className="bg-black font-medium rounded-full text-sm px-5 py-2 text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div >
      </div >
    </>
  )
}
