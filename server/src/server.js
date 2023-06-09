import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import mongoose from "mongoose";
import createHttpError from "http-errors";

// ERRORHANDLERS
import { badRequestHandler, genericErrorHandler, notFoundHandler } from "./errorHandlers.js";

const server = express();

const port = process.env.PORT;

const { FE_DEV_URL, FE_PROD_URL } = process.env;
const whitelist = [FE_DEV_URL, FE_PROD_URL];

const mongooseURL = process.env.MONGO_URL;

const corsOpts = {
  origin: (origin, corsNext) => {
    console.log("CURRENT ORIGIN: ", origin);
    if (!origin || whitelist.indexOf(origin) !== -1) {
      corsNext(null, true);
    } else {
      corsNext(createHttpError(400, `Origin ${origin} is not in the whitelist!`));
    }
  },
};

// ******************************* MIDDLEWARES ****************************************

server.use(cors(corsOpts));
server.use(express.json());

// ******************************** ENDPOINTS *****************************************
server.use("/table", tableRoutes);
server.use("/populate", insertRecordsRoute);

// ***************************** ERROR HANDLERS ***************************************
server.use(badRequestHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

mongoose.connect(mongooseURL);
mongoose.connection.on("connected", () => {
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`Server is running on port ${port}`);
  });
});
