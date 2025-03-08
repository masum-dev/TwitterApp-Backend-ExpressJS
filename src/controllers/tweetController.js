import { createTweet as createTweetService } from "../services/tweetService.js";

export const getTweets = (req, res) => {
  const version = req.baseUrl.includes("/v2") ? "v2" : "v1";

  return res.json({
    message: `You have hit at /api/${version}/tweets`,
  });
};

export const getTweetsById = (req, res) => {
  const version = req.baseUrl.includes("/v2") ? "v2" : "v1";

  return res.json({
    message: `You have hit at /api/${version}/tweets/${req.params.id}`,
    id: req.params.id,
  });
};

export const createTweet = async (req, res) => {
  try {
    const response = await createTweetService({
      body: req.body.body,
    });

    return res.status(201).json({
      success: true,
      data: response,
      message: "Tweet created successfully",
    });
  } catch (error) {
    console.log(error);

    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
