const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/users.routes")
const productRoutes = require("./routes/products.routes");
const orderRoutes = require("./routes/orders.routes")
const initModels = require("./models/initModels");
const db = require("./utils/database");
const apiRoutes = require("./routes/index")


initModels();

db.sync();

const app = express(); 

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Servidor trabajando OK");
});

// agrupar todas las rutas en un archivo
apiRoutes(app);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Organizar los archivos para empezar con nuestros eps

// TODO les voy a dar las especificacones al estilo de una prueba tecnica

// instalar dbeaver??
