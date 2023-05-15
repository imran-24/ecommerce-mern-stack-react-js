import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Order from '../models/Order.js';



// CREATE
export const createOrder = async (req, res) => {
    const newOrder = new Order(req.body)
    console.log(newOrder)
    try{

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder)


    }
    catch(error){
        res.status(400).json({error});
    }
}


// UPDATE
export const updateOrder = async (req, res) => {
    
    try{yyy
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedOrder)
    }
    catch(error){
        res.status.json(error)
    }
}

// DELETE
export const deleteOrder = async (req, res) => {
    try{

        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Order has been deleted')
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}

// GET USER ORDER
export const getOrder = async (req, res) => {
    try{

        const searchedOrder = await Order.find({id: req.params.id});
        res.status(200).json(searchedOrder)
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}

// GET ALL Order (admin)
export const getAllOrder = async (req, res) => {
   
    try{
       
        const orders = await Order.find();
    
        res.status(200).json(orders)
           
    }

    catch(error){
        res.status(500).json(error);
    } 
}

// GET Monthly INCOME

export const income = async (req, res) => {
    const date = new Date();
    const lastmonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousmonth = new Date(date.setMonth(lastmonth.getMonth() - 1))
    try{
        const data = await Order.aggregate([
            {$match: {createdAt: {$gte: previousmonth}}},
            {
                $project: {
                    month: {$month: '$createdAt'},
                    sales: '$amount'
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: {$sum: '$sales' }
                }
            }
        ])
        
        res.status(200).json(data)
           
    }
    catch(error){
        res.status(500).json(error)
    }
}
