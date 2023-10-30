const { Dog, Temperament } = require('../db')
const { YOUR_API_KEY } = process.env;
const axios = require('axios');


const getAllBreeds = async () => {
    const apiData = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)

    return await apiData.data.map(el => { return {name:el.name} })
}

module.exports = getAllBreeds