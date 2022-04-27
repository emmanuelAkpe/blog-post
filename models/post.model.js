import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      String,
      required: [true, "please enter a title"],
    },
    content: {
      type: String,
      required: [true, "please enter a content"],
    },
    publishedDate: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
