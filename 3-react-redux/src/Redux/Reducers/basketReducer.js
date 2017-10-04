const INITIAL_STATE = [];

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.payload);
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.payload.id);
    case 'GENERATE_DATA':
      return state = INITIAL_STATE;
    default:
      return state;
  }
}

export default basketReducer;
