import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const currencies = [
    {
        value: 'Résident',
        label: 'Résident',
    },
    {
        value: 'Nomades',
        label: 'Nomades',
    },
]

class TextFields extends React.Component {
    constructor(){
        super()
        this.state = {
            phoneNumber: '',
            lastName: '',
            firstName: '',
            statut: '',
            email: '',
            job: '',
            password: '',
            portfolio: '',
            fb: '',
            twitter: '',
            insta: '',
            jobStatus: '',
        }
    }
    
    sendInformations(){
        console.log('okay')
        axios.post('/profiles', {
            params: {
                name: this.state.lastName,
                firstname:this.state.firstName,
                password: this.state.password,
                status: this.state.statut,
                email: this.state.email,
                phone: this.state.phoneNumber,
                job: this.state.job,
                portfolioLink: this.state.portfolio,
                fbLink: this.state.fb,
                tweeterLink:this.state.twitter,
                instaLink:this.state.insta,
                jobStatus:this.state.jobStatus,
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleChange(name, event){
        this.setState({
            [name]: event.target.value,
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
                required
                id="requiredLastName"
                label="Nom"
                onChange={(e) => this.handleChange("lastName", e)}          
                className={classes.textField}
                margin="normal"
            />
            <TextField
                required
                id="requiredfFrstName"
                label="Prénom"
                onChange={(e) => this.handleChange("firstName", e)}          
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                onChange={(e) => this.handleChange("password", e)}          
                type="Mot de passe"
                autoComplete="current-password"
                margin="normal"
            />
            <TextField
                id="phoneNumber"
                label="Phone number"
                value={this.state.phoneNumber}
                onChange={(e) => this.handleChange("phoneNumber", e)}
                type="number"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="select-currency"
                select
                required
                label="Statut"
                className={classes.textField}
                value={this.state.statut}
                onChange={(e) => this.handleChange("statut", e)}
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
                helperText="Sélectionnez votre statut"
                margin="normal"
            >
                {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>
            <TextField
                id="email"
                label="E-mail"
                onChange={(e) => this.handleChange("email", e)}          
                className={classes.textField}
                margin="normal"
            />
            <TextField
                required
                id="job"
                label="Poste"
                onChange={(e) => this.handleChange("job", e)}          
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="portfolioLink"
                label="Lien Portfolio"
                onChange={(e) => this.handleChange("portfolio", e)}          
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="fbLink"
                label="Lien page Facebook"
                onChange={(e) => this.handleChange("fb", e)}          
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="tweeterLink"
                label="Lien page Twitter"
                onChange={(e) => this.handleChange("twitter", e)}          
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="instaLink"
                label="Lien page Instagram"
                onChange={(e) => this.handleChange("insta", e)}          
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="jobStatus"
                label="Emplacement de travail"
                onChange={(e) => this.handleChange("jobStatus", e)}          
                className={classes.textField}
                margin="normal"
            />
            <div 
                className="sendButton">
                <Button onClick={this.sendInformations.bind(this)} variant="contained" color="primary" className={classes.button}>
                    Send
                </Button>
            </div>
            
            </form>
        );
    }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);