import React, { Component } from 'react';
import { MenuRow } from './MenuRow'

export const MenuFoodList = ({food}) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
  <tbody>
    {food.map((f, i) =>
      <MenuRow key={i}
               name={f.name}
               price={f.price}/>
    )}
  </tbody>
  <tr>
    <th><b>Total:</b></th>
    <td>0</td>
  </tr>
  </table>
)
