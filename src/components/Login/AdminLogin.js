import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSnackbar } from "react-simple-snackbar";
import { NavLink } from "react-router-dom";
import UnderlinedInput from "../InputField/UnderlinedInput";
import Button from "../Button/Button";
import { loginAdmin } from "../../actions/user";
import { AdminContext } from "../../context/AdminContext";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .required()
    .test("len", "Minimum Length 6 Characters", (val) => val?.length >= 6)
    .label("Password"),
});

const AdminLogin = () => {
  const { dispatchUser } = useContext(AdminContext);
  const [openSnackbar] = useSnackbar();

  const handleLogin = async (values) => {
    try {
      const data = await loginAdmin(values, dispatchUser);
      if (data.error) {
        openSnackbar(data.error, 3000);
      }
    } catch (e) {
      openSnackbar("Something Went Wrng", 3000);
    }
  };

  return (
    <div className="mx-auto max-w-7xl w-11/12 mb-32">
      <div className="mt-28 bg-gray-100 p-6 md:w-6/12 mx-auto">
        <p className="text-xl font-bold text-gray-600 text-center">Login</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleLogin}
          validationSchema={loginSchema}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <div>
              <form
                className=" "
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(values);
                }}
              >
                <div className="mx-auto md:w-10/12 pb-6">
                  <UnderlinedInput
                    name="email"
                    value={values.email}
                    label="Email*"
                    placeholder="Enter Email address"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <UnderlinedInput
                    value={values.password}
                    name="password"
                    label="Password*"
                    placeholder="Enter Password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="mb-4 flex flex-row justify-center">
                  <Button type="submit">Login</Button>
                </div>
                <div className="flex flex-row justify-center text-sm md:text-base">
                  <p className="mr-2">Don't have account?</p>
                  <NavLink
                    className="text-blue-500 font-semibold"
                    to="/admin/signup"
                  >
                    Create an account
                  </NavLink>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminLogin;
