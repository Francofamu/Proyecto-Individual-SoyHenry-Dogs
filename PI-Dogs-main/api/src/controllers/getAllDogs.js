const { Dog, Temperament } = require('../db')
const { YOUR_API_KEY } = process.env;
const axios = require('axios');

const getAllDogs = async() => {
    const apiData = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)

    const data = await apiData.data.map(el => {
        let temperamentArray = [];
        if (el.temperament) {//pregunto que exista el temperamento y lo devuelvo en un arreglo
            temperamentArray = el.temperament.split(", "); // ["Stubborn", "Curious", "Playful", "Adventurous", "Active", "Fun-loving"]
        }
        
        let heightArray = [];
        if (el.height.metric) {
            heightArray = el.height.metric.split(" - "); // ["23" - "29"]
        }
    
        let weightArray = [];
        if (el.weight.metric) {
            weightArray = el.weight.metric.split(" - ");
        }
            return {
                id: el.id,
                name: el.name,
                height: heightArray,
                weight: weightArray,
                temperaments: temperamentArray,
                life_span: el.life_span,
                image: el.image.url,
            }
        })
    return data;
    }

    module.exports = {
        getAllDogs
    }