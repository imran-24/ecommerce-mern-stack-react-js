import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Cart from '../models/Cart.js';



// CREATE
export const createCart = async (req, res) => {
    const {user, product, quantity} = req.body;
    try{

        const newCart = await Cart.create({
            user, product, quantity
        })

        res.status(201).json(newCart)


    }
    catch(error){
        res.status(400).json({error});
    }
}


// UPDATE
export const updateCart = async (req, res) => {
    
    const {user, product, quantity} = req.body;
    try{

        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCart)
    }
    catch(error){
        res.status.json(error)
    }
}

// DELETE
export const deleteCart = async (req, res) => {
    try{

        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Cart has been deleted')
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}

// GET 
export const getCart = async (req, res) => {
    try{

        const searchedCart = await Cart.findOne({id: req.params.id});
        res.status(200).json(searchedCart)
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}

// GET ALL Cart (admin)
export const getAllCart = async (req, res) => {
   
    try{
       
        const Carts = await Cart.find();
    
        res.status(200).json(Carts)
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}


