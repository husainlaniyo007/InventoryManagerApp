const express = require('express');
const router = express.Router();

let items = [];

// Get all items
router.get('/items', (req, res) => {
    res.json(items);
});

// Add a new item
router.post('/items', (req, res) => {
    const newItem = {
        id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
        name: req.body.name,
        quantity: req.body.quantity
    };
    items.push(newItem);
    res.json(newItem);
});

// Update an item
router.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        items[itemIndex].name = req.body.name;
        items[itemIndex].quantity = req.body.quantity;
        res.json(items[itemIndex]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Delete an item
router.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1);
        res.json(deletedItem[0]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

module.exports = router;

