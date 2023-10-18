import path, { dirname } from "path";
import { fileURLToPath } from "url";
import logger from "./middleware/logger.js";

import dotenv from "dotenv";
import express from "express";
import catRoutes from "./routes/cat.js";

dotenv.config();
const PORT = process.env.PORT | 3005

// absolute path 
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// initialize express
const app = express();

// logger
app.use(logger)

// set template engin
app.set("view engine", "ejs");
app.set("views", path.join(PATH, "views"));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(PATH, 'public')));

// router
app.use(catRoutes)


// 404 route
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page not fond', message: `Page doesn't exist` })
});

// running server

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`)

})


