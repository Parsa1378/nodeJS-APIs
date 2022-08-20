const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const login = async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new CustomAPIError('please provide email and password', 400);
    }
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({ msg: 'user created', token });
};

const dashboard = async(req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('no token provided', 401);
    }
    const token = authHeader.split(' ')[1];
    console.log(token);
    res.status(200).json({ msg: 'okay' });
};

module.exports = {
    login,
    dashboard
};