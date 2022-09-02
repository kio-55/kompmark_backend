import CommentService from "../services/CommentService.js";

class CommentsController {
  async getAll(req, res) {
    try {
      const comments = await CommentService.getAll();
      res.status(200).json(comments);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async getOne(req, res) {
    try {
      const comment = await CommentService.getOne(req.params.id);
      res.json(comment);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async post(req, res) {
    try {
      const createdComment = await CommentService.create(req.body);
      res.json(createdComment);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async delete(req, res) {
    try {
        const comment = await CommentService.delete(req.params.id);
        res.status(200).json(comment);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }
}

export default new CommentsController();
