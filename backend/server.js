require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/database");
const httpStatus = require("http-status");
let server = http.createServer(app);
let io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connection " + socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));
var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));



db.connection().then((database) => {
  module.exports = database;
  app.use("/api/auth", require("./routes/auth.routes"));
  app.get("*", (req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
      message: "Api Not found",
      code: httpStatus.NOT_FOUND,
      data: null,
    });
  });

  app.use((err, req, res, next) => {
    res.status(err.status).json({
      error: {
        message: err.isPublic ? err.message : httpStatus[err.status],
      },
    });
  });
});

server.listen(port, () => {
  console.log(`Socket server is running on port ${port}`);
});
