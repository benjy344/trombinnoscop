import React from 'react';
import { Avatar } from '@material-ui/core';

const Account = ({ name, firstName, url }) => (
  <div>
    <Avatar alt={`${name} ${firstName}`} src={url} />
    <p>{ firstName && name }</p>
  </div>
);

export default Account