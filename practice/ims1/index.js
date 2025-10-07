const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Route Imports
const CategoryRouter = require('./routes/category-route');
const BrandRouter = require('./routes/brand-route');
const wareHouse = require('./routes/wareHouse-route');
const SellItemRouter = require('./routes/sellitem-router');
const BillRouter = require('./routes/bill-route');
const CustomerRouter = require('./routes/customer-route');
const ProductRouter = require('./routes/product-route');
const StockRouter = require('./routes/stock-route');
const SupplierRouter = require('./routes/supplier-route');
const transactionRouter = require('./routes/transaction-route');
const paymentTypesRouter = require('./routes/paymentTypes-route');
const ExpenseRouter = require('./routes/expense-router');
const userRouter = require('./routes/user-router');
const roleRouter = require('./routes/role-router');
const ExpenseCategoryRouter = require('./routes/expenseCategory-route');
const logsRouter = require('./routes/logs-route');
const TokenRouter = require('./routes/token-route');

// Routes
app.use('/category', CategoryRouter);
app.use('/brand', BrandRouter);
app.use('/wareHouse', wareHouse);
app.use('/sellitem', SellItemRouter);
app.use('/bill', BillRouter);
app.use('/customer', CustomerRouter);
app.use('/product', ProductRouter);
app.use('/stock', StockRouter);
app.use('/supplier', SupplierRouter);
app.use('/transaction', transactionRouter);
app.use('/paymentTypes', paymentTypesRouter);
app.use('/expense', ExpenseRouter);
app.use('/user', userRouter);
app.use('/role', roleRouter);
app.use('/expenseCategory', ExpenseCategoryRouter);
app.use('/logs', logsRouter);
app.use('/token', TokenRouter);

// Server Setup
const PORT = process.env.PORT || 9988;
const HOST = '0.0.0.0'; // Allow access from local network

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`✅ Server is running and accessible at: http://192.168.0.103:${PORT}`);
  }
});
