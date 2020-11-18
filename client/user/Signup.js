import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Icon, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { create } from "./api-user";

export default function Signup() {

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

    // classes.card, classes.title, classes.textField, classes.error, classes.submit

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h6">
                        Sign Up
                    </Typography>
                    <TextField 
                        id="name"
                        label="Name"
                        value={values.name}
                        onChange={handleChange('name')}
                        margin="normal"
                    />
                    <br />
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
                                {values.error}
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
