import express from 'express';
const router = express.Router();
import {createProduct, listProduct, readProduct, removeProduct, updateProduct} from '../controllers/product'


router.get('/products', listProduct );
router.get('/product/:slug',readProduct);
router.patch('/product/:slug',updateProduct);
router.post('/product', createProduct);
router.delete('/product/:slug',removeProduct);



module.exports = router