import { combineReducers } from "redux";
import { getPayload } from "../../utils";

const listOfUnisReducer = (
  listOfUnis = { data: null, status: "idle", error: null },
  action
) => {
  return action.type === "LIST_OF_UNIS" ? action.payload : listOfUnis;
};

export default combineReducers({ listOfUnis: listOfUnisReducer });
