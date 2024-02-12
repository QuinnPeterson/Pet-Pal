import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* COMMENTS */
export const commentPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { userId, text } = req.body;
    const post = await Post.findById(postId);

    const user = await User.findById(userId);

    if (text) {
      const isDuplicate = post.comments.some(
        (comment) => comment.text === text
      );

      if (isDuplicate) return;

      post.comments.push({
        userId: user,
        text,
        userPicturePath: user.userPicturePath,
      });

      const updatedPost = await post.save();

      res.json({ post: updatedPost, user });
    } else {
      res.status(400).json({ error: "Comment text is required" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getComments = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const populatedComments = await Promise.all(
      post.comments.map(async (comment) => {
        const user = await User.findById(comment.userId);
        return {
          _id: comment._id,
          user: {
            userId: user._id,
            name: user.firstName + " " + user.lastName,
            userPicturePath: user.picturePath,
          },
          text: comment.text,
        };
      })
    );

    res.status(200).json(populatedComments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
