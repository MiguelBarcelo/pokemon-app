export const TypeActions = {
  SEARCH_REQUEST: "SEARCH_REQUEST",
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_FAIL: "SEARCH_FAIL"
}

export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {

    case TypeActions.SEARCH_REQUEST: return {
      ...state,
      loading: true
    }

    case TypeActions.SEARCH_SUCCESS: return {
      ...state,
      pokemon: payload,
      loading: false,
      error: null
    }

    case TypeActions.SEARCH_FAIL: return {
      ...state,
      pokemon: {
        ...state.pokemon,
        color: "white"
      },
      loading: false,
      error: payload
    }

    default: return state
  }
}
