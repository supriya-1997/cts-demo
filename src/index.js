import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';
import { CartProvider } from './CartContext'
ReactDOM.render(
 
  <CartProvider>
  <App></App>
</CartProvider>,
    
  document.getElementById('root')
);


serviceWorker.unregister();