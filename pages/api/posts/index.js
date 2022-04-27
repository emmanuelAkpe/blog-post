import dbConnect from "../../../dbConnect";
import postModel from "../../../models/post.model";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const posts = await Post.find();
    res.status(200).json({ msg: "GET" });
  } else if (req.method === "POST") {
    const post = await Post.create(req.body);
    res.status(201).json({ msg: "POST" });
  } else {
    res
      .status(405)
      .json({ error: "METHOD not allowed. ONly GET aand POST is allowed" });
  }
}
