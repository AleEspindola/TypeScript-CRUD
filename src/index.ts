import App from "./app";
import database from "./db";

//Initializing the server
database();
const app = new App();

app.start();
