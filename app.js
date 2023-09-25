var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
var logger = require("morgan");
const cors = require('cors');
// const databaseConnection = require('./database/conn');

var Todo = require("./models/todo.model");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "/upload/images")))
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:100000}));
app.use(bodyParser.text({ limit: '200mb' }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.post("/todos", async(req, res) => {
    // console.log(req.body);
    // res.json(req.body)

    try {
        let todo = await Todo.insertMany(req.body);
        // console.log(todo);
        // let todoData = todo.save();
        res.status(200).json({ message: "Todo added successfully", result: todo });
      } catch (error) {
        res.status(400).json({ message: "somthing went wrong" });
      }
})
app.get("/todos", async(req, res) => {
    try {
        let todo = await Todo.find({});
        res.status(200).json(todo);
      } catch (error) {
        res.status(400).json({ message: "somthing went wrong" });
      }
})

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
// databaseConnection()
//   .then(() => {
//     try {
//       app.listen(4000, () => console.log("server started"))
//       console.log(`Database connected`);
//     } catch (err) {
//       console.error("Error : Could not connect to server");
//     }
//   })
//   .catch((err) => {
//     console.error("Error : Invalid database connection");
//   });
