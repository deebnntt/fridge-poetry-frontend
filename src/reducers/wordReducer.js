export default function wordReducer(
  state = { words: [], isLoading: false },
  action
) {
  switch (action.type) {
    case "FETCHED_WORDS":
      return { ...state, words: action.payload, isLoading: false };
    case "FETCHING_WORDS":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
