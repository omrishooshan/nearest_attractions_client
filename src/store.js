import { createStore, compose } from "redux";

const initialState = {
  latitude: null,
  longitude: null,
  isUserLocationStored:false,
  widgetCounter:localStorage.getItem('favorits')?localStorage.getItem('favorits').split(',').length:0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_GEOLOCATIONS":
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        isUserLocationStored:true
      };

    case "INCREMENT_WIDGET":
      return {
        ...state,
        widgetCounter:state.widgetCounter+1,
      };

    case "DECREMENT_WIDGET":
      return {
        ...state,
        widgetCounter:state.widgetCounter-1,
      };

    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose
);
