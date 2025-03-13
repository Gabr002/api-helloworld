const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next){
    const token = req.headers["authorization"];
    
    if(!token){
        res.status(400).json({ msg: "Invalid token or not provided." });
        return 
    }

    jwt.verify(token, "senha%RDXxdr%", (err, decoded) => {
        if(err){
            console.log(err);
            res.status(400).json({ msg: "Invalid token or not provided"})
            return
        }
        
        req.session = decoded;
        next();
    })
}

module.exports = authMiddleware;