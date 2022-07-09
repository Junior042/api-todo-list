import { Product } from '../../models/modelProduct';
import Database  from '../../database/config';

class ProductController{
    async createProduct(req, res){
        const { body } = req;

        const product = new Product();
        product.name = body.name; 
        product.isConcluded = body.isConcluded;
        product.user = body.user;
        
        try{
            const productRepository = (await Database).getRepository(Product);
            await productRepository.save(product);

            res.status(200).json({message: 'Product Created'});
        }catch(err){
            console.log(err);
            res.status(500).json('Error');
        }
    }

    async readAllProducts(req, res){
        try{
            const RepositoryProducts = (await Database).getRepository(Product);
            const allProducts = await RepositoryProducts.find(
                {// especifica que há uma relação entre produtos e users...
                    relations: {
                        user: true,
                    }
                }
            );
    
            res.status(200).json(allProducts);
        }catch(err){
            console.log(err);
            res.status(500).json('Error');
        }
    }

    async updateProduct(req, res){
        const { body } = req;

        try{
            const RepositoryProducts = (await Database).getRepository(Product);
            const productToUpdate = await RepositoryProducts.findOneBy({
                id: body.id
            });

            productToUpdate.isConcluded = body.isConcluded;

            await RepositoryProducts.save(productToUpdate);
            res.status(200).json({message: 'Product updated'});
        }catch(err){
            console.log(err);
            res.status(500).json('Error');
        }
    }

    async deleteProduct(req, res){
        const { body } = req;

        try{
            const RepositoryProducts = (await Database).getRepository(Product);
            const productToRemove = await RepositoryProducts.findOneBy({
                id: body.id
            });

            await RepositoryProducts.remove(productToRemove);
            res.status(200).json({message: 'product removed successfully'});
        }catch(err){
            console.log(err);
            res.status(500).json('Error');
        }

    }
}

module.exports = new ProductController();