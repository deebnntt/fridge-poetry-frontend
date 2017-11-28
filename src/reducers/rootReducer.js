export default function rootReducer(
  state = { words: [], isLoading: false, currentPoem: null },
  action
) {
  switch (action.type) {
    case "FETCHED_WORDS":
      return { ...state, words: action.payload, isLoading: false };
    case "FETCHING_WORDS":
      return { ...state, isLoading: true };
    case "SET_ID":
      return {...state, currentPoem: action.payload}
    default:
      return state;
  }
}
