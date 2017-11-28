import PoemApi from "../services/poemapi.js";

export function createPoem(params){
  return function(dispatch){
    PoemApi.createPoem(params)
    .then(res => res.json()).then(json => dispatch({
      type: "SET_ID",
      payload: json.id
    }))

  }
}
