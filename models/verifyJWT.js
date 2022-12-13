const jwt = require('jsonwebtoken');
const user = require('./User');

module.exports = function verify(req, res, next){
    const token = req.headers['authorization'].split(' ')[1];

    console.log(token)
    if(!token) return res.status(401).json({auth: false, message: 'No token provided'});

    jwt.verify(token, "AL3DF21GDFG1B21VD6F5V1", function(err, decoded){
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}