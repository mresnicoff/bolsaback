const { Router } = require("express");
const postDatos = require("../controllers/postDatos.js");
const getDatos = require("../controllers/getDatos.js");
const handleUsuarios = require("../controllers/handleUsuarios.js");
const postPermisos = require("../controllers/postPermisos.js");
const getPermisos = require("../controllers/getPermisos.js");
const getUsuario = require("../controllers/getUsuario.js");
const asignarPermisos = require("../controllers/asignarPermisos.js");
const deleteDatos = require("../controllers/deletetDatos.js");
const crearPost = require("../controllers/crearPost.js");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.post("/datos", postDatos);
router.get("/getdatos", getDatos);
router.post("/usuarios", handleUsuarios);
router.get("/usuarios", handleUsuarios);
router.post("/permisos", postPermisos);
router.get("/permisos", getPermisos);
router.get("/esteusuario", getUsuario);
router.post("/asignarpermisos", asignarPermisos);
router.post("/posts", crearPost);
router.delete("/datos", deleteDatos);

// Ejemplo: router.use('/auth', authRouter);

module.exports = router;