import jwt from 'jsonwebtoken';
import secret from '../config.js';

export default (req, res, next) => {
    if(req.method === 'OPTIONS') {
        next();
    }

    try {
        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
        if (!token) {
            return res.status(403).json({message: "Пользователь не авторизован!"});
        }
        const decodeData = jwt.verify(token, secret);
        req.user = decodeData;
        next(); 
    } catch (error) {
        console.log(error);
        return res.status(403).json({message: "Пользователь не авторизован!"});
    }
};