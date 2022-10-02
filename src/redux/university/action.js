import axios from "axios";
import { getPayload } from "../../utils";


export const getAllUsers = (query) => {
    const type = "LIST_OF_UNIS";
  
    return (dispatch) => {
      dispatch({ type: type, payload: getPayload("pending", null) });
  
      axios
        .get(`http://universities.hipolabs.com/search?name=${query}`)
        .then((res) =>
          dispatch({ type: type, payload: getPayload("success", res.data) })
        )
        .catch((err) =>
          dispatch({ type: type, payload: getPayload("error", err) })
        );
    };
  };