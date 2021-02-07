const listNewsFeed = async (params, credential, signal) => {
  try {
    const response = await fetch('/api/posts/feed/' + params.userId, {
      method: 'GET',
      signal: signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credential.t,
      },
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const listByUser = async (params, credential) => {
  try {
    const posts = await fetch('/api/posts/by/' + params.userId, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credential.t,
      },
    })
    return await posts.json()
  } catch (err) {
    console.log(err)
  }
}

const create = async (params, credential, post) => {
  try {
    const response = await fetch('/api/posts/new/' + params.userId, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + credential.t,
      },
      body: post,
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export { listNewsFeed, listByUser, create }
