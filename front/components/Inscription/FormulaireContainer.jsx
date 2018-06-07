import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextFields from './Formulaire'

export default class FormulaireContainer extends React.Component {
  
  constructor(){
    super()
    this.state = {
        open: false,
    }
  }
    

  handleClickOpen(){
    this.setState({ open: true });
  };

  handleClose(){
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={()=>this.handleClickOpen()} color="primary">S'inscrire</Button>
        <Dialog
          open={this.state.open}
          onClose={()=>this.handleClose()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Inscription</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Veuillez vous inscrire pour ajoutez votre profil au trombinoscope.
            </DialogContentText>
            <div className="form-view">
              <TextFields close={()=>this.handleClose()}/>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.handleClose()} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
