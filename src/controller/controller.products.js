const { response } = require("express");
const  ProductManager = require ("../productmanager");
const pm = new ProductManager('./src/products.json');


const getProducts = async (req,res)=>{
    const {limite:limite = ""} = req.query
    if (!limite){
        let productos = await pm.getProducts();
        res.json(productos)
    }else{
        let productos = await pm.getProducts(limite);
        res.json(productos)
    }
};

const ProductsbyId = async (req,res)=>{
    const id = req.params.pid 
    let producto = await pm.getProductsById(id);
    if (!producto){
        res.status(producto.status).send(producto)
    }else{
        res.json(producto)
    }
}

const addProduct = async (req,res)=>{
    const body = req.body
    const products = await pm.addProduct(body);
    if(products.error){
        res.status(products.status).send(products)
    }else{
        res.json(products)
    }
}

const updateProducts = async (req,res)=>{
    const body = req.body
    const id = +req.params.pid
    const update = await pm.updateProducts(id,body);
    if(update.error){
        res.status(update.status).send(update)
    } else {
        res.json(update)
    }
}

const deleteProduct = async (req,res)=>{
    const id = req.params.pid 
    let eliminado = await pm.deleteProduct(parseInt(id));
    if(eliminado.error){
        res.status(eliminado.status).send(eliminado)
    } else {
        res.json(eliminado)
    }
}

module.exports = {
    getProducts,
    ProductsbyId,
    addProduct,
    updateProducts,
    deleteProduct
}