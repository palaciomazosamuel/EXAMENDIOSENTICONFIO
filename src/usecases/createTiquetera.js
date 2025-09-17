const repository = require('../adapters/tiquetera.repository')

const createTiquetera = async (data) => {
   const newTiqueteraData = {
      ...data,
      totalTransacciones: 1 
   };
   return await repository.create(newTiqueteraData)

}
module.exports = {createTiquetera}