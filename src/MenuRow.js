import React, { Component } from 'react';

export const MenuRow = ({name, price}) => (

  this.state = { active : false },

  function clickHandler() {
    this.state = { active : true }
  },

  <tr>
    <td className="food-item">
      { name }
    </td>
    <td>
      { price }
    </td>
  </tr>

)
