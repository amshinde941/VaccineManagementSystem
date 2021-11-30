import React from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import data from "../models/home";

const HomePage = () => {
  return (
    <Layout isAdmin={false}>
      <Home data={data} />
    </Layout>
  );
};

export default HomePage;
