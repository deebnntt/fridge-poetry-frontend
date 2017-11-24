import WordApi from "../services/wordapi.js";
import SelectWords from "../services/selectwords.js"

export function fetchWords() {
  return function(dispatch) {
    dispatch(fetchingWords());
     WordApi.fetchWords()
     .then(json => {
       const x = SelectWords.selectWords(json)
       dispatch(fetchedWords(x))
    })
  }
}

function fetchedWords(words) {
  return {
    type: "FETCHED_WORDS",
    payload: words
  };
}

function fetchingWords() {
  return { type: "FETCHING_WORDS" };
}
