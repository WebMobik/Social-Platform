import { Button, Card, CardActions, CardContent, Icon, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router";
import { signin } from "./api-auth";
import auth from "./auth-helper";

export default function Signin(props) {
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
            .then(data => {
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

    return values.redirectToReferrer ? <Redirect to={form} /> : 
        (
            <div>
                <Card>
                    <CardContent>
                        <Typography>
                            Sign in
                        </Typography>
                        <TextField 
                            id="email"
                            type="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange('email')}
                            margin="normal"
                        />
                        <br />
                        <TextField 
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
                                <Typography component="p" color="error">
                                    <Icon color="error">error</Icon>
                                </Typography>
                            )
                        }
                    </CardContent>
                    <CardActions>
                        <Button
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
