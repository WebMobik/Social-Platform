import React, {useEffect, useState} from 'react'
import {list} from './api-user'
import {Link} from 'react-router-dom'
import {List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction} from '@material-ui/core'
import {Paper, Typography, Avatar, IconButton} from '@material-ui/core'
import {ArrowForward, Person} from '@material-ui/icons'

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        list(signal)
            .then((data) => {
                if (data && data.error) {
                    console.log(data.error)
                } else {
                    setUsers(data)
                }
            })

        return function cleanup() {
            abortController.abort()
        }
    }, [])

    // classes.root and classes.title

    return (
        <Paper elevation={4}> 
            <Typography variant="h6">
                All Users
            </Typography>
            <List dense>
                {users.map((item, index) => {
                        return (
                            <Link to={"/users/" + item._id} key={index}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Person />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.name} />
                                    <ListItemSecondaryAction>
                                        <IconButton>
                                            <ArrowForward />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </Link>
                        )
                    })
                }
            </List>
        </Paper>
    )
}