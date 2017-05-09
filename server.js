const express = require('express')
const next = require('next')
const api = require('./lib/api');
const { MongoClient } = require('mongodb'); 
const co = require('co')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const MONGO_URL = 'mongodb://localhost:27017/test'
//if error,check what co thingy does
co(function * () {
  yield app.prepare()
    console.log('Connecting to ${MONGO_URL}')
    const db = yield MongoClient.connect(MONGO_URL)
    const server = express()
    server.use((req,res, next) => {
      req.db = db
      next()
    })
    server.use('/api', api(db));

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
}).catch(error => console.error(error.stack))