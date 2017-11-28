import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <header className="Menu-header">
          <h1 className="Menu-title">Order some food!</h1>
          <button>ok</button><button>nah</button>
        </header>
      </div>
    );
  }
}

export default Menu;
