const { default: mongoose } = require("mongoose");


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email is Taken"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    role:{
        type:String,
        enum:["admin","student"],
        default:"student"
    }
})

const userModule = mongoose.model("User",UserSchema);

module.exports = userModule