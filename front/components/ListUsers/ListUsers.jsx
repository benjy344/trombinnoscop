import '../../styles/_listUsers.scss';
import React from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@material-ui/core';
import PageProfil from '../PageProfil/PageProfil';

const mockUsers = [
  {
    name: 'Frank',
    firstName: 'Allo',
    imgUrl: '#',
    job: 'Développeur',
    status: 'Résident'
  },
  {
    name: 'Paulo',
    firstName: 'Hibou',
    imgUrl: '#',
    job: 'Graphiste',
    status: 'Résident'
  },
  {
    name: 'Paulo',
    firstName: 'Hibou',
    imgUrl: '#',
    job: 'Graphiste',
    status: 'Résident'
  },
  {
    name: 'Paulo',
    firstName: 'Hibou',
    imgUrl: '#',
    job: 'Graphiste',
    status: 'Résident'
  },
  {
    name: 'Frank',
    firstName: 'Allo',
    imgUrl: '#',
    job: 'Développeur',
    status: 'Résident'
  },
  {
    name: 'Paulo',
    firstName: 'Hibou',
    imgUrl: '#',
    job: 'Graphiste',
    status: 'Résident'
  },
  {
    name: 'Paulo',
    firstName: 'Hibou',
    imgUrl: '#',
    job: 'Graphiste',
    status: 'Résident'
  },
  {
    name: 'Paulo',
    firstName: 'Hibou',
    imgUrl: '#',
    job: 'Graphiste',
    status: 'Résident'
  }
];

class ListUsers extends React.Component {
  constructor() {
    super();

    this.state = {
      users: mockUsers,
      open: false,
    };

    this.handleClickOpen  = this.handleClickOpen.bind(this);
    this.handleClose  = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  componentDidMount() {
    axios
      .get('/profiles')
      .then(res => {
        // this.setState({
        //   users: res.data
        // });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div className='wrapper-global'> 
        <ul className="listUsers">
          {users.map((user, i) => (
            <li key={i}>
              <Card>
                <CardContent>
                  <Avatar className="avatar">HP</Avatar>
                  <p className="name">
                    {user.firstName} {user.name}
                  </p>
                  <p className="job">{user.job}</p>
                  <p className="status">{user.status}</p>
                </CardContent>
                <CardActions>
                  <Button onClick={this.handleClickOpen}>Voir plus</Button>
                </CardActions>
              </Card>
            </li>
          ))}
        </ul>

        <Dialog
          className='dialog'
          fullScreen
          open={this.state.open}
          onClose={() => this.handleClose()}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent >
            <div className="form-view">
              <PageProfil close={() => this.handleClose()}/>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default ListUsers;
