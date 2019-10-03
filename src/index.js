import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './redux/reducers'
import App from './components/app';

const store = createStore(reducers);


ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))


