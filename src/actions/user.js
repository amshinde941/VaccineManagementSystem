import axios from 'axios';

export const fetchAdmins = async () => {
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URI}/home`,
  };
  try {
    const res = await axios(options);
    const admins = res.data;
    return admins;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const loadUser = async (dispatchUser) => {
  const drive = JSON.parse(localStorage.getItem("drive"));
  if (drive) {
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URI}/admin/me`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${drive.token}`,
      },
    };
    try {
      const res = await axios(options);
      dispatchUser({
        type: "SET_USER",
        user: {
          ...res.data,
          type: drive.type,
        },
      });
      return {
        ...res.data,
        type: drive.type,
      };
    } catch (e) {
      console.log(e);
      if (e?.response?.data) {
        return e.response.data;
      }
      return {
        error: "Something Went Wrong",
      };
    }
  }
};

export const registerAdmin = async (
    values,
    dispatchUser,
  ) => {
    const data = {
      ...values,
    };
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URI}/admin/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };
    try {
      const res = await axios(options);
      localStorage.setItem(
        "drive",
        JSON.stringify({ token: res.data.token, type: "admin" })
      );
      dispatchUser({
        type: "SET_USER",
        user: {
          ...res.data.admin,
          type: "admin",
        },
      });
      console.log("res.data:"+JSON.stringify(res.data));
      return res.data.admin;
    } catch (e) {
      return e.response.data;
    }
  };
  
  export const loginAdmin = async (
    values,
    dispatchUser,
  ) => {
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URI}/admin/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const res = await axios(options);
      localStorage.setItem(
        "drive",
        JSON.stringify({ token: res.data.token, type: "admin" })
      );

      dispatchUser({
        type: "SET_USER",
        user: {
          ...res.data.admin,
          type: "admin",
        },
      });
      console.log("res.data:"+JSON.stringify(res.data));
      return res.data.admin;
    } catch (e) {
      console.log(e);
      if (e?.response) {
        return e?.response?.data;
      }
      return {
        error: "Something Went Wrong",
      };
    }
  };

  export const logout = async (dispatchUser) => {
    const drive = JSON.parse(localStorage.getItem("drive"));
    if (drive) {
      const options = {
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URI}/admin/logout`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${drive.token}`,
        },
      };
      try {
        const res = await axios(options);
        localStorage.removeItem("drive");
        dispatchUser({
          type: "RESET_USER",
        });

        return res.data;
      } catch (e) {
        console.log(e);
        if (e?.response?.data) {
          return e.response.data;
        }
        return {
          error: "Something Went Wrong",
        };
      }
    }
  };

  export const addVaccines = async (
    values,
    dispatchUser,
  ) => {
    const drive = JSON.parse(localStorage.getItem("drive"));
    const options = {
      method: "PATCH",
      url: `${process.env.REACT_APP_BACKEND_URI}/admin/me`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${drive.token}`,
      },
      data: values,
    };
    try {
      const res = await axios(options);

      console.log("res.data.vaccines:"+JSON.stringify(res.data));
      dispatchUser({
        type: "UPDATE_USER",
        user: res.data,
      });
      
      return res.data;
    } catch (e) {
      console.log(e);
      if (e?.response) {
        return e?.response?.data;
      }
      return {
        error: "Something Went Wrong",
      };
    }
  };
  
  