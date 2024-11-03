import express from 'express';
import dotenv from 'dotenv'
import products from './data/products.js'
dotenv.config();
const port = process.env.PORT ;

const app = express()

// app.get('/',(req,res)=>{
//     res.send('API is running')
// })

app.get('/api/products', (req, res) => {
    try {
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Server Error" });
    }
  });


app.listen(port,()=> console.log(`server is running on port ${port}`))