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
