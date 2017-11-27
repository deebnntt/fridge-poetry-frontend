import PoemApi from "../services/poemapi.js";

export function createPoem(params){
  return function(dispatch){
    PoemApi.createPoem(params)
  }
}
