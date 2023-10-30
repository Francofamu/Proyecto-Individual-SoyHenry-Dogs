const { Router } = require('express');
const { MY_API_KEY } = process.env;
// Handlers
const getAllDogsHandler = require('../handlers/getAllDogsHandler');
const getDogByIdHandler = require('../handlers/getDogByIdHandler');
const getAllTemperamentsHandler = require('../handlers/getAllTemperaments');
const getDogByNameHandler = require('../handlers/getDogByNameHandler');
const createDogHandler = require('../handlers/createDogHandler');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
let urLink = `https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`


/* routes */
router.get("/dogs/name",getDogByNameHandler);
router.get("/dogs/:idRaza",getDogByIdHandler);
router.get("/dogs", getAllDogsHandler);
router.post("/dogs", createDogHandler);
router.get("/temperaments", getAllTemperamentsHandler);


module.exports = router;
