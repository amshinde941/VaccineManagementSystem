import React from "react";
import AdminLogin from "../components/Login/AdminLogin";
import Layout from '../components/Layout/Layout';

const AdminLoginPage = () => {
  return (
    <Layout isAdmin={false}>
      <AdminLogin />
    </Layout>
  );
};

export default AdminLoginPage;
