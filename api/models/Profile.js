import Mongoose from 'mongoose'

const Schema = Mongoose.Schema

let profileSchema = new Schema({
  name: String,
  firstname: String,
  password: String,
  status: String,
  imgUrl: String,
  email: String,
  phone: String,
  job: String,
  badges: {type: Array, default: []},
  level: {type: Number, default: 1},
  nextLevelExp: {type: Number, default: 10},
  exp: {type: Number, default: 0},
  mood: String,
  skills: [String],
  portfolioLink: String,
  fbLink: String,
  tweeterLink: String,
  instaLink: String,
  jobStatus: String,
  availability: String

})

export default Mongoose.model('profiles', profileSchema)