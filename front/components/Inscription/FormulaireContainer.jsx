import './../../styles/_formulaire.scss';
import React from 'react';
import TextFields from './Formulaire'

class FormulaireContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="form-view">
        <h1>Inscription</h1>
        <div className="form">
          <TextFields/>
        </div>
      </div>
    ) 
  }
}

export default FormulaireContainer;
