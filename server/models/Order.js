import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User" 
      },
  products:[
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product" 
          },
        quantity: {
            type: Number,
            default: 1
        }
    }
  ],
  amount: {type: Number, required: true},
  address:{ type: Object, required: true},
  status:{ type: String, default: 'pending'}

},{
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
