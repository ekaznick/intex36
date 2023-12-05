const express = require("express"); 
let app = express(); 
let path = require("path"); 
const port = process.env.PORT || 3000; 
app.set("view engine", "ejs"); 

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));  

//index route
app.get("/", (req, res) => {
    res.render("index", {});
}); 

//knex route here 
const knex = require("knex") ({
    client: "pg", 
    connection: { 
        host: process.env.RDS_HOSTNAME || "localhost", 
        user: process.env.RDS_USERNAME || "postgres", 
        password: process.env.RDS_PASSWORD || "Sandonanarin0@", 
        database: process.env.RDS_DB_NAME || "intex",
        port: process.env.RDS_PORT || 5432,
        ssl: process.env.DB_SSL ? {rejectUnauthorized: false} : false 
    }
});

//knex route to database view here
app.get("/admin", (req, res) => {
    //SQL query stuff here 
}); 

//get route for viewing the data 
app.get("/admin", (req, res) => {
    //Database stuff 
})

//post route for deleting data

//get route for finding data
app.get("/findData", (req, res) => {
    res.render("findData", {});
});

//get route for editing data 

//post route for editData

//get route for survey
app.get("/survey", (req, res) => {
    res.render("survey", {});
});

//get route for login
app.get("/login", (req, res) => {
    res.render("login", {});
});

//post route for login

//get route for signup 
app.get("/sign-up", (req, res) => {
    res.render("sign-up", {});
});

//post route for signup

app.listen(port, () => console.log("Website started"));