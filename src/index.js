const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const indexRoutes = require("./routes/index.routes");
require("dotenv").config();
const path = require('node:path')

//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NodeJs MongoDb Api",
      version:"1.0.0"
    },
    servers: [
    {
        url: "https://nodejs-mongodb-users-production.up.railway.app/"
    }
  ]
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
}
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//middlewares
app.use(indexRoutes);
app.use("/api", userRoutes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDb Atlas"))
  .catch((error) => console.error(error));

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto", PORT);
});
