import '../../styles/_listUsers.scss';
import React from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, IconButton, Avatar } from '@material-ui/core';
import { envServer } from '../../constants';

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
      users: mockUsers
    };
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
      <ul className="listUsers">
        {users.map((user, i) => (
          <li key={i}>
            <Card>
              <CardContent>
                <Avatar className='avatar'>HP</Avatar>
                <p className="name">
                  {user.firstName} {user.name}
                </p>
                <p className="job">{user.job}</p>
                <p className="status">{user.status}</p>
              </CardContent>
              <CardActions>
                <IconButton aria-label="arrow_righ" color="primary" />
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListUsers;
