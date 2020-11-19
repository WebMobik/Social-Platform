import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { create } from "./api-user";
import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Icon, TextField, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing.unit * 5,
      paddingBottom: theme.spacing.unit * 2
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing.unit * 2,
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing.unit * 2
    }
})

function Signup({classes}) {
    const [values, setValues] = useState({
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    })

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
            
        }
        create(user)
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setValues({...values, error: '', open: true})
                }
            })
    }

    // const {classes} = props

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>
                        Sign Up
                    </Typography>
                    <TextField className={classes.textField}
                        id="name"
                        label="Name"
                        value={values.name}
                        onChange={handleChange('name')}
                        margin="normal"
                    />
                    <br />
                    <TextField className={classes.textField}
                        id="email"
                        type="email"
                        label="Email"
                        value={values.email}
                        onChange={handleChange('email')}
                        margin="normal"
                    />
                    <br />
                    <TextField className={classes.textField}
                        id="password"
                        type="password"
                        label="Password"
                        value={values.password}
                        onChange={handleChange('password')}
                        margin="normal"
                    />
                    <br />
                    {
                        values.error && (
                            <Typography component="p" color="error" className={classes.error}>
                                <Icon color="error">error</Icon>
                                {values.error}
                            </Typography>
                        )
                    }
                </CardContent>
                <CardActions>
                    <Button className={classes.submit}
                        color="primary"
                        variant="contained"
                        onClick={clickSubmit}
                    >
                        Submit
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={values.open} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            New account successfully created.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signin">
                            <Button
                                color="primary"
                                autoFocus="autoFocus"
                                variant="contained"
                            >
                                Sign In
                            </Button>
                        </Link>
                    </DialogActions>
            </Dialog>
        </div>
    )
} 

Signup.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Signup)
