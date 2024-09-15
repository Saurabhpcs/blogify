const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const userMiddleware = async(req, res,next) => {
    const token = req.header("Authorization");

    if(!token)
    {
        return res.status(401).json({message: "Unauthorized HTTP, Token does not exist!!!"});
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log(jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        //console.log(isVerified);

        const userData = await User.findOne({email : isVerified.email}).select({
            password : 0,
        });

        req.token = token;
        req.user = userData;
        req.userID = userData._id;

        // Moves to next middleware or router handler...
        next();
        
    } catch (error) {
        return res.status(401).json({message: "This Part.. Unauthorized HTTP, Token does not exist!!!"});
    }
};

module.exports = userMiddleware;