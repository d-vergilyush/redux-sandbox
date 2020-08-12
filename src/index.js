import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
  
    default:
      return state;
  }
}

const store = createStore(reducer, 0);
store.dispatch({type: 'INC'});
console.log(store.getState());



