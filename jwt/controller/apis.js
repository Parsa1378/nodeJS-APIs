const CustomAPIError = require('../errors/custom-error');

const login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new CustomAPIError('please provide email and password', 400);
    }
};

const dashboard = (req, res) => {
    res.status(200).json({ msg: 'okay' });
};

module.exports = {
    login,
    dashboard
};