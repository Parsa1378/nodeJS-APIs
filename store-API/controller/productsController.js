const Product = require('../model/products');

const getAllProducts = async(req, res) => {
    //needs detail implemantations like:sort,fields,...
    const products = await Product.find(req.query);
    res.status(200).json({ products, nbHits: products.length })
};