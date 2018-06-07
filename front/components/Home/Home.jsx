import React      from 'react';
import ListUser   from '../ListUsers/ListUsers';
import Menu       from '../Menu/Menu';
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
        <FormulaireContainer/>
      </div>
    );
  }
}

export default Home;
