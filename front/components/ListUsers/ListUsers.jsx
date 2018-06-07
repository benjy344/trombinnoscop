import React from 'react';

const ListUsers = ({ users }) => {
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
};

export default ListUsers;
