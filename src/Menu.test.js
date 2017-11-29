import React from 'react';
import ReactDOM from 'react-dom';
import { MenuFoodList } from './MenuFoodList';
import { MenuRow } from './MenuRow';

it('renders the menu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuFoodList food={
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
  }/>, div);
});

it('renders menu rows without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuRow />, div);
});
