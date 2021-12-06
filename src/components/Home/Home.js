import React from "react";

const Home = ({ admins }) => {
  return (
    <div>
      <div
        className="mt-2 overflow-y-scroll"
        style={{ maxHeight: "70vh" }}
      >
        {admins.map((val) => {
          return (
            <div className="my-4 mr-2 p-4 bg-gray-200 rounded-lg">
              <p className="text-center text-lg font-bold text-gray-600">
                {val?.centername}
              </p>
              <div className="flex flex-col md:flex-wrap gap-x-6 items-center justify-center mt-2">
                {val?.pfiz ? (
                  <p className="text-black font-bold">
                    <span className="text-blue-400 font-bold">PFIZER</span> :{" "}
                    <span className="text-blue-600 font-bold">
                      {val.pfizcount}
                    </span>
                  </p>
                ) : null}
                {val?.covi ? (
                  <p className="text-black font-bold">
                    <span className="text-blue-400 font-bold">COVISHIELD</span>{" "}
                    :{" "}
                    <span className="text-blue-600 font-bold">
                      {val.covicount}
                    </span>
                  </p>
                ) : null}
                {val?.cova ? (
                  <p className="text-black font-bold">
                    <span className="text-blue-400 font-bold">COVAXIN</span> :{" "}
                    <span className="text-blue-600 font-bold">
                      {val.covacount}
                    </span>
                  </p>
                ) : null}
                {val?.jans ? (
                  <p className="text-black font-bold">
                    <span className="text-blue-400 font-bold">JANSSEN</span> :{" "}
                    <span className="text-blue-600 font-bold">
                      {val.janscount}
                    </span>
                  </p>
                ) : null}
                {val?.mode ? (
                  <p className="text-black font-bold">
                    <span className="text-blue-400 font-bold">MODERNA</span> :{" "}
                    <span className="text-blue-600 font-bold">
                      {val.modecount}
                    </span>
                  </p>
                ) : null}
                {val?.sino ? (
                  <p className="text-black font-bold">
                    <span className="text-blue-400 font-bold">SINOPHARM</span> :{" "}
                    <span className="text-blue-600 font-bold">
                      {val.sinocount}
                    </span>
                  </p>
                ) : null}
                {val?.sico ? (
                  <p className="text-black font-bold">
                    <span className="text-blue-400 font-bold">
                      SINOVAC-CORONAVAC
                    </span>{" "}
                    :{" "}
                    <span className="text-blue-600 font-bold">
                      {val.sicocount}
                    </span>
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Home;
