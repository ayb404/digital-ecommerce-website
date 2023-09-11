const Contact = require('../models/contact');

const router = require('express').Router(); 
// routage CRUD 

router.post('/', async (req , res) => {
    const Createcontact = Contact(req.body)
    
    try {
        const newcontact = await Createcontact.save()
        res.status(200).json(newcontact)
        
    } catch (error) {
        res.status(404).json(error)
    }
});


module.exports = router
