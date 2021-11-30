import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Layout = ({ children, isAdmin }) => {
  return (
    <div>
      <div className=" border-b border-gray-200">
        <div className="max-w-7xl w-11/12 mx-auto flex flex-row items-center justify-between py-4">
          <NavLink to="/home">Vaccine Management System</NavLink>
          <div className="flex flex-row">
            {isAdmin ? (
              <Button>
                <NavLink to="/home">Log out</NavLink>
              </Button>
            ) : (
              <Button>
                <NavLink to="/login">Admin</NavLink>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-11/12 mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
