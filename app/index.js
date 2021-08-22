const express = require("express");
const mongoose = require("mongoose");

const app = express();
// adding some line for testing
const DB_URL = process.env.MONGODB_URL || "localhost";
const MONGODB_PORT = 27017;

const PORT = 3000;
const USERNAME = "Shehab El-Deen Alalkamy ";

app.get("/", (req, res) => {
  res.send(
    `<html>
     <head>
       <title>Hello _VOIS App</title>
       <style>
         body {
           background-color: #2D2D2D;
           margin-top: 30px;
           text-align: center;
         }
         
         h1 {
           color: #C26356;
           font-size: 30px;
           font-family: Menlo, Monaco, fixed-width;
         }
         
         p {
           color: white;
           font-family: "Source Code Pro", Menlo, Monaco, fixed-width;
         }

         a:link {
          color: green;
          background-color: transparent;
          text-decoration: none;
         }
         
         a:visited {
          color: pink;
          background-color: transparent;
          text-decoration: none;
         }
        
         a:hover {
          color: red;
          background-color: transparent;
          text-decoration: underline;
         }
         
         a:active {
          color: yellow;
          background-color: transparent;
          text-decoration: underline;
         }
       </style>
     </head>
     <body>
       <h1>Welcome User!</h1>
       <p>You are <strong>ONE</strong> step away from reaching hello-vois. Click the link below mate</p>
       <br>
       <a href="/hello-vois">Take me</a> 
     </body>
     </html>`
  );
});

app.get("/hello-vois", (req, res) => {
  res.send(
    `<html>
     <head>
       <title>Hello _VOIS App</title>
       <style>
         body {
           background-color: #2D2D2D;
           margin-top: 30px;
           text-align: center;
         }
         
         h1 {
           color: #C26356;
           font-size: 30px;
           font-family: Menlo, Monaco, fixed-width;
         }
         
         p {
           color: white;
           font-family: "Source Code Pro", Menlo, Monaco, fixed-width;
         }

         a:link {
          color: green;
          background-color: transparent;
          text-decoration: none;
         }
         
         a:visited {
          color: pink;
          background-color: transparent;
          text-decoration: none;
         }
        
         a:hover {
          color: red;
          background-color: transparent;
          text-decoration: underline;
         }
         
         a:active {
          color: yellow;
          background-color: transparent;
          text-decoration: underline;
         }
       </style>
     </head>
     <body>
       <h1>Hello _VOIS from ${USERNAME}!</h1>
       <p>hello-vois is a simple application used to implement CI/CD pipeline.</p>
       <br>
       <a href="/hello-vois/db">Test Database Connection</a> 
     </body>
     </html>`
  );
});

app.get("/hello-vois/db", async (req, res) => {
  try {
    mongoose.connect(
      `mongodb://${DB_URL}:${MONGODB_PORT}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log(`Database Connection Failed: ${err}`);
          return res.send(`<html>
          <head>
            <title>HTML and CSS "Hello World"</title>
            <style>
              body {
                background-color: #2D2D2D;
                margin-top: 30px;
                text-align: center;
              }
              
              h1 {
                color: red;
                font-size: 30px;
                font-family: Menlo, Monaco, fixed-width;
              }
            </style>
          </head>
          <body>
            <h1>Database not Connected!!</h1>
          </body>
          </html>`);
        } else {
          console.log(`Connected to database at http://${DB_URL}:${MONGODB_PORT}.`);
          return res.send(`<html>
          <head>
            <title>Hello _VOIS App</title>
            <style>
              body {
                background-color: #2D2D2D;
                margin-top: 30px;
                text-align: center;
              }
              
              h1 {
                color: green;
                font-size: 30px;
                font-family: Menlo, Monaco, fixed-width;
              }

              a:link {
                color: green;
                background-color: transparent;
                text-decoration: none;
              }
               
              a:visited {
                color: pink;
                background-color: transparent;
                text-decoration: none;
              }
              
              a:hover {
                color: red;
                background-color: transparent;
                text-decoration: underline;
              }
               
              a:active {
                color: yellow;
                background-color: transparent;
                text-decoration: underline;
              }
            </style>
          </head>
          <body>
            <h1>Database Connected!!</h1>
            <br>
            <a href="/hello-vois">Back</a>
          </body>
          </html>`);
        }
      }
    );
  } catch (error) {
    console.log(`GET /db error: ${error.stack}`);
  }
});

app.listen(PORT, () => {
  console.log(`application is listening at http://localhost:${PORT}`);
});
