import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Redirect } from "react-router";
import { signin } from "./api-auth";
import auth from "./auth-helper";
import { Button, Card, CardActions, CardContent, Icon, TextField, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing(),
      marginRight: theme.spacing(),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    }
  })

function Signin(props) {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    })

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user)
            .then((data) => {
                if (data.error) {
                    setValues({...values, error: data.error})
                } else {
                    auth.authenticate(data, () => {
                        setValues({...values, error: '', redirectToReferrer: true})
                    })
                }
            })
    }

    const {form} = props.location.state || {
        form: {
            pathname: '/'
        }
    }

    const {classes} = props

    return values.redirectToReferrer ? <Redirect to={form} /> : 
        (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}>
                            Sign in
                        </Typography>
                        <TextField  className={classes.textField}
                            id="email"
                            type="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange('email')}
                            margin="normal"
                        />
                        <br />
                        <TextField  className={classes.textField}
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
                                    <span style={{margin: '0px 3px', position: 'relative', bottom: '5px'}}>
                                        {values.error}
                                    </span>
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
            </div>
        )
}

Signin.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Signin)
