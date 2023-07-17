const express = require('express');

const expenseController = require('../controllers/expense');
const userauthentication = require('../middleware/auth')

const router = express.Router();

router.post('/expense/addexpense', userauthentication.authenticate, expenseController.addExpense);

router.get('/expense/getexpenses', userauthentication.authenticate, expenseController.getExpenses);

router.delete('/expense/deleteexpense/:expenseid', userauthentication.authenticate, expenseController.deleteExpense);

// router.post('/user/login',userController.postLogin);

module.exports = router;