import PostService from "../services/PostService.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async getLast(req, res) {
    try {
      const posts = await PostService.getLast(req.params.start);
      res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.json(post);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async getAllCount(req, res) {
    try {
      const collectionSize = await PostService.getAllCount();
      res.status(200).json(collectionSize);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async post(req, res) {
    try {
      const createdPost = await PostService.create(req.body);
      res.json(createdPost);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async put(req, res) {
    try {
      
      const updatedPost = await PostService.update(req.body);
      res.status(200).json(updatedPost);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async delete(req, res) {
    try {
        const post = await PostService.delete(req.params.id);
        res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }
}

export default new PostController();
