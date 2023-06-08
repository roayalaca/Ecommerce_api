const userRoutes = require("./users.routes"); 
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};

module.exports = apiRoutes;
