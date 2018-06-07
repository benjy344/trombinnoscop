import React      from 'react';
import axios      from 'axios';
import ListUser   from '../ListUsers/ListUsers';
import Menu       from '../Menu/Menu';
import PageProfil from '../PageProfil/PageProfil'

class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Menu />
        <main>
          <ListUser />
        </main>
        <PageProfil />
      </div>
    );
  }
}

export default Home;
