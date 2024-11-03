import express from 'express';
import products from './data/products.js'
const port = 8000;

const app = express()

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})



app.listen(port,()=> console.log(`server is running on port ${port}`))