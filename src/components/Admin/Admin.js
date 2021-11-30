import React, { useState } from "react";
import Button from "../Button/Button";
import UnderlinedInput from "../InputField/UnderlinedInput";
const total = [
  "Pfizer",
  "COVISHIELD",
  "Janssen",
  "Moderna",
  "Sinopharm",
  "Sinovac-CoronaVac",
  "COVAXIN",
];
const Admin = ({ data }) => {
  const [addModal, setaddModal] = useState(false);
  const [updateModal, setupdateModal] = useState(false);

  return (
    <div>
      <div className="mt-4">
        <p className="text-center text-lg text-gray-600 font-bold">
          {data.name}
        </p>
        <div className="py-4 flex flex-row gap-x-10 justify-center">
          <Button onClick={() => setaddModal(true)}>Add/Remove</Button>
          <Button onClick={() => setupdateModal(true)}>Update</Button>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center mt-3 p-3 bg-gray-200 w-6/12 mx-auto">
            <p className="text-base text-gray-600 font-bold mb-4">
              Today's Vaccine Count
            </p>
            {data.vaccines.map((vaccine) => {
              return (
                <div>
                  <p className="text-black font-bold py-1.5">
                    <span className="text-blue-400 font-bold">
                      {vaccine.name}
                    </span>{" "}
                    :{" "}
                    <span className="text-blue-600 font-bold">
                      {vaccine.count}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {addModal ? (
          <>
            <div className=" items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-96 my-6 mx-auto max-w-xl ">
                {/*content*/}
                <div className="border rounded-lg shadow-lg relative flex flex-col mx-auto items-center w-10/12 lg:w-11/12 bg-white outline-none focus:outline-none p-6">
                  {/*header*/}
                  <p className="text-lg text-gray-700 font-semibold">
                    Add or Remove Vaccine
                  </p>
                  <div className="py-4">
                    {total.map((val) => {
                      return (
                        <div className="">
                          <UnderlinedInput type="checkbox" label={val} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <Button onClick={() => setaddModal(false)}>Save</Button>
                    <button
                      className="border text-base text-gray-500 py-1 px-2 rounded-md "
                      onClick={() => setaddModal(false)}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {updateModal ? (
          <>
            <div className=" items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-96 my-6 mx-auto max-w-xl ">
                {/*content*/}
                <div className="border rounded-lg shadow-lg relative flex flex-col mx-auto items-center w-10/12 lg:w-11/12 bg-white outline-none focus:outline-none p-6">
                  {/*header*/}
                  <p className="text-lg text-gray-700 font-semibold">
                    Add Vaccine
                  </p>
                  <div className="py-4">
                    {data.vaccines.map((val) => {
                      return (
                        <div className="mb-2">
                          <UnderlinedInput type="number" label={val.name} value={val.count} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <Button onClick={() => setupdateModal(false)}>Save</Button>
                    <button
                      className="border text-base text-gray-500 py-1 px-2 rounded-md "
                      onClick={() => setupdateModal(false)}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
