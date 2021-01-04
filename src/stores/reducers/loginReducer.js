const initialState = {
  name: null,
  username: null,
  avatar: null,
  isLogged: false,
  id: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      if (state.isLogged) {
        return state;
      } else {
        return {
          ...state,
          name: action.payload.name,
          username: action.payload.username,
          avatar: action.payload.avatar,
          isLogged: action.payload.isLogged,
          id: action.payload.id
        };
      }
    case "SIGN_OUT":
      if (!state.isLogged) {
        return state;
      } else {
        return {
          ...state,
          name: null,
          username: null,
          avatar: null,
          isLogged: false,
          id: null
        };
      }
    default:
      return state;
  }
};

export default loginReducer;
