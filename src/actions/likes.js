import LikeApi from "../services/likeapi.js";
import PoemApi from '../services/poemapi.js'

export default function addLike(params){
  return function(dispatch){
    LikeApi.createPoem(params)
    .then(res => res.json())
    .then(json => dispatch({
      type: "ADD_LIKE",
      payload: json.id
    }))
    .then(PoemApi.fetchPoems()
    .then(json => {
      dispatch({type: "FETCH_POEMS",
      payload: json})
    }))
  }
}

export function resetNewPoemCreated() {
  return function(dispatch) {dispatch({type: "RESET_LIKE_ADDED"})}
  }
