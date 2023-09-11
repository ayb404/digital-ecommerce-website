const Product = require('../models/product');

const router = require('express').Router(); 
// routage CRUD 

router.post('/', async (req , res) => {
    const CreateP = Product(req.body)
    
    try {
        const newProduct = await CreateP.save()
        res.status(200).json(newProduct)
        
    } catch (error) {
        console.log(error)
    }
});

router.get("/", async (req, res) => { 
    const Query = req.query.category
    const Query1 = req.query.quantity

    try {
        // si il y'a pas categorie
       if(Query == "All") {
                // si il ya query en stock
                if( Query1 == 1 ) {
                    const findproduct = await Product.aggregate([
                       { $match: {Quantity: {$gte: 1}}}

                    ]

                    );
                    res.status(200).json(findproduct);
                }  
                //si il ya pas   en stock
                else if ( Query1 == 0 ) {
                    const findproduct = await Product.aggregate([
                       { $match: {Quantity: {$lte:0 }}}

                    ]

                    );
                    res.status(200).json(findproduct);
                }  
               
                // si il ya pas query 
                else  {
                    const findproduct = await Product.find();
                    res.status(200).json(findproduct);
                }
              

        }
        else if(Query) {
            if( Query1 == "1" ) {
                const findproduct = await Product.aggregate([
                   { $match: {Quantity: {$gte: 1}}}

                ]

                );
                res.status(200).json(findproduct);
            }   
                 //si il ya pas   en stock
                 else if ( Query1 == "0" ) {
                    const findproduct = await Product.aggregate([
                       { $match: {Quantity: {$lte:0 }}}
                    ]

                    );
                    res.status(200).json(findproduct);
                }  
            else {
                const findproduct = await Product.find({Category:Query});
                res.status(200).json(findproduct);
  
            }
         
        }
      
    } catch (error) {
        console.log(error)
    }
})


router.get('/:id', async (req, res) => {

        const query = req.params.id  

    try {
        const Findone = await Product.findById(query)
        res.status(200).json(Findone);

    } catch (error) {
        console.log(error)
    }
})


router.delete('/delete/:id', async function (req, res) {
    const queryid=req.params.id

    try {
        const deleteproduct = await Product.findByIdAndDelete(queryid)
        res.status(200).json({message:'the delete was successful with id ' + queryid})
    }catch (error){
        console.log(error)
    }

})

module.exports = router
