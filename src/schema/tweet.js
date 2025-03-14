import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true,
    maxlength: 280,
  },
});

// Tweet Collection
const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
