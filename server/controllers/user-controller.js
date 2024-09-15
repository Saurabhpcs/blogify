const User = require("../models/user-model");

const home = async(req,res) =>{
    try{
        res.status(200).send("Welcome to Controller Router Page...");
    }catch(error)
    {
        console.log(error);
    }
}

// Registration Logic..

const register = async(req,res)=>{
    try{

        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message:"Email already exist!!!"});
        }

        const userCreated = await User.create({username,email,phone,password});
        res.status(201).json({msg:"User Registered Successful!!!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
            //userCreated
        });
    }catch(error)
    {
        res.status(500).json("Internal Server Error");
    }
    
}

// LOGIN LOGIC...

const login = async(req,res) => {
    try {
        const {email,password} = req.body;

        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist)
        {
            return res.status(400).json({message:"Invalid Email..."});
        }

        //const isPasswordValid = await bcrypt.compare(password,userExist.password);
        const isPasswordValid = await userExist.comparePassword(password);

        if(isPasswordValid)
        {
            res.status(200).json({
                msg:"Login Successful!!!",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else{
            res.status(401).json({message:"Invalid Password"});
        }

    } catch (error) {
        res.status(500).json("Internal Server Error.....");
    }
};

// Data Logic

const data = async (req,res) => {
    try {

        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
        
    } catch (error) {
        console.log(`error from auth-controller user function ${error}`);
    }
}

module.exports = {home, register, login, data};
