import './styles/_reset.scss';
import './styles/_general.scss';
import React from 'react';
import Home from './components/Home/Home';

import PageProfil from './components/PageProfil/PageProfil';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Home />
    );
  }
}

export default App;
