import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({ posts, removeUpdate }) => {
  return (
    <div styles={{ marginTop: '24px' }}>
      {posts.map((item, i) => {
        return <Post post={item} key={i} onRemove={removeUpdate} />
      })}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  removeUpdate: PropTypes.func.isRequired,
}

export default PostList
