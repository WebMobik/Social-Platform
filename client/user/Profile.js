import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';
import auth from "../auth/auth-helper";
import { read } from "./api-user";
import DeleteUser from './DeleteUser';
import {List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Divider, withStyles, makeStyles} from '@material-ui/core'
import {Paper, Typography, Avatar, IconButton} from '@material-ui/core'
import {Edit, Person} from '@material-ui/icons'

const styles = theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.protectedTitle
    },
    bigAvatar: {
        width: 60,
        height: 60,
        margin: 10
    }
})

function Profile({ match, classes }) {
    const [values, setValues] = useState({
        user: {following: [], followers: []},
        redirectToSignin: false,
        following: false
    })
    const jwt = auth.isAuthenticated()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        read({userId: match.params.userId}, {t: jwt.token}, signal)
            .then(data => {
                if (data && data.error) {
                    setValues({...values, redirectToSignin: true})
                } else {
                    setValues({...values, user: data})
                }
            })
        return function cleanup() {
            abortController.abort()
        }
    }, [match.params.userId])

    if (values.redirectToSignin) {
        return <Redirect to='/signin' />
    }
    const photoUrl = values.user._id
        ? `/api/users/photo/${values.user._id}?${new Date().getTime()}`
        : '/api/users/defaultphoto'

    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                Profile
            </Typography>
            <List dense>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={photoUrl}>
                    <Person/>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={values.user.name} secondary={values.user.email}/> {
                auth.isAuthenticated().user && auth.isAuthenticated().user._id === values.user._id &&
                (<ListItemSecondaryAction>
                    <Link to={"/user/edit/" + values.user._id}>
                    <IconButton aria-label="Edit" color="primary">
                        <Edit/>
                    </IconButton>
                    </Link>
                    <DeleteUser userId={values.user._id}/>
                </ListItemSecondaryAction>)
                }
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemText primary={values.user.about} />
            </ListItem>
            <ListItem>
                <ListItemText primary={"Joined: " + (
                new Date(values.user.created)).toDateString()}/>
            </ListItem>
            </List>
        </Paper>
    )
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)
