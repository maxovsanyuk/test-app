
const defaultState = {
  info: {},
  items: [],
  loaded: false,
  loading: false,
  error: null,
};


const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_USERS_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'GET_USERS_FULFILED':
      return {
        ...state,
        items: action.payload.results,
        info: action.payload.info,
        loading: false,
        loaded: true,
      }
    case 'GET_USERS_REJECTED':
      return {
        ...state,
        loaded: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default todos
