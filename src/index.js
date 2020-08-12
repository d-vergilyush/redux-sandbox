import { createStore } from 'redux';

import reducer from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer, 0);
const { dispatch } = store;

const bindActionCreator = (creator, dispatch) => (...args) => {
  return dispatch(creator(...args));
};

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);

document
  .querySelector('.inc')
  .addEventListener('click', () => incDispatch());
document
  .querySelector('.dec')
  .addEventListener('click', () => decDispatch());
document
  .querySelector('.rnd')
  .addEventListener('click', () => rndDispatch(Math.floor(Math.random()*10)));
  
const update = () => {
  document
    .querySelector('.counter')
    .innerHTML = store.getState()
}
store.subscribe(() => update());



