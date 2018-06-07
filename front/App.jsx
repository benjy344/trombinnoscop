import './styles/_reset.scss';
import './styles/_general.scss';
import React from 'react';
import Home from './components/Home/Home';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
