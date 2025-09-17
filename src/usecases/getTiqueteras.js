const repository = require('../adapters/tiquetera.repository');

const getTiqueteras = async () => {

   return await repository.findAll();

};

const getTiqueterasById = async (id) => {
   return await repository.findById(id);
}

module.exports = {getTiqueteras, getTiqueterasById}