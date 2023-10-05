import express from 'express';
import ProductController from '../controller/index.js';

const router = express.Router();

// Rute untuk mengambil semua produk
router.get('/products', ProductController.getAllProducts);

// Rute untuk membuat produk baru
router.post('/api/products', ProductController.createProduct);

// Rute untuk mengambil detail produk berdasarkan ID
router.get('/api/products/:id', ProductController.getProductById);

// Rute untuk mengupdate produk berdasarkan ID
router.put('/api/products/:id', ProductController.updateProduct);

// Rute untuk menghapus produk berdasarkan ID
router.delete('/api/products/:id', ProductController.deleteProduct);

export default router;
