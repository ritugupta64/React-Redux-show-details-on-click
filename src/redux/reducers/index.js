import { combineReducers } from "redux";


const initialState = [
  { name: "song 1", duration: "3.53" },
  { name: "song 2", duration: "5.53" },
  { name: "song 3", duration: "1.53" },
  { name: "song 4", duration: "2.53" },
  { name: "song 5", duration: "7.53" }
];

export const songList = (state = initialState) => {
  return [...state];
};

export const songSelectedDetails = (state = null, action) => {
  if(action.type === 'SELECTED_SONG'){
    return action.payload
  }
  return state
};

export const reducers = combineReducers({
  songList,
  songSelectedDetails
});
