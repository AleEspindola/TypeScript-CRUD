import express from "express";
import { create } from "express-handlebars";
import morgan from "morgan";
import path from "path";

import indexRoutes from "./routes";
import tasksRoutes from "./routes/tasks";

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
      create({
        layoutsDir: path.join(this.app.get("views"), "layouts"),
        partialsDir: path.join(this.app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
      }).engine
    );
    this.app.set("view engine", ".hbs");
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/tasks", tasksRoutes);
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("server running on port", this.app.get("port"));
    });
  }
}

export default Application;
