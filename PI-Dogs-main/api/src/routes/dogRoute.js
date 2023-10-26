const { Router } = require('express');
const dogRouter = Router();
const { getAllDogs } = require('../controllers/getAllDogs');


dogRouter.get("/", async(req,res) =>{
    //esta funcion también podra recibir un nombre por medio de query
    // const name = req.query.name;
    const { name } = req.query;
    const allDogs = await getAllDogs();
    if (name) {
        const dog = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));//si el perro existe guardame sus parametros aca.
        dog.length ? res.status(200).send(dog) : res.status(404).send("Dog not found"); 
    } else {
        res.status(200).send(allDogs);
    }
})

module.exports = dogRouter;
