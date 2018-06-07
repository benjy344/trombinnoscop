import '../../styles/_menu.scss';
import React from 'react';
import axios from 'axios';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <header className='menu'>
        <h1>Villettemakerz</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Agenda</a>
            </li>
            <li>
              <a href="#">Réservation</a>
            </li>
            <li>
              <a href="#">Trombinoscope</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
