const db = require('../models'); 
const wareHouse = db.wareHouse; 


const index = async(req, res)=>{
    try{
        const data = await wareHouse.findAll(); 
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({massage:'internal server error!!!'});
    }
};



const store = async(req, res)=>{
    try{
        const data = await wareHouse.create(req.body); 
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({massage:'internal server error!!!'});
    }
};


const getById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await wareHouse.findByPk(id);

        if(data){
            res.json(data);
        }else{
            res.status(404).json({massage: 'wareHouse not found'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error'});
    }
};



const updateById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await wareHouse.findByPk(id);

        if(data){
            const updatedData = await data.update(req.body);
            res.json(updatedData);
        }else{
            res.status(404).json({massage: 'wareHouse not found!!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error'});
    }
};

const deleteById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await wareHouse.findByPk(id);

        if(data){
            await data.destroy();
            res.json({massage: 'wareHouse deleted sucessfully!!'});
        }else{
            res.status(404).json({massage: 'wareHouse not found !!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error!'});
    }
}


module.exports = {index, store, getById, updateById, deleteById};
