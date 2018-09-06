
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.use('*', (res, req) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`[App] running http:localhost:${PORT}`));