const INITIAL_STATE = [];

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.payload);
    case 'REMOVE_ITEM':
      return state.filter(i => i !== action.payload);
    default:
      return state;
  }
}

export default basketReducer;
