const express = require('express');
const router = express.Router();

let transactions = [];

// Get all transactions
router.get('/transactions', (req, res) => {
    res.json(transactions);
});

// Add a new transaction
router.post('/transactions', (req, res) => {
    const newTransaction = {
        id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1,
        item: req.body.item,
        quantity: req.body.quantity,
        type: req.body.type, // 'in' for incoming, 'out' for outgoing
        date: new Date()
    };
    transactions.push(newTransaction);
    res.json(newTransaction);
});

// Update a transaction
router.put('/transactions/:id', (req, res) => {
    const transactionId = parseInt(req.params.id);
    const transactionIndex = transactions.findIndex(transaction => transaction.id === transactionId);
    if (transactionIndex !== -1) {
        transactions[transactionIndex].item = req.body.item;
        transactions[transactionIndex].quantity = req.body.quantity;
        transactions[transactionIndex].type = req.body.type;
        res.json(transactions[transactionIndex]);
    } else {
        res.status(404).json({ message: 'Transaction not found' });
    }
});

// Delete a transaction
router.delete('/transactions/:id', (req, res) => {
    const transactionId = parseInt(req.params.id);
    const transactionIndex = transactions.findIndex(transaction => transaction.id === transactionId);
    if (transactionIndex !== -1) {
        const deletedTransaction = transactions.splice(transactionIndex, 1);
        res.json(deletedTransaction[0]);
    } else {
        res.status(404).json({ message: 'Transaction not found' });
    }
});

module.exports = router;

