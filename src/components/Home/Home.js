import React from "react";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";

const Home = ({ data }) => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="flex flex-row mt-4 w-11/12 md:w-6/12 border border-gray-100 rounded-md">
          <input
            type="text"
            placeholder="Enter Vaccination Center"
            className="flex-1 px-3 py-3 rounded-l-md sm:w-96 rounded-r-md sm:rounded-r-none"
          />
          <button className="px-3 py-3 bg-blue-400 text-white rounded-r-md rounded-l-md sm:rounded-l-none">
            Search
          </button>
        </div>
      </div>
      <div
        className="mt-6 overflow-y-scroll hide-scroll"
        style={{ maxHeight: "75vh" }}
      >
        {data.map((val) => {
          return (
            <div className="m-4 p-4 bg-gray-200 rounded-lg">
              <p className="text-center text-lg font-semibold text-gray-600">
                {val.name}
              </p>
              <div className="flex flex-col md:flex-row gap-x-6 items-center justify-center mt-2">
                {val.vaccines.map((vaccine) => {
                  return (
                    <p className="text-black font-bold">
                      <span className="text-blue-400 font-bold">{vaccine.name}</span> : <span className="text-blue-600 font-bold">{vaccine.count}</span>
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
