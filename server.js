const express = require('express');
const cors = require('cors');
const insertData = require('./js/database');
//const insertData = require('js/database/insertData'); // Asegúrate de que la ruta sea la correcta

const app = express();

app.use(cors()); // Habilitar CORS
app.use(express.json()); // Para interpretar JSON

app.post('/guardar', async (req, res) => {
  const { usuario, correo, contrasena } = req.body;
  try {
    await insertData(usuario, correo, contrasena);
    res.status(200).send('Datos insertados exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al insertar datos');
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
