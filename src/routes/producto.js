const express = require("express");
const productoSchema = require("../models/productos");

const router = express.Router();

// create producto
router.post("/productos", (req, res) => {
  const producto = productoSchema(req.body);
  producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all productos
router.get("/productos", (req, res) => {
  productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a producto
router.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a producto
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  productoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a producto
router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre_producto, precio_unitario, cantidad_producto, descripcion, id_categoria_producto, foto } = req.body;
  productoSchema
    .updateOne({ _id: id }, { $set: { nombre_producto, precio_unitario, cantidad_producto, descripcion, id_categoria_producto, foto } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;