import express from 'express';
import pool from '../db.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// POST a new order
router.post('/', auth, async (req, res) => {
    const { items, total_price } = req.body;
    const user_id = req.user.id;

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // 1. Insert into orders table
        const [orderResult] = await connection.query(
            'INSERT INTO orders (user_id, total_price) VALUES (?, ?)',
            [user_id, total_price]
        );
        const orderId = orderResult.insertId;

        // 2. Insert items into order_items table
        for (const item of items) {
            await connection.query(
                'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
                [orderId, item.id, item.quantity || 1, item.price.replace('$', '')]
            );
        }

        await connection.commit();
        res.status(201).json({ message: 'Order placed successfully', orderId });
    } catch (error) {
        await connection.rollback();
        console.error(error);
        res.status(500).json({ message: 'Server error placing order' });
    } finally {
        connection.release();
    }
});

// GET all orders for logged in user
router.get('/me', auth, async (req, res) => {
    try {
        const [orders] = await pool.query(
            'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
            [req.user.id]
        );
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error fetching your orders' });
    }
});

export default router;
