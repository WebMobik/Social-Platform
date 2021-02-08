import ErrorHandler from '../helpers/dbErrorHandler'
import Post from '../models/Post'
import formidable from 'formidable'
import fs from 'fs'

const listNewsFeed = async (req, res) => {
  const following = req.profile.following
  following.push(req.profile._id)
  try {
    const posts = await Post.find({ postedBy: { $in: req.profile.following } })
      .populate('commets.postedBy', '_id name')
      .populate('postedBy', '_id name')
      .sort('-created')
      .exec()
    res.json(posts)
  } catch (err) {
    return res.status(400).json({
      error: ErrorHandler.getErrorMessage(err),
    })
  }
}

const listByUser = async (req, res) => {
  try {
    const posts = await Post.find({ postedBy: req.profile._id })
      .populate('comments.postedBy', '_id name')
      .populate('postedBy', '_id name')
      .sort('-created')
      .exec()
    res.json(posts)
  } catch (err) {
    return res.status(400).json({
      error: ErrorHandler.getErrorMessage(err),
    })
  }
}

const create = async (req, res) => {
  const form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not be uploaded',
      })
    }
    const post = new Post(fields)
    post.postedBy = req.profile
    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path)
      post.photo.contentType = files.photo.type
    }
    try {
      const result = await post.save()
      res.json(result)
    } catch (err) {
      return res.status(400).json({
        error: ErrorHandler.getErrorMessage(err),
      })
    }
  })
}

const photo = (req, res) => {
  res.set('Content-Type', req.post.photo.contentType)
  return res.send(req.post.photo.data)
}

const postByID = async (req, res, next, id) => {
  try {
    const post = await Post.findById(id).populate('postedBy', '_id name').exec()
    if (!post) {
      return res.status(400).json({
        error: 'Post not found',
      })
    }
    req.post = post
    next()
  } catch (err) {
    return res.status(400).json({
      error: 'Could not retrieve use post',
    })
  }
}

const isPoster = (req, res, next) => {
  const isPoster = req.post && req.auth && req.post.postedBy == req.auth._id
  if (!isPoster) {
    return res.status(403).json({
      error: 'User is not authorized',
    })
  }
  next()
}

const remove = async (req, res) => {
  try {
    const post = req.post
    const removePost = await post.remove()
    res.json(removePost)
  } catch (err) {
    return res.status(400).json({
      error: ErrorHandler.getErrorMessage(err),
    })
  }
}

const like = async (req, res) => {
  try {
    const result = await Post.findByIdAndUpdate(
      req.body.postId,
      { $push: { likes: req.body.userId } },
      { new: true }
    )
    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: ErrorHandler.getErrorMessage(err),
    })
  }
}

const unlike = async (req, res) => {
  try {
    const result = await Post.findByIdAndUpdate(
      req.body.postId,
      { $pull: { likes: req.body.userId } },
      { new: true }
    )
    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: ErrorHandler.getErrorMessage(err),
    })
  }
}

const comment = async (req, res) => {
  const comment = req.body.comment
  comment.postedBy = req.body.userId
  try {
    const result = await Post.findByIdAndUpdate(
      req.body.postId,
      { $push: { comments: comment } },
      { new: true }
    )
      .populate('comments.postedBy', '_id name')
      .populate('postedBy', '_id name')
      .exec()
    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: ErrorHandler.getErrorMessage(err),
    })
  }
}

const uncomment = async (req, res) => {
  const comment = req.body.comment
  try {
    const result = await Post.findByIdAndUpdate(
      req.body.postId,
      { $pull: { comments: { _id: comment._id } } },
      { new: true }
    )
      .populate('comments.postedBy', '_id name')
      .populate('postedBy', '_id name')
      .exec()
    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: ErrorHandler.getErrorMessage(err),
    })
  }
}

export default {
  listNewsFeed,
  listByUser,
  create,
  photo,
  postByID,
  isPoster,
  remove,
  like,
  unlike,
  comment,
  uncomment,
}
