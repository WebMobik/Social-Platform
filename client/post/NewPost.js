import { makeStyles, Avatar, Button, Card, CardActions, CardContent, CardHeader, Icon, IconButton, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import auth from '../auth/auth-helper'
import { create } from '../user/api-user'
import {PhotoCamera} from '@material-ui/icons';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#efefef',
      padding: `${theme.spacing(3)}px 0px 1px`
    },
    card: {
      maxWidth:600,
      margin: 'auto',
      marginBottom: theme.spacing(3),
      backgroundColor: 'rgba(65, 150, 136, 0.09)',
      boxShadow: 'none'
    },
    cardContent: {
      backgroundColor: 'white',
      paddingTop: 0,
      paddingBottom: 0
    },
    cardHeader: {
      paddingTop: 8,
      paddingBottom: 8
    },
    photoButton: {
      height: 30,
      marginBottom: 5
    },
    input: {
      display: 'none',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: '90%'
    },
    submit: {
      margin: theme.spacing(2)
    },
    filename:{
      verticalAlign: 'super'
    }
}))

export default function NewPost(props) {
    const classes = useStyles()
    const [values, setValues] = useState({
        text: '',
        photo: '',
        error: '',
        user: {}
    })
    const jwt = auth.isAuthenticated()

    useEffect(() => {
        setValues({...values, user: auth.isAuthenticated().user})
    }, [])

    const clickPost = () => {
        const postData = new FormData()
        postData.append('text', values.text)
        postData.append('photo', values.photo)
        create({userId: jwt.user._id}, {t: jwt.token}, postData)
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setValues({...values, text: '', photo: ''})
                    props.addUpdate(data)
                }
            })
    }

    const handleChange = name => event => {
        const value = name === 'photo'
            ? event.target.files[0]
            : event.target.value
        setValues({...values, [name]: value})
    }

    const photoURL = values.user._id
        ? '/api/users/photo/' + values.user._id
        : '/api/users/defaultphoto'

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader 
                    avatar={<Avatar src={photoURL} />}
                    title={values.user.name}
                    className={classes.cardHeader}
                />
                <CardContent className={classes.cardContent}>
                <TextField
                    placeholder="Share your thoughts ..."
                    multiline
                    rows="3"
                    value={values.text}
                    onChange={handleChange('text')}
                    className={classes.textField}
                    margin="normal"
                />
                <input
                    accept="image/*"
                    onChange={handleChange('photo')}
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                />
                <label
                    color="secondary"
                    className={classes.photoButton}
                    component="span"
                >
                    <IconButton>
                        <PhotoCamera />
                    </IconButton>
                </label>
                <span>{values.photo ? values.photo.name : ''}</span>
                {
                    values.error && (
                            <Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>
                                    error
                                </Icon>
                                {values.error}
                            </Typography>
                        )
                }
                </CardContent>
                <CardActions>
                    <Button 
                        color="primary"
                        variant="contained"
                        disabled={values.text === ''}
                        onClick={clickPost}
                        className={classes.submit}
                    >
                        POST
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

NewPost.propTypes = {
    addUpdate: PropTypes.func.isRequired
}
