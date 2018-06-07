import Hapi        from 'hapi'
import swaggered   from 'hapi-swaggered'
import swaggeredUI from 'hapi-swaggered-ui'
import vision      from 'vision'
import inert       from 'inert'
import Mongoose    from 'mongoose'

import routes from './routes/Routes'

require('dotenv').config()

if (!process.env.MONGODB_URL || !process.env.PORT) {
  throw 'Make sure you defined MONGODB_URL, PORT in your .env file'
}
const server = new Hapi.Server()
exports.server = server

server.connection({port: process.env.PORT, routes: { cors: true }, labels: ['api']})

server.register([
  vision,
  inert,
  {
    register: swaggered,
    options : {
      auth: false,
      info: {
        title      : 'TROMBI API',
        description: 'API DOCUMENTATION',
        version    : '1.0'
      }
    }
  },
  {
    register: swaggeredUI,
    options : {
      title         : 'TROMBI API',
      path          : '/docs',
      auth          : false,
      authorization : {
        field       : 'apiKey',
        valuePrefix : 'bearer ',
        defaultValue: 'demoKey',
        placeholder : 'Enter your apiKey here'
      },
      swaggerOptions: {}
    }
  }
], {
  select: 'api'
}, err => { if (err) { throw err } })

/* ##### INITIALIZE DB CONNECTION ##### */
const urlDB = process.env.MONGODB_URL
Mongoose.connect(urlDB, (error) => {
  if (error) {
    console.log('ERROR CONNECT MONGODB ===> ', error)
  }
  console.log('--- Connection DB open :', urlDB)

})


/* ##### LOAD API SERVER ROUTES ##### */
routes(server)

server.start((err) => {
  if (err) {
    console.log(err)
    throw err
  }
  console.log('Server running at :', server.info.uri)
})