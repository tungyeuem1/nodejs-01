const createUser = (req, res) => {
  console.log(("check req:", req.body));
  const { name, email, password } = req.body;

  return res.status(200).json({ name, email, password });
};
module.exports = {
  createUser,
};
