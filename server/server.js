const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const websiteRouter = require('./routes/websiteRouter');
const usersRouter = require("./routes/usersRouter");
const uploadedWebRouter = require("./routes/uploadedWebRouter")
const messagesRouter=require('./routes/messagesRouter');
const cors = require('cors');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


const corsOptions = {
  origin: '*',
  credentials: true,           
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/public', express.static('public'))


app.use("/api/users", usersRouter);
app.use("/api/website", websiteRouter);
app.use("/api/messages", messagesRouter)
app.use("/api/users_website", uploadedWebRouter)


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
