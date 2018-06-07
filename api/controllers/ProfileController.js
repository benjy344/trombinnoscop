import Profile  from '../models/Profile'
import Mongoose from 'mongoose'
import bcrypt   from 'bcrypt'

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

const ProfileController = {

  create (req, reply) {
    const payload        = req.payload
    const noHashPassword = payload.password
    const salt           = bcrypt.genSaltSync(10)
    const hash           = bcrypt.hashSync(payload.password, salt)

    Profile.findOne({username: payload.username}, (err, profile) => {
      if (err) {
        console.log('error get profile')
        return reply({messageError: 'error get profile'}).code(503)
      }
      if (!profile) {
        payload.password = hash
        const profile    = new Profile(payload)

        profile.save((err, profile) => {
          if (err) {
            console.log(err)
            return reply(response(null, 'Can\'t save profile', 503)).code(503)
          }
          profile.password = noHashPassword
          return reply(response([{profile}], null, 200)).code(200)
        })
      }
    })
  },

  get (req, reply) {
    Profile.find({}, (err, profiles) => {
      if (err) {
        console.log('error get profiles', err)
        return reply(response([], 'error get profiles', 503)).code(503)
      }
      if (profiles) {
        return reply(response([profiles], null, 200)).code(200)
      }
    })
  }
}

export default ProfileController