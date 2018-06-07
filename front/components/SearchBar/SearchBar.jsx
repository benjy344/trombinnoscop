import React                                                                          from 'react';
import axios                                                                          from 'axios';
import {
  Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, TextField,
  Typography
} from '@material-ui/core/es/index'

class SearchBar extends React.Component {

  constructor(props) {
    super()

    this.state = {
      search: '',
      profile: 'developper',
      project: 'personnal',
    }
  }

  handleChange(event) {
    this.setState({
      search: event.target.value,
    })
  }

  profileChange(event) {
    this.setState({
      profile: event.target.value,
    })
  }
  projectChange(event) {
    this.setState({
      project: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <div className={'col-6'}>
          <Card >
            <CardContent>
              <Typography variant="headline" component="h2">
                Je recheche une personne
              </Typography>
              <form className={''} noValidate autoComplete="off">
                <TextField
                  id="name"
                  label="Qui recherchez vous ?"
                  className={''}
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                  margin="normal"
                />
              </form>
            </CardContent>
            <CardActions>
              <Button size="small">Rechecher</Button>
            </CardActions>
          </Card>
        </div>
        <div className={'col-6'}>
          <Card >
            <CardContent>
              <Typography variant="headline" component="h2">
                Je recheche de l'aide
              </Typography>

              <div className={'block'}>
                <span>
                Je recheche
              </span>
                <FormControl >
                  <Select
                    value={this.state.profile}
                    onChange={this.profileChange.bind(this)}
                    inputProps={{
                      name: 'profile',
                      id: 'profile',
                    }}
                  >
                    <MenuItem value={'developper'}>Un développeur</MenuItem>
                    <MenuItem value={'ux'}>Un UX</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={'block'}>
                <span>
                pour un projet
              </span>
                <FormControl >
                  <Select
                    value={this.state.project}
                    onChange={this.projectChange.bind(this)}
                    inputProps={{
                      name: 'project',
                      id: 'project',
                    }}
                  >
                    <MenuItem value={'personnal'}>Projet personnel</MenuItem>
                    <MenuItem value={'freelance'}>Freelance</MenuItem>
                  </Select>
                </FormControl>
              </div>

            </CardContent>
            <CardActions>
              <Button size="small">Rechecher</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default SearchBar;
