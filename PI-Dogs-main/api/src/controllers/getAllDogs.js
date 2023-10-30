const { Dog, Temperament } = require('../db')
const { YOUR_API_KEY } = process.env;
const axios = require('axios');
const infoClener = require('../utils');


const getAllDogs = async() => {
    const apiData = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)).data

    return await infoClener(apiData) // llama a la funcion que modulariza la info que traigo de la api en la carpeta utils
}

    module.exports = {
        getAllDogs
    }