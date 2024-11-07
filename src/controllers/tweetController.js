export const getTweets = (req, res) => {
  return res.json({
    message: "Hello from Tweet Controller",
  });
};

export const getTweetById = (req, res) => {
  return res.json({
    message: "Tweet Router ID from Controller",
    id: req.params.id,
  });
};

export const createTweet = (req, res) => {
  return res.json({
    message: "Created Tweet from Controller",
    body: req.body,
  });
};
