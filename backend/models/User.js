const mongoose = require("mongoose");
/*const mongoURI="mongodb://127.0.0.1:27017/scolar"
mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log(`connction success`);
}).catch((e)=>{
    console.log('no connection')
})
*/
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('user', UserSchema);
  const User = mongoose.model('user', UserSchema);
  module.exports = User;