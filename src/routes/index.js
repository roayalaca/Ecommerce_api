const userRoutes = require("./users.routes"); 
const orderRoutes = require("./orders.routes");
const productRoutes = require("./products.routes")
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(productRoutes);
  app.use(orderRoutes);
  app.use(userRoutes);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};



module.exports = apiRoutes;
