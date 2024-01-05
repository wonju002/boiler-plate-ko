const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email : {
    type: String,
    trim: true, //문장 사이의 스페이스바를 없애줌
    unique: 1
  },
  password : {
    type: String,
    minlength: 5
  },
  lastname : {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    //토큰사용기간
    type: Number
  }
})

//스키마를 모델로 감싸줌
const User = mongoose.model('User', userSchema)

module.exports = {User} 