import React, { useContext, useEffect, useState } from "react";
import AppRouter from "./Router/AppRouter";
import { loadUser } from "./actions/user";
import { BrowserRouter } from "react-router-dom";
import { AdminContext } from "./context/AdminContext";

const App = () => {
  const { dispatchUser } = useContext(AdminContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const userData = await loadUser(dispatchUser)
        if(userData.error) {
          console.log(userData.error)
        }
      } catch(e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchDetails()
  }, [dispatchUser]);
  return !loading ? (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  ) : (
    <p>Loading</p>
  );
};

export default App;
