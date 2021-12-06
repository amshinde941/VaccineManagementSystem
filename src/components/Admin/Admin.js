import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import { Formik } from "formik";
import { AdminContext } from "../../context/AdminContext";
import UnderlinedInput from "../InputField/UnderlinedInput";
import { useSnackbar } from "react-simple-snackbar";
import { addVaccines } from "../../actions/user";

const Admin = () => {
  const { user, dispatchUser } = useContext(AdminContext);
  const [openSnackbar] = useSnackbar();

  const handleUpdate = async (values) => {
    try {
      const data = await addVaccines(values, dispatchUser);
      if (data?.error) {
        openSnackbar(data.error, 3000);
        return;
      }
      setaddModal(false);
      setupdateModal(false);
      window.location.reload(false);
    } catch (e) {
      console.log(e);
      openSnackbar("Something Went Wrong!", 3000);
    }
  };
  const [addModal, setaddModal] = useState(false);
  const [updateModal, setupdateModal] = useState(false);

  return (
    <div>
      <div className="mt-4">
        <p className="text-center text-lg text-gray-600 font-bold">
          {user.centername}
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
            {user?.pfiz ? (
              <p className="text-black font-bold">
                <span className="text-blue-400 font-bold">PFIZER</span> :{" "}
                <span className="text-blue-600 font-bold">
                  {user.pfizcount}
                </span>
              </p>
            ) : null}
            {user?.covi ? (
              <p className="text-black font-bold">
                <span className="text-blue-400 font-bold">COVISHIELD</span> :{" "}
                <span className="text-blue-600 font-bold">
                  {user.covicount}
                </span>
              </p>
            ) : null}
            {user?.cova ? (
              <p className="text-black font-bold">
                <span className="text-blue-400 font-bold">COVAXIN</span> :{" "}
                <span className="text-blue-600 font-bold">
                  {user.covacount}
                </span>
              </p>
            ) : null}
            {user?.jans ? (
              <p className="text-black font-bold">
                <span className="text-blue-400 font-bold">JANSSEN</span> :{" "}
                <span className="text-blue-600 font-bold">
                  {user.janscount}
                </span>
              </p>
            ) : null}
            {user?.mode ? (
              <p className="text-black font-bold">
                <span className="text-blue-400 font-bold">MODERNA</span> :{" "}
                <span className="text-blue-600 font-bold">
                  {user.modecount}
                </span>
              </p>
            ) : null}
            {user?.sino ? (
              <p className="text-black font-bold">
                <span className="text-blue-400 font-bold">SINOPHARM</span> :{" "}
                <span className="text-blue-600 font-bold">
                  {user.sinocount}
                </span>
              </p>
            ) : null}
            {user?.sico ? (
              <p className="text-black font-bold">
                <span className="text-blue-400 font-bold">
                  SINOVAC-CORONAVAC
                </span>{" "}
                :{" "}
                <span className="text-blue-600 font-bold">
                  {user.sicocount}
                </span>
              </p>
            ) : null}
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
                  <Formik
                    initialValues={{
                      pfiz: user?.pfiz ? user.pfiz : false,
                      covi: user?.covi ? user.covi : false,
                      cova: user?.cova ? user.cova : false,
                      jans: user?.jans ? user.jans : false,
                      mode: user?.mode ? user.mode : false,
                      sino: user?.sino ? user.sino : false,
                      sico: user?.sico ? user.sico : false,
                    }}
                    onSubmit={handleUpdate}
                  >
                    {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setValues,
                    }) => (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSubmit(values);
                        }}
                      >
                        <div className="py-4">
                          <div className="">
                            <UnderlinedInput
                              name="pfiz"
                              label="PFIZER"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.pfiz}
                              type="checkbox"
                              checked={values.pfiz}
                            />
                          </div>
                          <div className="">
                            <UnderlinedInput
                              name="covi"
                              label="COVISHIELD"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.covi}
                              type="checkbox"
                              checked={values.covi}
                            />
                          </div>
                          <div className="">
                            <UnderlinedInput
                              name="cova"
                              label="COVAXIN"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.cova}
                              type="checkbox"
                              checked={values.cova}
                            />
                          </div>
                          <div className="">
                            <UnderlinedInput
                              name="jans"
                              label="JANSSEN"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.jans}
                              type="checkbox"
                              checked={values.jans}
                            />
                          </div>
                          <div className="">
                            <UnderlinedInput
                              name="mode"
                              label="MODERNA"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.mode}
                              type="checkbox"
                              checked={values.mode}
                            />
                          </div>
                          <div className="">
                            <UnderlinedInput
                              name="sino"
                              label="SINOPHARM"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.sino}
                              type="checkbox"
                              checked={values.sino}
                            />
                          </div>
                          <div className="">
                            <UnderlinedInput
                              name="sico"
                              label="SINOVAC-CORONAVAC"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.sico}
                              type="checkbox"
                              checked={values.sico}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <Button type="submit">Save</Button>
                          <button
                            type="button"
                            className="border text-base text-gray-500 py-1 px-2 rounded-md "
                            onClick={() => setaddModal(false)}
                          >
                            cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
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
                  <Formik
                    initialValues={{
                      pfiz: user?.pfiz ? user.pfiz : false,
                      covi: user?.covi ? user.covi : false,
                      cova: user?.cova ? user.cova : false,
                      jans: user?.jans ? user.jans : false,
                      mode: user?.mode ? user.mode : false,
                      sino: user?.sino ? user.sino : false,
                      sico: user?.sico ? user.sico : false,
                      pfizcount: user?.pfizcount ? user.pfizcount : 0,
                      covicount: user?.covicount ? user.covicount : 0,
                      covacount: user?.covacount ? user.covacount : 0,
                      janscount: user?.janscount ? user.janscount : 0,
                      modecount: user?.modecount ? user.modecount : 0,
                      sinocount: user?.sinocount ? user.sinocount : 0,
                      sicocount: user?.sicocount ? user.sicocount : 0,
                    }}
                    onSubmit={handleUpdate}
                  >
                    {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setValues,
                    }) => (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSubmit(values);
                        }}
                      >
                        {" "}
                        <div className="py-4">
                          {user.pfiz ? (
                            <div className="">
                              <UnderlinedInput
                                label="PFIZER"
                                value={values.pfizcount}
                                name="pfizcount"
                                placeholder="count"
                                type="number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          ) : null}
                          {user.covi ? (
                            <div className="">
                              <UnderlinedInput
                                name="covicount"
                                label="COVISHIELD"
                                placeholder="count"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.covicount}
                                type="number"
                              />
                            </div>
                          ) : null}
                          {user.cova ? (
                            <div className="">
                              <UnderlinedInput
                                name="covacount"
                                label="COVAXIN"
                                placeholder="count"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.covacount}
                                type="number"
                              />
                            </div>
                          ) : null}
                          {user.jans ? (
                            <div className="">
                              <UnderlinedInput
                                name="janscount"
                                label="JANSSEN"
                                placeholder="count"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.janscount}
                                type="number"
                              />
                            </div>
                          ) : null}
                          {user.mode ? (
                            <div className="">
                              <UnderlinedInput
                                name="modecount"
                                label="MODERNA"
                                placeholder="count"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.modecount}
                                type="number"
                              />
                            </div>
                          ) : null}
                          {user.sino ? (
                            <div className="">
                              <UnderlinedInput
                                name="sinocount"
                                label="SINOPHARM"
                                placeholder="count"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sinocount}
                                type="number"
                              />
                            </div>
                          ) : null}
                          {user.sico ? (
                            <div className="">
                              <UnderlinedInput
                                name="sicocount"
                                label="SINOVAC-CORONAVAC"
                                placeholder="count"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sicocount}
                                type="number"
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <Button type="submit">Save</Button>
                          <button
                            type="button"
                            className="border text-base text-gray-500 py-1 px-2 rounded-md "
                            onClick={() => setupdateModal(false)}
                          >
                            cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
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
