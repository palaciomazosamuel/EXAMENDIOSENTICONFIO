const express = require('express');
const { createTiquetera } = require('../usecases/createTiquetera');
const { getTiqueteras, getTiqueteraById } = require('../usecases/getTiqueteras');
const { updateTiquetera } = require('../usecases/updateTiquetera');
const { deleteTiquetera } = require('../usecases/deleteTiquetera');

const app = express();
app.use(express.json());

app.get('/tiqueteras', async (req, res) => {
try {
const tiqueteras = await getTiqueteras();
res.status(200).json(tiqueteras);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

app.get('/tiqueteras/:id', async (req, res) => {
try {
const tiquetera = await getTiqueteraById(req.params.id);
if (!tiquetera) {
return res.status(404).json({ message: 'Tiquetera no encontrada.' });
}
res.status(200).json(tiquetera);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

// Ruta POST para crear un cliente
app.post('/tiqueteras', async (req, res) => {
try {
const tiquetera = await createTiquetera(req.body);
res.status(201).json(tiquetera);
} catch (error) {
res.status(400).json({ message: error.message });
}
});

app.put('/tiqueteras/:id', async (req, res) => {
try {
const tiquetera = await updateTiquetera(req.params.id, req.body);
res.status(200).json(tiquetera);
} catch (error) {
res.status(404).json({ message: error.message });
}
});

app.delete('/tiqueteras/:id', async (req, res) => {
try {
const result = await deleteTiquetera(req.params.id);
if (!result) {
return res.status(404).json({ message: 'Tiquetera no encontrada.' });
}
res.status(200).json({ message: 'Tiquetera eliminada exitosamente.' });
} catch (error) {
res.status(404).json({ message: error.message });
}
});

module.exports = app;