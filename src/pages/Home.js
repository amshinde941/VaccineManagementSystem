import React, { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import { fetchAdmins } from "../actions/user";

const HomePage = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetchAdmins()
      .then((admins) => setAdmins(admins))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Layout isAdmin={false}>
    <p className="text-center text-xl font-bold tracking-wide text-green-600 mt-2">Today's Available Vaccine Count</p>
      <Home admins={admins} />
    </Layout>
  );
};

export default HomePage;
