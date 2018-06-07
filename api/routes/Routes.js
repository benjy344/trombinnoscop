import Joi from 'joi'
import jwt from 'jsonwebtoken'

import Paths       from '../paths/Paths'
import Controllers from './../controllers'

require('dotenv').config()

const validate = (token, request, callback) => {
  const publicKey = process.env.JWT_SECRET
  jwt.verify(token, publicKey, (err, decoded) => {
    if (err) return callback(err, false, decoded)
    return callback(null, true, decoded)
  })
}

const response = (response, error = false, status = 200, url = 'http://ok') => {
  return {
    status,
    error : {
      errorMessage: error
    },
    result: response,
    url
  }

}

module.exports = server => {
  server.register(require('hapi-auth-jwt-simple'), (err) => {
    if (err) {
      console.log(err)
    }

    server.auth.strategy('jwt', 'jwt', {
      validateFunc: validate
    })

    server.auth.default('jwt')

    /*
    * /profiles
    * method: GET
    * Get profiles
    * */
    server.route({
      method: 'GET',
      path  : Paths.profiles.get,
      config: {
        auth       : false,
        description: 'Get profiles',
        tags       : ['api'],
        /*validate   : {
          params   : {},
          failAction: (request, reply, source, error) => {
            console.log(error.data.details[0].message)
            reply(response(null, error.data.details[0].message, 400)).code(400)
          }
        },*/
        handler    : Controllers.Profile.get
      }
    })

    /*
    * /profiles
    * method: POST
    * Create a profile
    * */
    server.route({
      method: 'POST',
      path  : Paths.profiles.create,
      config: {
        auth       : false,
        description: 'Create profile',
        tags       : ['api'],
        validate   : {
          payload   : {
            name         : Joi.string().alphanum().required(),
            firstname    : Joi.string().alphanum().required(),
            password     : Joi.string().alphanum().required(),
            status       : Joi.string().alphanum().required(),
            email        : Joi.string().email().required(),
            phone        : Joi.string().alphanum().optional().allow(''),
            job          : Joi.string().alphanum().required(),
            badges       : Joi.array().optional(),
            mood         : Joi.string().alphanum().optional().allow(''),
            skills       : Joi.array().optional(),
            portfolioLink: Joi.string().alphanum().optional().allow(''),
            fbLink       : Joi.string().alphanum().optional().allow(''),
            tweeterLink  : Joi.string().alphanum().optional().allow(''),
            instaLink    : Joi.string().alphanum().optional().allow(''),
            jobStatus    : Joi.string().alphanum().optional().allow(''),
            availability : Joi.string().alphanum().optional().allow('')
          },
          failAction: (request, reply, source, error) => {
            console.log(error.data.details[0].message)
            reply(response(null, error.data.details[0].message, 400)).code(400)
          }
        },
        handler    : Controllers.Profile.create
      }
    })
  })
}