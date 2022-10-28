const express = require('express')
const Category = require('../data/category')
const Products = require('../data/products')
const router = express.Router();
router.use(express.json())

router.get('/category', (req,res)=>{
    res.send(Category)
})

router.get('/products', (req,res)=>{
    res.send(Products)
})

router.get('/products/:category/:product', (req,res)=>{
    const url = req.params.category+'/'+req.params.product
    let product = {}
    if(req.params.category=='college-section'){
        product = Products.collegeProducts.find(x => x.url==url)
    }
    if(req.params.category=='camp-section'){
        product = Products.campProducts.find(x => x.url==url)
    }
    if(req.params.category=='Thorat-section'){
        product = Products.thoratProducts.find(x => x.url==url)
    }
    if(req.params.category=='military-section'){
        product = Products.militaryProducts.find(x => x.url==url)
    }
    if(req.params.category=='ladies-section'){
        product = Products.ladiesProducts.find(x => x.url==url)
    }
    res.send(product)
})

module.exports = router