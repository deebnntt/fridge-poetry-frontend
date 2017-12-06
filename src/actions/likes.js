import LikeApi from "../services/likeapi.js";

export default function addLike(params){
  return function(dispatch){
    LikeApi.createPoem(params)
    .then(res => res.json()).then(json => dispatch({
      type: "ADD_LIKE",
      payload: json.id
    }))
  }
}
