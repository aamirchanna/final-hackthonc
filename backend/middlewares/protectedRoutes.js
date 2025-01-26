import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send({ message: 'Access Denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send({ message: 'Invalid Token' });
        req.user = user;
        next();
    });
};

export default authenticateToken;