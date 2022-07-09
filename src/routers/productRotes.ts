const Express = require('express');
const productRotes = Express.Router();
const ProductController = require('../controllers/product/product.ts');

productRotes.post('/createProduct', ProductController.createProduct);
productRotes.get('/readProducts', ProductController.readAllProducts);
productRotes.put('/updateProduct', ProductController.updateProduct);
productRotes.delete('/deleteProduct', ProductController.deleteProduct);

export default productRotes;