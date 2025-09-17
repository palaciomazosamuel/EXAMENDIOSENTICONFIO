const express = require('express');
const mongoose = require('mongoose');
const CompraModel = require('./infrastructure/CompraModel');
const CompraRepository = require('./repositories/CompraRepository');
const CompraUseCase = require('./usecases/CompraUseCase');
const CompraController = require('./controllers/CompraController');
const compraRoutes = require('./routes/compraRoutes');
// Usuarios
const UsuarioModel = require('./infrastructure/UsuarioModel');
const UsuarioRepository = require('./repositories/UsuarioRepository');
const UsuarioUseCase = require('./usecases/UsuarioUseCase');
const UsuarioController = require('./controllers/UsuarioController');
const usuarioRoutes = require('./routes/usuarioRoutes');
// Clientes
const ClienteModel = require('./infrastructure/ClienteModel');
const ClienteRepository = require('./repositories/ClienteRepository');
const ClienteUseCase = require('./usecases/ClienteUseCase');
const ClienteController = require('./controllers/ClienteController');
const clienteRoutes = require('./routes/clienteRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión:', err));

const compraRepository = new CompraRepository(CompraModel);
const compraUseCase = new CompraUseCase(compraRepository);
const compraController = new CompraController(compraUseCase);

const usuarioRepository = new UsuarioRepository(UsuarioModel);
const usuarioUseCase = new UsuarioUseCase(usuarioRepository);
const usuarioController = new UsuarioController(usuarioUseCase);

const clienteRepository = new ClienteRepository(ClienteModel);
const clienteUseCase = new ClienteUseCase(clienteRepository);
const clienteController = new ClienteController(clienteUseCase);

app.use('/compras', compraRoutes(compraController));
app.use('/usuarios', usuarioRoutes(usuarioController));
app.use('/clientes', clienteRoutes(clienteController));

module.exports = app;
