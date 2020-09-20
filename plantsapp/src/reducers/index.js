import {
  IS_FETCHING,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
} from "../actions";

export const initialState = {
  loadedPlant: {},
  plants: [],
  error: "",
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case POST_LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        isFetching: false,
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
