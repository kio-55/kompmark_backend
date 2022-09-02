import Comment from "../models/Comment.js";

class CommentService {
  async getAll() {
    const comments = await Comment.find();
    return comments;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id underfinded");
    }
    const comment = await Comment.findById(id);
    if (!comment) {
      throw new Error("Can't find comment");
    }
    return comment;
  }

  async create(comment) {
    const createdComment = new Comment({
      title: comment.title,
      text: comment.text,
      author: comment.author,
      stars: comment.stars,
    });

    const savedComment = await createdComment.save();
    
    return savedComment;
  }

  async delete(id) {
    if (!id) {
        throw new Error("Id underfinded");
    }
    const comment = await Comment.findByIdAndDelete(id);
    return comment;
  }
}

export default new CommentService();
