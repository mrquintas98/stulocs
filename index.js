require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();
app.use(cookieSession({
    name: 'session',
    secret: process.env.COOKIE_SECRET,
    maxAge: 6 * 60 * 1000
}))

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



// ---------------- ROUTER
const placesRouter = require("./routes/placesRoutes");
const tagsRouter = require(".routes/tagsRoutes");

app.use("/api/places",placesRouter);
app.use("/api/tags", tagsRouter);



// ---- 404
app.use((req,res,next) => {
    res.status(404).send.apply({msg:"No resource or page found."});
})

// ---- Not treated
app.use((err,req,res,next) => {
    console.error(err)
    res.status(500).send(err);
})

const port = parseInt(process.env.port || '8080');
app.listen(port,function() {
  console.log("Server running at http://localhost:"+port);
});

