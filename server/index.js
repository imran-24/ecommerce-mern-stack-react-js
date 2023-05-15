import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import stripeRoutes from './routes/stripeRoutes.js'

dotenv.config();

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(express.static('public'));
app.use('/api/users/', userRoutes)
app.use('/api/products/', productRoutes)
app.use('/api/carts/', cartRoutes)
app.use('/api/orders/', orderRoutes)
app.use('/api/', stripeRoutes)



const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;



app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
