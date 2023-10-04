import { ProductService } from '../services';

export const createProduct = async (req, res) => {
  try {
    const product = await ProductService.createProduct(req.body);
    console.log('Product created:', product.Product_Name);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating Product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    console.log('Retrieved all products');
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await ProductService.updateProduct(id, req.body);
    if (!updatedProduct) {
      console.error('Product not found:', id);
      return res.status(404).json({ message: 'Product not found' });
    }
    console.log('Product updated:', updatedProduct.Product_Name);
    res.json({ message: 'Product updated', product: updatedProduct });
  } catch (error) {
    console.error('Error updating Product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await ProductService.deleteProduct(id);
    if (deleted) {
      console.log('Product deleted:', id);
      return res.json({ message: 'Product deleted' });
    }
    console.error('Product not found:', id);
    return res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    console.error('Error deleting Product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
