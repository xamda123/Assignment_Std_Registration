import Class from "../model/Class.js";

export const createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClasses = async (req, res) => {
  const classes = await Class.find();
  res.json(classes);
};
