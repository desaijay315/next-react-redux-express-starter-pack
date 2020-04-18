const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//add additional handling here - example includes - database handling, custom nodejs routes

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json())
    const PORT = process.env.PORT || 3000;
    server.use(handle).listen(PORT, (err) => {
      if (err) throw err
      console.log('> Ready on port ' + PORT)
    })
  })
  