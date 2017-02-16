import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import './index.css';

const counter = (state=0,action)=>{
  switch(action.type)
  {
    case 'INCREMENT':
    return state+1;
    case 'DECREMENT':
    return state-1;
    default:
    return state;
  }
} 
const store = createStore(counter)
const ren = ()=>{ ReactDOM.render(
 <App value={store.getState()} onINCREMENT={()=>{store.dispatch({type:'INCREMENT'})}} onDECREMENT={()=>{store.dispatch({type:'DECREMENT'})}} />,
  document.getElementById('root')
);}

store.subscribe(ren);
ren();