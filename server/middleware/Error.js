const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server Error";

    //wrong mongoDB id error-to avoid server crashing
    if(err.name == 'CastError'){
        const message = `Resource not found with this id.. invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    //Duplicate key error-to avoid duplicate error crashing
    if(err.statusCode == 11000){
        const message = `Duplicat key ${Object.keys(err.keyValue)} entered`; 
        err = new ErrorHandler(message, 400);
    }
    //wrong jwt error
    if(err.name == 'JsonWebTokenError'){
        const message = `Your Url is expired.Please try again later`;
        err = new ErrorHandler(message, 400)
    }
    //jwt expired
    if(err.name === 'TokenExpiredError'){
        const message = `Your Url is Expired`;
        err = new ErrorHandler(message, 400);
    }
     res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};