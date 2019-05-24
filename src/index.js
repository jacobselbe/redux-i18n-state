import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Board from './components/board';
import store from './store';

console.log(store.getState().language);

ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('root')
);