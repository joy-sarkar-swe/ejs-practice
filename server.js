// dependencies
const express = require("express");

// initializing app
const app = express();

app.set("view engine", "ejs");

// index route rendering by ejs  
app.get("/", (req, res) => {


    const array = [
        {
            color: "red",
            value: "#f00",
            status: true
        },
        {
            color: "green",
            value: "#0f0",
            status: false,
        },
        {
            color: "blue",
            value: "#00f",
            status: true
        },
        {
            color: "cyan",
            value: "#0ff",
            status: false,
        },
        {
            color: "magenta",
            value: "#f0f",
            status: true
        },
        {
            color: "yellow",
            value: "#ff0",
            status: false,
        },
        {
            color: "black",
            value: "#000",
            status: false,
        }
    ]

    res.locals.myName = "I am ejs.....!"
    res.render("index.ejs", { title: "Here is ejs.", array });
    // res.send("Hello, I am from app.")
});

// home route rendering by ejs
app.get("/home", (req, res) => {
    const array = [
        {
            color: "red",
            value: "#f00",
            status: true
        },
        {
            color: "green",
            value: "#0f0",
            status: false,
        },
        {
            color: "blue",
            value: "#00f",
            status: true
        },
        {
            color: "cyan",
            value: "#0ff",
            status: false,
        },
        {
            color: "magenta",
            value: "#f0f",
            status: true
        },
        {
            color: "yellow",
            value: "#ff0",
            status: false,
        },
        {
            color: "black",
            value: "#000",
            status: false,
        }
    ]
    res.render("home/home.ejs", { array });
    // res.send("Hello, I am from app.")
});

// listening app
app.listen(3000, () => {
   console.log("server running at 3000 port."); 
});