export default function poemReducer(
  state = {likes: []}, action) {
  switch (action.type) {
    case "ADD_LIKE":
      const newState = {...state, likeAdded: true}
      return newState
  }
}
