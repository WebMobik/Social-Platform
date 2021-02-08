import React, { useEffect, useState } from 'react'
import { listNewsFeed } from './api-post'
import auth from '../auth/auth-helper'
import PostList from './PostList'
import { Card, Divider, Typography } from '@material-ui/core'
import NewPost from './NewPost'

const Newsfeed = () => {
  const [posts, setPosts] = useState([])
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    listNewsFeed({ userId: jwt.user._id }, { t: jwt.user._id }, signal).then(
      (data) => {
        if (data.error) {
          return console.log(data.error)
        } else {
          setPosts(data)
        }
      }
    )
    return function cleanup() {
      abortController.abort()
    }
  }, [])

  const addPost = (post) => {
    const updatedPosts = [...posts]
    updatedPosts.unshift(post)
    setPosts(updatedPosts)
  }

  const removePost = (post) => {
    const updatedPosts = [...posts]
    const index = updatedPosts.indexOf(post)
    updatedPosts.splice(index, 1)
    setPosts(updatedPosts)
  }

  return (
    <Card>
      <Typography type="title">Newsfeed</Typography>
      <Divider />
      <NewPost addUpdate={addPost} />
      <PostList removeUpdate={removePost} posts={posts} />
    </Card>
  )
}

export default Newsfeed
