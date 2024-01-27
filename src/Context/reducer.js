export default function reducer(state, action) {
  switch (action.type) {
    case "SEARCH": return {
      ...state,
      pokemon: action.payload
    }

    default: return state
  }
}
