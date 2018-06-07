require('dotenv').config()

const path = process.env.BASIC_PATH || '/'

module.exports = {
  profiles: {
    create: `${path}profiles`,
    get   : `${path}profiles`,
  }
}