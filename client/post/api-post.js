const listNewsFeed = async (params, credentials, signal) => {
  try {
    const response = await fetch('/api/posts/feed/' + params.userId, {
      method: 'GET',
      signal: signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const listByUser = async (params, credentials) => {
  try {
    const posts = await fetch('/api/posts/by/' + params.userId, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    })
    return await posts.json()
  } catch (err) {
    console.log(err)
  }
}

const create = async (params, credentials, post) => {
  try {
    const response = await fetch('/api/posts/new/' + params.userId, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
      body: post,
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const remove = async (params, credentials) => {
  try {
    const response = await fetch('/api/posts/' + params.postId, {
      mathod: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const like = async (params, credentials, postId) => {
  try {
    const response = await fetch('/api/posts/like/', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
      body: JSON.stringify({ userId: params.userId, postId: postId }),
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const unlike = async (params, credentials, postId) => {
  try {
    const response = await fetch('/api/posts/unlike/', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
      body: JSON.stringify({ userId: params.userId, postId: postId }),
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const comment = async (params, credentials, postId, comment) => {
  try {
    const response = await fetch('/api/posts/comment/', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
      body: JSON.stringify({
        userId: params.userId,
        postId: postId,
        comment: comment,
      }),
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const uncomment = async (params, credentials, postId, comment) => {
  try {
    const response = await fetch('/api/posts/unscomment/', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credentials.t,
      },
      body: JSON.stringify({
        userId: params.userId,
        postId: postId,
        comment: comment,
      }),
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  listNewsFeed,
  listByUser,
  create,
  remove,
  like,
  unlike,
  comment,
  uncomment,
}
