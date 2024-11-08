export const validate = (schema) => {
  //it returns a validating middleware
  return async (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        error: error.errors,
        success: false,
        message: "Validation Failed",
      });
    }
  };
};
