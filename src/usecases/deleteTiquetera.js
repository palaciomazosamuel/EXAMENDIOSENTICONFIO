const repository = require('../adapters/tiquetera.repository');

const deleteTiquetera = async (id) => {

   const tiquetera = await repository.findById(id);
   if(!tiquetera){
      throw new Error ('Tiquetera no encontrada');
   }

   const updatedData = {

      totalTransacciones: (tiquetera.totalTransacciones || 0 ) + 1
      
   };
   await repository.update(id, updatedData);

   return await repository.delete(id)

}

module.exports = { deleteTiquetera }
