// import { createUser } from './userController.js';
// import { createCategory, getCategory, updateCategory, deleteCategory } from './CategoryController.js';
// import { createOrder, getOrder, updateOrder, deleteOrder } from './orderController.js';
// import { createPaymentMethod, getPaymentMethod, updatePaymentMethod, deletePaymentMethod } from './paymentMethodController.js';
// import { createProduct, getProduct, updateProduct, deleteProduct } from './ProductController.js';
// import { createCustomer, getCustomer, updateCustomer, deleteCustomer } from './customerController.js';
// import { createCart, getCart, updateCart, deleteCart } from './CartController.js';
// import { createCheckOut, getCheckOut, updateCheckOut, deleteCheckOut } from './checkOutController.js';
// import { createOrderList, getOrderList, updateOrderList, deleteOrderList } from './orderListController.js';

// export default {
//   createUser,
//   createCategory,
//   getCategory,
//   updateCategory,
//   deleteCategory,
//   createOrder,
//   getOrder,
//   updateOrder,
//   deleteOrder,
//   createPaymentMethod,
//   getPaymentMethod,
//   updatePaymentMethod,
//   deletePaymentMethod,
//   createProduct,
//   getProduct,
//   updateProduct,
//   deleteProduct,
//   createCustomer,
//   getCustomer,
//   updateCustomer,
//   deleteCustomer,
//   createCart,
//   getCart,
//   updateCart,
//   deleteCart,
//   createCheckOut,
//   getCheckOut,
//   updateCheckOut,
//   deleteCheckOut,
//   createOrderList,
//   getOrderList,
//   updateOrderList,
//   deleteOrderList,
// };
// Import semua pengendali dan ekspor menggunakan export default
import * as UsersController from './UsersController.js';
import * as CategoryController from './CategoryController.js';
import * as KelolaPesananController from './KelolaPesananController.js';
import * as PaymentMethodController from './PaymentMethodController.js';
import * as ProductController from './ProductController.js';
import * as KelolaPelangganController from './KelolaPelangganController.js';
import * as CartController from './CartController.js';
import * as CheckOutController from './CheckOutController.js';
import * as DaftarPesananController from './DaftarPesananController.js';

export default {
  UsersController,
  CategoryController,
  KelolaPesananController,
  PaymentMethodController,
  ProductController,
  KelolaPelangganController,
  CartController,
  CheckOutController,
  DaftarPesananController,
};
