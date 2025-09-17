const mongoose = require('mongoose');
/**
 * Esquema Mongoose para la entidad Cliente.
 * @typedef {Object} Cliente
 * @property {string} documento - Documento de identidad del cliente.
 * @property {string} nombre - Nombre del cliente.
 * @property {string} email - Correo electrónico del cliente.
 * @property {string} whatsapp - Número de WhatsApp del cliente.
 */
const ClienteSchema = new mongoose.Schema({
  documento: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: { type: String, required: true }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
