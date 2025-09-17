const repository = require ('../adapters/tiquetera.repository')

const updateTiquetera = async (id,data) => {

   const tiquetera = await repository.findById(id);
   if(!tiquetera){
      throw new Error ('tiquetera no encontrada.');
   }

   const updatedData = {
      ...data,
      totalTransacciones: (tiquetera.totalTransacciones || 0 ) + 1
   };
   return await repository.update(id, updatedData);

}

module.exports = { updateTiquetera };