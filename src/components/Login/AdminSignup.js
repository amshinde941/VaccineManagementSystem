import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import UnderlinedInput from "../InputField/UnderlinedInput";
import { useFormikContext } from "formik";

const AdminSignup = ({ handleChange, handleBlur, handleSubmit }) => {
  const { values, setValues } = useFormikContext();

  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="mx-auto md:w-10/12 pb-6">
        <UnderlinedInput
          label="Username"
          placeholder="User name"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          name="username"
          value={values.username}
        />
        <UnderlinedInput
          label="Centername"
          placeholder="vaccine center name"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          name="centername"
          value={values.centername}
        />
        <UnderlinedInput
          label="Email"
          placeholder="Email address"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
        />{" "}
        <UnderlinedInput
          label="Password"
          placeholder="Enter Password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          value={values.password}
        />
      </div>
      <div className="mb-4 flex flex-row justify-center">
        <Button type="submit">
          SignUp
        </Button>
      </div>
      <div className="flex flex-row justify-center text-sm md:text-base">
        <p className="mr-2">Already have an account?</p>
        <NavLink className="text-blue-500 font-semibold" to="/admin/login">
          Login
        </NavLink>
      </div>
    </form>
  );
};

export default AdminSignup;
