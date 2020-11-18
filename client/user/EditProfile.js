import React, { useEffect, useState } from "react"
import { Redirect } from "react-router"
import auth from "../auth/auth-helper"
import { read, update } from "./api-user"

export default function EditProfile({ match }) {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        userId: null,
        redirectToProfile: false,
        error: ''
    })

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        const jwt = auth.isAuthenticated()
        read({userId: match.params.userId}, {t: jwt.token}, signal)
            .then(data => {
                if (data && data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setValues(data)
                }
            })
    }, [match.params.userId])

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = () => {
        const jwt = auth.isAuthenticated()
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        }
        update({userId: match.params.userId}, {t: jwt.token}, user)
            .then(data => {
                if (data && data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setValues({...values, userId: data._id, redirectToProfile: true})
                }
            })
    }

    if (values.redirectToProfile) {
        return (<Redirect to={'/user/' + values.userId} />)
    }

    // classes.card, classes.title, classes.textField, classes.error, classes.submit

    return (
        <Card>
            <CardContent>
                <Typography
                    type="headline"
                    component="h2"
                >
                    Edit Profile
                </Typography>
                <TextField
                    id="name"
                    label="Name"
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <br/>
                <TextField
                    id="email"
                    type="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    margin="normal"
                />
                <br/>
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                    margin="normal"
                />
                <br/>
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
                    variant="raised"
                    onClick={clickSubmit}
                >
                    Submit
                </Button>
            </CardActions>
        </Card>
    )
}
