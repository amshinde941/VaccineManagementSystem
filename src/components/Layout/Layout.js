import React, { useContext } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { logout } from "../../actions/user";

const Layout = ({ children, isAdmin }) => {
  const { dispatchUser } = useContext(AdminContext);

  const handleClick = async () => {
    try {
      const data = await logout(dispatchUser);
      if (data?.error) {
        console.log(data.error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className=" border-b border-gray-200 tracking-wide">
        <div className="max-w-7xl w-11/12 mx-auto flex flex-row items-center justify-between py-4">
          <NavLink
            to="/home"
            className="text-base md:text-xl font-bold text-blue-700"
          >
            Vaccine Management System
          </NavLink>
          <div className="flex flex-row">
            {isAdmin ? (
              <Button onClick={handleClick}>
                <NavLink to="/home">Log out</NavLink>
              </Button>
            ) : (
              <Button>
                <NavLink to="/admin/login">Admin</NavLink>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-11/12 mx-auto">{children}</div>
      {!isAdmin ? (
        <div className="bg-gray-300 tracking-wide mt-2 px-6 py-2 flex flex-col md:flex-row justify-center items-center">
          <p className="text-xl font-bold mr-4">Made By -&#62; </p>
          <div className="flex flex-col text-lg font-semibold text-gray-600">
            <p>31266 Pranav Rathi</p>
            <p>31272 Amit Shinde</p>
            <p>31273 Vedant Shinde</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Layout;
