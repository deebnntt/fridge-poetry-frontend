import PoemApi from "../services/poemapi.js";

export function createPoem(params){
  return function(dispatch){
    PoemApi.createPoem(params)
    .then(res => res.json()).then(json => dispatch({
      type: "CREATE_POEM",
      payload: json.id
    }))
  }
}

export function creatingPoem() {
  return { type: "CREATING_POEM" };
}

export function fetchPoem(id) {
  return function(dispatch) {
    PoemApi.fetchPoem(id)
      .then(json => {
        dispatch({type: "FETCH_POEM",
        payload: json})
      })
  }
}

export function fetchingPoem() {
  return { type: "FETCHING_POEM" };
}

export function fetchPoems() {
  return function(dispatch) {
    PoemApi.fetchPoems()
      .then(json => {
        dispatch({type: "FETCH_POEMS",
        payload: json})
      })
  }
}

export function fetchingPoems() {
  return { type: "FETCHING_POEMS" };
}

export function resetNewPoemCreated() {
  return function(dispatch) {dispatch({type: "RESET_NEWPOEMCREATED"})}
}

export function updatePoem(id, data) {
  return function(dispatch) {
    PoemApi.updatePoem(id, data)
      .then(json => {
        dispatch({type: "UPDATE_POEM",
        payload: json})
      })
  }
}
