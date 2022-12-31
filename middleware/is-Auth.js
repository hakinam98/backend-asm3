exports.AuthLogin = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        res.status(400).json({ message: 'You are not login!' })
    }
    next();
}
exports.AuthAdminLogin = (req, res, next) => {
    if (!req.session.isAdminLoggedIn) {
        res.status(400).json({ message: 'You are not login!' })
    }
    next();
}
