import React, { useReducer } from "react";
import SnackbarProvider from "react-simple-snackbar";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AdminContext } from "./context/AdminContext";
import userReducer from "./reducers/userReducer";

const Jsx = () => {
  const [user, dispatchUser] = useReducer(userReducer, {});

  return (
    <AdminContext.Provider
      value={{
        user,
        dispatchUser,
      }}
    >
      <SnackbarProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SnackbarProvider>
    </AdminContext.Provider>
  );
};

ReactDOM.render(<Jsx />, document.getElementById("root"));
