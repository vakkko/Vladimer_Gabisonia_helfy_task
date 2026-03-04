function taskValidate(req, res, next) {
  const { title } = req.body;
  const { description } = req.body;

  const errorMessage = (field, type) => {
    return `${field} is required and must be a ${type}`;
  };

  if (!title || typeof title !== "string") {
    return res.status(400).json({
      message: errorMessage("Title", "string"),
    });
  }

  if (!description || typeof description !== "string") {
    return res.status(404).json({
      message: errorMessage("Description", "string"),
    });
  }

  next();
}

export default taskValidate;
