import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";

const configureExpressApp = (app) => {
  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  // Parse application/json
  app.use(bodyParser.json());
  //compression of data
  app.use(compression(9));
  //CORS
  app.use(cors());
};

export default configureExpressApp;
