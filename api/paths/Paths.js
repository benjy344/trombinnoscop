require('dotenv').config()

const path = process.env.BASIC_PATH || '/'

module.exports = {
  profiles: {
    create   : `${path}profiles`,
    get      : `${path}profiles`,
    update   : `${path}profiles/{id}`,
    getOne   : `${path}profiles/{id}`,
    deleteOne: `${path}profiles/{id}`,
  }
}