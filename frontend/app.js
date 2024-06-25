<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory Manager APP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 1rem 0;
            text-align: center;
        }
        .container {
            padding: 2rem;
        }
        form {
            margin-bottom: 2rem;
        }
        form input, form button {
            padding: 0.5rem;
            margin: 0.5rem 0;
            display: block;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #ccc;
        }
        th, td {
            padding: 1rem;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <header>
        <h1>Inventory Manager APP</h1>
    </header>
    <div class="container">
        <form id="inventory-form">
            <label for="item-name">Nama Item:</label>
            <input type="text" id="item-name" required>
            
            <label for="item-quantity">Jumlah:</label>
            <input type="number" id="item-quantity" required>
            
            <button type="submit">Tambah Item</button>
        </form>
        
        <table id="inventory-table">
            <thead>
                <tr>
                    <th>Nama Item</th>
                    <th>Jumlah</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <!-- Data inventaris akan ditampilkan di sini -->
            </tbody>
        </table>
    </div>

    <script>
        document.getElementById('inventory-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const itemName = document.getElementById('item-name').value;
            const itemQuantity = document.getElementById('item-quantity').value;
            
            addItemToTable(itemName, itemQuantity);
            
            document.getElementById('item-name').value = '';
            document.getElementById('item-quantity').value = '';
        });

        function addItemToTable(name, quantity) {
            const tableBody = document.querySelector('#inventory-table tbody');
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${name}</td>
                <td>${quantity}</td>
                <td><button onclick="deleteItem(this)">Hapus</button></td>
            `;
            
            tableBody.appendChild(row);
        }

        function deleteItem(button) {
            const row = button.parentElement.parentElement;
            row.remove();
        }
    </script>
</body>
</html>

