import express from "express";
import * as exphbs from "express-handlebars";
import morgan from "morgan";
import path from "path";

class Application {
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", 3000);
    this.app.set("views", path.join(__dirname, "views"));
    this.app.engine(
      ".hbs",
      exphbs({
        /* Ver por qué acá no puedo usar el modulo ese */
      })
    );
  }

  middlewares() {
    this.app.use(morgan("dev"));
  }

  routes() {}

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("server running on port", this.app.get("port"));
    });
  }
}

export default Application;
