const userReducer = (state ={}, action) => {
    switch (action.type) {
      case "SET_USER": {
        return action.user;
      }
      case "RESET_USER": {
        return {};
      }
      case "UPDATE_USER": {
        return {
          ...state,
          ...action.updates
        }
      }
      default: {
        return {};
      }
    }
  };
  
  export default userReducer