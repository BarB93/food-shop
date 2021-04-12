import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import ProductsProvider from 'context/ProductsContext';
import App from 'App';

ReactDOM.render(<BrowserRouter><ProductsProvider><App /></ ProductsProvider></BrowserRouter>, document.getElementById('root'));
