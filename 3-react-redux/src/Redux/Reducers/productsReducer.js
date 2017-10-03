const INITIAL_STATE = []

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GENERATE_DATA':
      return state = action.payload;
    default:
      return state;
  }
}

export default productsReducer
