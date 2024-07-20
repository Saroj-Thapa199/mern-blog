import Comment from "../models/comment.model.js"
import { errorHandler } from "../utils/error.js"

export const createComment = async (req, res, next) => {
    try {
        const { content, postId, userId } = req.body

        if (userId !== req.user.id) {
            return next(errorHandler(403, 'You are not allowed to create this comment'))
        }

        if (!content || content.trim().length === 0) {
            return next(errorHandler(400, 'Comment cannot be empty.'));
        }

        const newComment = new Comment({
            content,
            postId,
            userId,
        })
        await newComment.save()

        res.status(200).json(newComment)
    } catch (error) {
        console.log(error)
        next(error)
    }
} 