const { parseAsync } = require("../validators/user-validator");
const errorMiddleware = require("../middlewares/error-middleware");

const validate = (schema) => async(req,res,next) => {
    try {
        const parseBody = await parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill input properly";
        const extraDetails = err.errors[0].message;

        //console.log("Key Error... ", err);
        
        const error = {
            status,
            message,
            extraDetails
        };
        console.log(error);
        next(error);
    }
};

module.exports = validate;