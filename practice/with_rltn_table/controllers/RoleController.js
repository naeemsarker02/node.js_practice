const db = require('../models');
const Role = db.Role;


const index = async (req, res) => {
    try {
        const data = await Role.findAll({
            include: [{ model: db.User, as: 'users' }] // Include users associated with the role
        });

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error!!!' });
    } s
};



const store = async (req, res) => {
    try {
        const data = await Role.create(req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error!!!' });
    }
};


const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Role.findByPk(id, {
            include: [{ model: Role, as: 'role' }] //added by ai
        });

        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ massage: 'Role not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error' });
    }
};



const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Role.findByPk(id);

        if (data) {
            const updatedData = await data.update(req.body);
            res.json(updatedData);
        } else {
            res.status(404).json({ massage: 'Role not found!!' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error' });
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Role.findByPk(id);

        if (data) {
            await data.destroy();
            res.json({ massage: 'Role deleted sucessfully!!' });
        } else {
            res.status(404).json({ massage: 'Role not found !!' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error!' });
    }
}


module.exports = { index, store, getById, updateById, deleteById };
