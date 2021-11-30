import React from "react";
import Admin from "../components/Admin/Admin";
import Layout from "../components/Layout/Layout";
import data from "../models/admin";

const AdminPage = () => {
  return (
    <Layout isAdmin={true}>
      <Admin data={data} />
    </Layout>
  );
};

export default AdminPage;
