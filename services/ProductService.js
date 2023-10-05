import { Product } from '../models/index.js';

export const createProduct = async (productData) => {
    try {
      
      productsUpload(req, res, async (err) => {
        if (err) {
          throw new Error(err);
        }
        const { productName, description, categoryId, price, quantity } = req.body;
        const productImage = req.file ? req.file.path : null; 
        const newProduct = await Product.create({
          productName,
          description,
          categoryId,
          price,
          quantity,
          productImage,
        });
        return newProduct;
      });
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  };
  

export const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    console.log('Retrieved all products');
    return products;
  } catch (error) {
    console.error('Error retrieving products:', error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const [updated] = await Product.update(productData, { where: { ID: id } });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      console.log('Product updated:', updatedProduct.Product_Name);
      return updatedProduct;
    }
    return null;
  } catch (error) {
    console.error('Error updating Product:', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const deleted = await Product.destroy({ where: { ID: id } });
    return deleted;
  } catch (error) {
    console.error('Error deleting Product:', error);
    throw error;
  }
};
