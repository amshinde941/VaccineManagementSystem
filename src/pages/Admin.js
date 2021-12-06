import React from "react";
import Admin from "../components/Admin/Admin";
import Layout from "../components/Layout/Layout";

const AdminPage = () => {
  return (
    <Layout isAdmin={true}>
      <Admin  />
    </Layout>
  );
};

export default AdminPage;
