import React from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  GridList,
  GridListTile,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  gridList: {
    width: 500,
    height: 220,
  },
  titleText: {
    textAlign: 'center',
    marginTop: 10,
  },
}))

export default function FollowGrid(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList}>
        {props.people.map((person, i) => {
          return (
            <GridListTile style={{ height: 120 }} key={i}>
              <Link to={'/users/' + person._id}>
                <Avatar
                  src={'/api/users/photo/' + person._id}
                  className={classes.bigAvatar}
                />
                <Typography className={classes.titleText}>
                  {person.name}
                </Typography>
              </Link>
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

FollowGrid.propTypes = {
  people: PropTypes.array.isRequired,
}
