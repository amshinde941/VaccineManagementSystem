import React from "react";
import AdminSignup from "../components/Login/AdminSignup";
import Layout from '../components/Layout/Layout';

const AdminSignupPage = () => {
  return (
    <Layout isAdmin={false}>
      <AdminSignup />
    </Layout>
  );
};

export default AdminSignupPage;
