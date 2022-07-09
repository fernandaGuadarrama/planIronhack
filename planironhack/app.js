// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "planironhack";

app.locals.appTitle = `${capitalized(projectName)} created by Moy, Enrique and Fernanda`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const dospers = require("./views/auth/cuantasPersonas/home-2-personas.hbs");
app.use("/", dospers);

const trespers = require("./views/auth/cuantasPersonas/home-3-personas.hbs");
app.use("/", trespers);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
