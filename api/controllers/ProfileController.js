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
  },

  getOne (req, reply) {
    const id = Mongoose.Types.ObjectId(req.params.id)

    Profile.find({_id: id}, (err, profile) => {
      if (err) {
        console.log('error get profile id ' + id, err)
        return reply(response([], 'error get profile id ' + id, 503)).code(503)
      }
      if (profile) {
        return reply(response([profile], null, 200)).code(200)
      }
    })
  },

  update (req, reply) {
    const id = Mongoose.Types.ObjectId(req.params.id)

    Profile.findOneAndUpdate(
      {_id: id},
      {
        $set: {
          name         : payload.name,
          firstname    : payload.firstname,
          password     : payload.password,
          status       : payload.status,
          imgUrl       : payload.imgUrl,
          email        : payload.email,
          phone        : payload.phone,
          job          : payload.job,
          badges       : payload.badges,
          level        : payload.level,
          nextLevelExp : payload.nextLevelExp,
          exp          : payload.exp,
          mood         : payload.mood,
          skills       : payload.skills,
          portfolioLink: payload.portfolioLink,
          fbLink       : payload.fbLink,
          tweeterLink  : payload.tweeterLink,
          instaLink    : payload.instaLink,
          jobStatus    : payload.jobStatus,
          availability : payload.availability
        }
      }, {new: true})
      .then((updatedProfile, err) => {
        if (err) {
          console.log('error update user', err)
          return reply(response([], 'error update user', 503)).code(503)
        }

        return reply(response([updatedProfile], null, 200)).code(200)
      })
  },

  deleteOne (req, reply) {
    const id = Mongoose.Types.ObjectId(req.params.id)

    Profile.remove({_id: id}, (err) => {
      if (err) {
        const msg = `Can't remove Profile id: ${id}`
        console.log(msg)
        console.log(err)
        reply(response([], msg, 503)).code(503)
      }
      else {
        reply(response([], null, 200)).code(200)
      }
    })
  }

}

export default ProfileController