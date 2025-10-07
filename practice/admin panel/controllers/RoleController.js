const db = require('../models');
const Roles = db.Roles;


const index = async (req, res) => {
    try {
        const data = await Roles.findAll();

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error!!!' });
    } s
};



const store = async (req, res) => {
    try {
        const data = await Roles.create(req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error!!!' });
    }
};


const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Roles.findByPk(id);

        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ massage: 'Roles not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error' });
    }
};



const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Roles.findByPk(id);

        if (data) {
            const updatedData = await data.update(req.body);
            res.json(updatedData);
        } else {
            res.status(404).json({ massage: 'Roles not found!!' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error' });
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Roles.findByPk(id);

        if (data) {
            await data.destroy();
            res.json({ massage: 'Roles deleted sucessfully!!' });
        } else {
            res.status(404).json({ massage: 'Roles not found !!' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: 'internal server error!' });
    }
}


module.exports = { index, store, getById, updateById, deleteById };
