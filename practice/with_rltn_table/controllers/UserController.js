const { Model } = require('sequelize');
const db = require('../models');
const User = db.User;
const Role = db.Role;

// 🔁 Reusable response function
const sendRes = (res, status, success, message, data = null) => {
    res.status(status).json({ success, message, data });
};

const index = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {model: Role, as: 'role' } // Include role details
            ]
        });
        sendRes(res, 200, true, 'Users fetched successfully', users);
    } catch (err) {
        console.error(err);
        sendRes(res, 500, false, 'Internal server error');
    }
};

const store = async (req, res) => {
    try {
        const userData = req.body;
        const user = await User.create(userData);
        sendRes(res, 201, true, 'User created successfully', user);
    } catch (err) {
        console.error(err);
        sendRes(res, 500, false, 'Internal server error');
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            sendRes(res, 200, true, 'User found', user);
        } else {
            sendRes(res, 404, false, 'User not found');
        }
    } catch (err) {
        console.error(err);
        sendRes(res, 500, false, 'Internal server error');
    }
};

const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            await user.update(req.body);
            sendRes(res, 200, true, 'User updated successfully', user);
        } else {
            sendRes(res, 404, false, 'User not found');
        }
    } catch (err) {
        console.error(err);
        sendRes(res, 500, false, 'Internal server error');
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            sendRes(res, 200, true, 'User deleted successfully');
        } else {
            sendRes(res, 404, false, 'User not found');
        }
    } catch (err) {
        console.error(err);
        sendRes(res, 500, false, 'Internal server error');
    }
};

module.exports = {
    index,
    store,
    getById,
    updateById,
    deleteById,
};
