export const sign_in = dataLogin => {
  return {
    type: "SIGN_IN",
    payload: dataLogin
  };
};

export const sign_out = () => {
  return {
    type: "SIGN_OUT"
  };
};
