import jwt from 'jsonwebtoken';
import BadRequestError from '../errors/BadRequestError.js';
import UnAuthorizedError from '../errors/UnAuthorizedError.js';

const auth = (req,res,next) => {
    console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new BadRequestError("No Token Provided", 401);
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded;
        req.user = {id, username};
        next();
    } catch (error) {
        throw new UnAuthorizedError("Not Authorized to access this route",401);
    }
}

export default auth;
