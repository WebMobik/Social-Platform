import errorHandler from '../helpers/dbErrorHandler'
import formidable from 'formidable'
import Post from '../models/post.model'

const listNewsFeed = async (req, res) => {
    const following = req.profile.following
    following.push(req.profile._id)
    try {
        const posts = await Post.find({postedBy: {$in: req.profile.following}})
                .populate('comments.postedBy', '_id name')
                .populate('postedBy', '_id name')
                .sort('-created')
                .exec()
        res.json(posts)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const listByUser = async (req, res) => {
    try {
        const posts = await Post.find({postedBy: req.profile._id})
                .populate('comments.postedBy', '_id name')
                .populate('postedBy', '_id name')
                .sort('-created')
                .exec()
        res.json(posts)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const create = async (req, res, next) => {
    const form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image coult not be uploaded"
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
                error: errorHandler.getErrorMessage(err)
            })
        }
    })
}

const photo = (req, res, next) => {
    res.set("Content-Type", req.post.photo.contentType)
    return res.send(req.post.photo.data)
}

const postByID = async (req, res, next, id) => {
    try {
        const post = await Post.findById(id)
                .populate('postedBy', '_id name')
                .exec()
        if (!post) {
            return res.status(400).json({
                error: "Post not found"
            })
        }
        req.post = post
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve use post"
        })
    }
}

export default {
    listNewsFeed,
    listByUser,
    create,
    photo
}
