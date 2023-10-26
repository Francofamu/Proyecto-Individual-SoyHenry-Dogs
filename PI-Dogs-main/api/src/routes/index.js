const { Router } = require('express');
const dogRoute = require('../routes/dogRoute')
const { MY_API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
let urLink = `https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`


/* routes */
router.use("/dogs", dogRoute);
// router.get("/dogs/:id", getDogsById);
// router.post("/dogs/name", getDogsByName);
// router.post("/dogs", createDog);
// router.get("/temperaments", getAllTemperaments);


module.exports = router;
