import React      from 'react';
import axios      from 'axios';
import ListUser   from '../ListUsers/ListUsers';
import Menu       from '../Menu/Menu';
import PageProfil from '../PageProfil/PageProfil'
import SearchBar  from '../SearchBar/SearchBar'
import FormulaireContainer from '../Inscription/FormulaireContainer';

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
          <SearchBar />
          <ListUser />
        </main>
        <PageProfil />
        <FormulaireContainer/>
      </div>
    );
  }
}

export default Home;
