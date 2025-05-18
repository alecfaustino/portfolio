const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(cookieParser());

const generateRandomString = function() {
  return Math.random()
    .toString(36)
    .substring(2, 2 + 6);
};
app.use('/', function (req, res, next) {
  if (!req.cookies.visitor_id) {
    const randomString = generateRandomString();
    res.cookie('visitor_id', randomString, {
      maxAge: 1000 * 60 * 60 * 24 * 3650, httpOnly: true, 
    });
  }

  next();
});

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});