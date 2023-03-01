import Post from "../models/post.js";
import User from "../models/User.js";

export const getFeedPosts = async (_, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (!isLiked) post.likes.set(userId, true);
    else post.likes.delete(userId);

    const updatePost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatePost);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      description,
      userPicturePath: user.picturePath,
      location: user.location,
      likes: [],
      comments: [],
      picturePath,
    });

    await newPost.save();

    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(201).json(posts);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

export const addComment = async (req, res) => {
  const { id } = req.params;
  const { idUser, comment } = req.body;

  const post = await Post.findById(id);
  const user = await User.findById(idUser);
  const createdAt = new Date();

  post.comments.push({ user, comment, createdAt });

  await post.save();

  res.status(200).json(post);
  try {
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await Post.findByIdAndDelete(id);

    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id, isPost } = req.params;
    const { description } = req.body;

    await Post.findByIdAndUpdate(
      id,
      { description, isEdited: true, lastUpdated: new Date() },
      { new: true }
    );

    const posts =
      isPost === "false"
        ? await Post.find().sort({ createdAt: -1 })
        : await Post.findById(id);

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
