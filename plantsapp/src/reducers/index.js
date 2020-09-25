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
  UPDATE_PLANT_SUCCESS,
  UPDATE_PLANT_FAILURE,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  UPDATE_PLANTWATER_SUCCESS,
  UPDATE_PLANTWATER_FAILURE,
} from "../actions";

export const initialState = {
  loadedPlant: {},
  plants: [],
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
    case DELETE_PLANT_SUCCESS:
    case UPDATE_PLANTWATER_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        user: action.payload.user,
        plants: action.payload.user.plants,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        user: action.payload,
        plants: action.payload.plants,
      };
    case POST_PLANT_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        plants: action.payload.plants,
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
    case UPDATE_PLANT_SUCCESS:
      console.log(action.payload.plant);
      const newPlants = state.plants.filter((plant) => {
        return plant.id != action.plantID;
      });
      newPlants.push(action.payload.plant);
      return {
        ...state,
        error: "",
        plants: newPlants,
        loadedPlant: {},
        isFetching: false,
      };
    case DELETE_USER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        user: {},
        plants: [],
        isFetching: false,
      };
    // FAILURE
    case POST_SIGNUP_FAILURE:
    case POST_LOGIN_FAILURE:
    case POST_PLANT_FAILURE:
    case FETCH_PLANTID_FAILURE:
    case FETCH_USERID_FAILURE:
    case DELETE_PLANT_FAILURE:
    case DELETE_USER_FAILURE:
    case UPDATE_PLANTWATER_FAILURE:
      return {
        ...state,
        error: action.payload.response.data.message,
        isFetching: false,
      };
    case UPDATE_USER_FAILURE:
    case UPDATE_PLANT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

/*    {
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
    }, */
