import Post from "../models/Post.js";

class PostService {
  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getLast(start) {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(start - 1)
      .limit(5);
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id underfinded");
    }
    const post = await Post.findById(id);
    if (!post) {
      throw new Error("Can't find post");
    }
    return post;
  }

  async getAllCount() {
    const collectionSize = await Post.count();
    return collectionSize;
  }

  async create(post) {
    const createdPost = new Post({
      title: post.title,
      subtitle: post.subtitle,
      text: post.text,
      imageUrl: post.imageUrl,
    });

    const savedPost = await createdPost.save();
    
    return savedPost;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("Id underfinded");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
        throw new Error("Id underfinded");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
