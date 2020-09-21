import {
  IS_FETCHING,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILURE,
  POST_PLANT_SUCCESS,
  POST_PLANT_FAILURE,
  FETCH_PLANTID_SUCCESS,
  FETCH_PLANTID_FAILURE,
  FETCH_USERID_SUCCESS,
  FETCH_USERID_FAILURE,
} from "../actions";

export const initialState = {
  loadedPlant: {},
  plants: [
    {
      plant_name: "Fern",
      description: "its a fern",
      date_last_watered: "09/20/2020 12:00 PM",
      increment: 20,
      next_watering: "09/20/2020 4:00 PM",
      species: "fern",
      plant_url:
        "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/39b52c4cabb46819553175347e38b212/f/l/flowerbx-plants-asparagus-fern-1000px-0_4.jpg",
      date_created: "09/20/2020 1:00 AM",
    },
    {
      plant_name: "Rose",
      description: "its a rose",
      date_last_watered: "09/20/2020 12:00 PM",
      increment: 20,
      next_watering: "09/20/2020 4:00 PM",
      species: "rose",
      plant_url:
        "https://www.gardeningknowhow.com/wp-content/uploads/2019/11/red-rose.jpg",
      date_created: "09/20/2020 1:00 AM",
    },
    {
      plant_name: "Lillies",
      description: "its a lily",
      date_last_watered: "09/20/2020 12:00 PM",
      increment: 20,
      next_watering: "09/20/2020 4:00 PM",
      species: "lilly",
      plant_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/22/Raindrops_on_Yellow_Lilly.jpg",
      date_created: "09/20/2020 1:00 AM",
    },
  ],
  error: "",
  user: {},
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  console.log(`PAYLOAD: ${action.payload}`);
  switch (action.type) {
    // FETCH
    case IS_FETCHING:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    // SUCCESS
    case POST_SIGNUP_SUCCESS:
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
      };
    case POST_PLANT_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        plants: action.payload,
      };
    case FETCH_PLANTID_SUCCESS:
      return {
        ...state,
        error: "",
        loadedPlant: action.payload,
        isFetching: false,
      };
    case FETCH_USERID_SUCCESS:
      return {
        ...state,
        error: "",
        user: action.payload,
        isFetching: false,
      };
    // FAILURE
    case POST_SIGNUP_FAILURE:
    case POST_LOGIN_FAILURE:
    case POST_PLANT_FAILURE:
    case FETCH_PLANTID_FAILURE:
    case FETCH_USERID_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
