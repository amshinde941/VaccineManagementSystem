import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import UnderlinedInput from "../InputField/UnderlinedInput";

const AdminSignup = () => {
  return (
    <div className="mx-auto max-w-7xl w-11/12">
      <div className="mt-20 bg-gray-100 p-6 md:w-6/12 mx-auto">
        <p className="text-xl font-bold text-gray-600 text-center">Sign Up</p>
        <div className="mx-auto md:w-10/12 pb-6">
          <UnderlinedInput
            label="Your Name"
            placeholder="your name"
            type="text"
          />
          <UnderlinedInput
            label="Vaccination center Name"
            placeholder="center name"
            type="text"
          />
          <UnderlinedInput label="Email" placeholder="email" type="text" />
          <UnderlinedInput
            label="Password"
            placeholder="******"
            type="password"
          />
        </div>
        <div className="mb-4 flex flex-row justify-center">
          <Button>SignUp</Button>
        </div>
        <div className="flex flex-row justify-center text-sm md:text-base">
          <p className="mr-2">Already have an account?</p>
          <NavLink className="text-blue-500 font-semibold" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
