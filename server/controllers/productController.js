import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Product from '../models/Product.js';

// // LOGIN
//  export const login = async (req, res) => {
//     const {username, password} = req.body;

//     try{

//         if(!username || !password) 
//         {
//             return res.status(400).json({message: "Please fill out all the fields"})
//         }

//         const user = await User.findOne({username});
//         console.log(user)
        
//         if(user && await bcrypt.compare(password, user.password)){
//             const {password: pass , ...others  } = user._doc
//             console.log({isAdmin: others.isAdmin})
//             return res.status(200).json({
//                    ...others,
//                    token: generateToken(user._id, others.isAdmin)
//             })
            
//         }
//         res.status(401).json({message:"Wrong credentials!"})

        
//     }
//     catch(error){
//         res.status(400).json(error);

//     }
// }

// CREATE
export const createProduct = async (req, res) => {
    const {title, desc, img, categories, size, color, price} = req.body;
    try{

        if(!title || !img || !categories || !size || !color || !price ) {
            return res.status(400).json({message: "Please fill out all the fields"})
        }

        const existing = await Product.findOne({title});
        console.log(existing)
        if(existing){
           return res.status(400).json({message:"There is a product already exist with same title"})
        }

        const newProduct = await Product.create({
            title,
            desc, 
            img, 
            categories, 
            size, 
            color, 
            price
        })

        res.status(201).json(newProduct)


    }
    catch(error){
        res.status(400).json({error});
    }
}


// UPDATE
export const updateProduct = async (req, res) => {
    
    const {title, desc, img, categories, size, color, price} = req.body;
    try{

        if(!title || !img || !categories || !size || !color || !price ) {
            return res.status(400).json({message: "Please fill out all the fields"})
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedProduct)
    }
    catch(error){
        res.status.json(error)
    }
}

// DELETE
export const deleteProduct = async (req, res) => {
    try{

        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product has been deleted')
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}

// GET 
export const getProduct = async (req, res) => {
    try{

        const searchedProduct = await Product.findById(req.params.id);
        res.status(200).json(searchedProduct)
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}

// GET ALL PRODUCT
export const getAllProduct = async (req, res) => {
    const qNew = req.query.new;   // get the query 
    const qCategory = req.query.category;   // get the query 
    try{
        let products;

        if(qNew) {
            products = await Product.find().sort({createdAt: -1}).limit(5)
        }
        else if(qCategory){
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                },
            });
        }
        else{ 
            products = await Product.find();
        }
        res.status(200).json(products)
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}



// const generateToken = (id, isAdmin) =>{
//     return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET_KEY, {expiresIn: '30d'})
// }