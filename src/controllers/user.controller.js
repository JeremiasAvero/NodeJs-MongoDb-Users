const userSchema = require("../models/user");

const getUsers = (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getUser = (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const createUser = (req, res) => {
  //creamos un usuario con el schema, el body del request y lo guardo en una constante
  const user = userSchema(req.body);

  //guardamos el usuario
  user
    .save()
    .then((data) => {
      //respondemos con el usuario
      res.json(data);
    })
    .catch((error) => {
      //en caso de error lo mandamosn con un json
      res.json({
        message: error,
      });
    });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };
