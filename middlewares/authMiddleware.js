import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // token format :"Bearer <Token>"
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({
            error:'No token, authorization denied'
        })
    }

    const token = authHeader.split(' ')[1];

    try {
        // decoding the token
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        // attaching the user to the request object
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(401).json({
            error: 'Token is not valid'
        })
    }

}

export default authMiddleware;