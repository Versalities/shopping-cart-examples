const INITIAL_STATE = []

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GENERATE_DATA':
      return state = action.payload;
    case 'ADD_ITEM':
      return state = state.map((i) => {
	       if(i.id === action.payload.id) {
           return {...i, status : 'active'}
         } else {
           return {...i}
         }
       })
    case 'REMOVE_ITEM':
      return state = state.map((i) => {
        if(i.id === action.payload.id) {
          return {...i, status : 'inactive'}
        } else {
          return {...i}
        }
      })
    default:
      return state;
  }
}

export default productsReducer
