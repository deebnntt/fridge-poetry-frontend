export default function poemReducer(
  state = {poems: [], newPoemCreated: false, currentPoem: null, poemDeleted: false, likeAdded: false}, action) {
  switch (action.type) {
    case "CREATE_POEM":
      const newPoemState = {...state, newPoemCreated: true, currentPoem: action.payload}
      return newPoemState
    case "CREATING_POEM":
      return { ...state, isLoading: true };
    case "RESET_NEWPOEMCREATED":
      const resetState = {...state, newPoemCreated: false}
      return resetState
    case "FETCH_POEMS":
      const newState = {...state, poems: action.payload}
      return newState
    case "FETCH_POEM":
      const poemState = {...state, poem: action.payload}
      return poemState
    default:
      return state
    case "FETCHING_POEMS":
      return { ...state, isLoading: true };
    case "UPDATE_POEM":
      const updatedPoemState = {...state, poem: action.payload}
      return updatedPoemState
    case "UPDATING_POEM":
      return { ...state, isLoading: true };
    case "POEM_UPDATED":
      return {...state, poem: null}
    case "DELETE_POEM":
      const deletedState = {...state, poemDeleted: true}
      return deletedState
    case "RESET_POEM_DELETED":
      const resetDeletedState = {...state, poemDeleted: false}
      return resetDeletedState
    case "ADD_LIKE":
      const newerState = {...state, likeAdded: true}
        return newerState
    case "RESET_LIKE_ADDED":
      const resetLikeState = {...state, likeAdded: false}
      return resetLikeState
  }
}
