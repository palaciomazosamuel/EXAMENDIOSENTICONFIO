const mongoose = require('mongoose');
const Tiquetera = require('../domain/tiquetera');
const { schema } = mongoose;

const TiqueteraSchema = new Schema({

  nrotiquetera:{type: String, required: true, unique: true},
  cliente: {type:String, required: true},
  saldo: {type:Number, required: true},
  totalTransacciones: {type: Number, default: 0}


})

const TiqueteraModel = mongoose.model('Tiquetera', TiqueteraSchema);

class TiqueteraRepository{

  async create(data){
    const newTiquetera = new TiqueteraModel(data);
    return await newTiquetera.save();
  }

  async findAll(){
    return await TiqueteraModel.find();
  }

  async findById(id){

    return await TiqueteraModel.findById(id);

  }


  async update(id, data){
    return await TiqueteraModel.findByIdAndUpdate(id, data, {new: true});

  }

  async delete(id){

    return await TiqueteraModel.findByIdAndDelete(id);

  }


} 

module.exports = TiqueteraRepository()
