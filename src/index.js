require('dotenv').config();

const mongoose = require('mongoose');
const app = require ('./frameworks/express.server');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI,{

   useNewUrlParser: true,
   useUnifiedTopology: true

})

.then(() =>{

   console.log('conectado a mongodb');
   app.listen(PORT, () => {
      console.log(`servidor ${PORT}`);
   });
})

.catch(err => console.error('Error al conectar', err))
