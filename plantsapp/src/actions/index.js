import { axiosWithAuth } from "../utils/axiosWithAuth";

export const IS_FETCHING = "IS_FETCHING";

export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE";

export const requestLogin = (user) => (dispatch) => {
  dispatch({ type: IS_FETCHING });
  axiosWithAuth()
    .post("/login", user)
    .then((res) => {
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_LOGIN_FAILURE, payload: err });
    });
};
