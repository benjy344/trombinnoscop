import './styles/_reset.scss';
import './styles/_general.scss';
import React from 'react';

import PageProfil from './components/PageProfil/PageProfil';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <PageProfil />;
  }
}

export default App;
