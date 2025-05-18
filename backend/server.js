const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieSession({
  name: 'session',
  keys: [],
}));

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});