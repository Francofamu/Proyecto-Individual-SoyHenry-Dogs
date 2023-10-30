const getAllBreeds = require("../controllers/getAllBreeds");
const getDogByName = require("../controllers/getDogsByName");

const getAllDogsHandler = async(req, res) =>{
  try {
    const dogs = await getAllBreeds()

    res.status(200).json(dogs);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.menssage });
  }
};


module.exports = getAllDogsHandler;