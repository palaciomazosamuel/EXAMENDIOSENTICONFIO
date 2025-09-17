const express = require('express')
const { createTiquetera } = require('../usecases/createTiquetera')


const app =  express();
app.use(express.json());

app.post ('/tiqueteras', async (req, res) => {

  try{
    const tiquetera = await createTiquetera(req.body)

  }

}



)
