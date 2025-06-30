const roleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(403).json({
                error:'No user info found'
            })
        }
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                error:"access denied : Role not permitted"
            })
        }
        next();
    }
}

export default roleMiddleware