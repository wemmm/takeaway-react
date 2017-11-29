import React from 'react';
import ReactDOM from 'react-dom';
import { MenuFoodList } from './MenuFoodList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<Menu />, document.getElementById('root'));

ReactDOM.render(
  <MenuFoodList food={
    [
      {
        name: 'Mixed Sashimi',
        price: 12
      },
      {
        name: 'Tuna Nigiri',
        price: 7
      },
      {
        name: 'Edemame',
        price: 3
      }
    ]
  }/>,
  document.getElementById('root')
)

registerServiceWorker();
