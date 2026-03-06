const crypto = require("crypto")
const userModule = require("../model/user.model")
const jwt = require("jsonwebtoken")

async function registerController (req,res) {
    const { name, email, password, role} = req.body


    const isUserisAlradyExist = await userModule.findOne({email})

    if(isUserisAlradyExist){
        return res.status(409).json(
            {message:`User is Already exist with this EmailID `}
        )
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")
    const user = new userModule({name, email, password:hash, role})
    await user.save();

    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    console.log("BODY:", req.body);
    const token = jwt.sign(
        {id:user._id},process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)


    res.status(201).json({
        message:"new user is rugestered",
        user:{
            name:user.name,
            email:user.email,
            password:user.password,
            role:user.role
        }
    })
}

async function loginControler(req,res) {
    const {email,password} =req.body

    const user = await userModule.findOne({email})

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const isPasswordValid = hash === user.password

    if (!isPasswordValid) {
        return res.status(401).json({
            message:"Password is invalid"
        })
    }
    const token = jwt.sign(
        {id:user._id},
        process.abort.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.status(200).json({
        Message:"User log in successfully.",
        user:{
            name:user.name,
            email:user.email,
            role:user.role
        }
    })
    
}



module.exports = {registerController}