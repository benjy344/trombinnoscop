import React from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, IconButton, Avatar } from '@material-ui/core';

const mockUsers = [
  {
    name: 'Frank',
    firstName: 'Allo',
    imgUrl: '#',
    job: 'Développeur'
  },
  {
    name: 'Paulo',
    firstName: 'Hibou',
    imgUrl: '#',
    job: 'Graphiste'
  }
];

class Home extends React.Component {
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

  renderProfiles(users) {
    console.log(users);
    return (
      <ul>
        {users.map(user => (
          <li>
            <Card>
              <CardContent>
                <Avatar alt={`${user.firstName} ${user.name}`} src={user.imgUrl} />
                <p>
                  {user.firstName} {user.name}
                </p>
                <p>{user.job}</p>
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

  get() {
    axios
      .get('http://localhost:3001/profiles')
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { users } = this.state;

    return (
      <main>
        {this.renderProfiles(users)}
        <button onClick={this.get()}>THIS GET</button>
      </main>
    );
  }
}

export default Home;
