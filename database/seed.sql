INSERT INTO users (username, password, email) VALUES 
('admin', 'password123', 'admin@example.com'),
('user1', 'password123', 'user1@example.com');

INSERT INTO items (name, quantity, description) VALUES 
('Item A', 100, 'Description for Item A'),
('Item B', 50, 'Description for Item B');

INSERT INTO transactions (user_id, item_id, transaction_date, quantity) VALUES 
(1, 1, '2024-06-25 10:00:00', 10),
(2, 2, '2024-06-26 12:00:00', 5);
