const Order = require('../models/order');

const router = require('express').Router(); 
// routage CRUD 

router.post('/', async (req , res) => {
    const Createorder = Order(req.body)
    
    try {
        const neworder = await Createorder.save()
        res.status(200).json(neworder)
        console.log(neworder)
        
    } catch (error) {
        res.status(404).json(error)
      
    }
});


module.exports = router