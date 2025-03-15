const express = require('express');
const app = express();

// ---- iddleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json());

// ---- Endpoints
const routes = require('./routes/routes');
app.use('/api', routes);

// ---- El puerto puede estar definido en el env o por defecto usamos el 4000
const port = process.env.PORT || 4000; 

app.listen(port, () => {
    console.log(`Server listening to port: ${port}`);
});