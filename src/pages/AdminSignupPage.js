import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSnackbar } from "react-simple-snackbar";
import AdminSignup from "../components/Login/AdminSignup";
import Layout from "../components/Layout/Layout";
import { registerAdmin } from "../actions/user";
import { AdminContext } from "../context/AdminContext";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  centername: Yup.string().required().label("Centername"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .required()
    .test("len", "Minimum Length 6 Characters", (val) => val?.length >= 6)
    .label("Password"),
});

const AdminSignupPage = () => {
  const { dispatchUser } = useContext(AdminContext);
  const [openSnackbar] = useSnackbar();
  const handleRegister = async (values) => {
    try {
      const data = await registerAdmin(values, dispatchUser);
      console.log("handlereg:"+JSON.stringify(data));
      if (data.error) {
        openSnackbar(data.error, 3000);
      }
    } catch (e) {
      console.log(e);
      openSnackbar("Something Went Wrong", 3000);
    }
  };
  return (
    <Layout isAdmin={false}>
      <div className="mx-auto max-w-7xl w-11/12 mb-8">
        <div className="mt-20 bg-gray-100 p-6 md:w-6/12 mx-auto">
          <p className="text-xl font-bold text-gray-600 text-center">Sign Up</p>
          <Formik
            initialValues={{
              username: "",
              centername: "",
              email: "",
              password: "",
            }}
            onSubmit={handleRegister}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <AdminSignup
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
              />
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default AdminSignupPage;
