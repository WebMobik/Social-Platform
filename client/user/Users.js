import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {list} from './api-user'
import {List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, withStyles} from '@material-ui/core'
import {Paper, Typography, Avatar, IconButton} from '@material-ui/core'
import {ArrowForward, Person} from '@material-ui/icons'

const styles = theme => ({
    root: theme.mixins.gutters({
      padding: theme.spacing(),
      margin: theme.spacing(5)
    }),
    title: {
      margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
      color: theme.palette.openTitle
    }
})

function Users({classes}) {

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

    return (
        <Paper elevation={4} className={classes.root}> 
            <Typography variant="h6" className={classes.title}>
                All Users
            </Typography>
            <List dense>
                {users.map((item, index) => {
                        return (
                            <Link to={"/user/" + item._id} key={index}>
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

Users.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Users)
