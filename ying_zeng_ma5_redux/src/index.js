import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './component/App';
import Box from './component/Box';
import countReducer from './reducer/countReducer';

const store = createStore(countReducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));