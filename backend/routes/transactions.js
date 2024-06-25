const express = require('express');
const router = express.Router();

let users = [];

// Get all users
router.get('/users', (req, res) => {
    res.json(users);
});

// Add a new user
router.post('/users', (req, res) => {
    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.json(newUser);
});

// Update a user
router.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users[userIndex].name = req.body.name;
        users[userIndex].email = req.body.email;
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Delete a user
router.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser[0]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;

