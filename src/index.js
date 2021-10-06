/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "3000";


/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "../public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/user", (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0", major: "Computer Science", semester: "5", gpa: "2.3"} });
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
