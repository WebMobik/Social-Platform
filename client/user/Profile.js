import {List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Divider} from '@material-ui/core'
import {Paper, Typography, Avatar, IconButton} from '@material-ui/core'
import {Edit, Person} from '@material-ui/icons'
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';
import auth from "../auth/auth-helper";
import { read } from "./api-user";
import DeleteUser from './DeleteUser';

export default function Profile({ match }) {
    const [user, setUser] = useState({})
    const [redirectToSignin, setRedirectToSignin] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        const jwt = auth.isAuthenticated()
        read({userId: match.params.userId}, {t: jwt.token}, signal)
            .then(data => {
                if (data && data.error) {
                    setRedirectToSignin(true)
                } else {
                    setUser(data)
                }
            })
        return function cleanup() {
            abortController.abort()
        }
    }, [match.params.userId])

    if (redirectToSignin) {
        return <Redirect to='/signin' />
    }

    // classes.root, classes.title

    return (
        <Paper elevation={4}>
            <Typography variant="h6">
                Profiel
            </Typography>
            <List dense>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Person />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={user.email} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText 
                        primary={"Joined: " + (
                            new Date(user.created)).toDateString()
                        }
                    />
                </ListItem>
            </List>
            {
                auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
                    (
                        <ListItemSecondaryAction>
                            <Link to={"/user/edit/" + user._id}>
                                <IconButton
                                    aria-label="Edit"
                                    color="primary"
                                >
                                    <Edit />
                                </IconButton>
                            </Link>
                            <DeleteUser userId={user._id} />
                        </ListItemSecondaryAction>
                    )
            }
        </Paper>
    )
}
