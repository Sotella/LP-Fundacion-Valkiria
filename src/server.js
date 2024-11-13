const express = require('express');
const path = require('path');
//comentario para que tome el cambio del archivo

const app = express();
const PORT = process.env.PORT || 3000;

// Configura Express para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta para la página principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
