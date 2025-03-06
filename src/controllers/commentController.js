export const getComments = (req, res) => {
  const version = req.baseUrl.includes("/v2") ? "v2" : "v1";
  return res.json({
    message: `You have hit at /api/${version}/comments`,
  });
};

export const getCommentsById = (req, res) => {
  const version = req.baseUrl.includes("/v2") ? "v2" : "v1";
  return res.json({
    message: `You have hit at /api/${version}/comments/${req.params.id}`,
    id: req.params.id,
  });
};
