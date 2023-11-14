import express from 'express';

const app = express();


// Definir puerto
const port = process.env.PORT = 4000;


// Habilitar PUG
app.set('view engine', 'pug');


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})