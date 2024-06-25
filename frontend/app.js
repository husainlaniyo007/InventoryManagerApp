document.addEventListener('DOMContentLoaded', function() {
    const inventoryForm = document.getElementById('inventory-form');
    const inventoryTableBody = document.querySelector('#inventory-table tbody');

    // Load items from local storage when the page is loaded
    loadItemsFromLocalStorage();

    // Event listener for form submission
    inventoryForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const itemName = document.getElementById('item-name').value;
        const itemQuantity = document.getElementById('item-quantity').value;

        if (itemName && itemQuantity) {
            addItemToTable(itemName, itemQuantity);
            saveItemToLocalStorage(itemName, itemQuantity);
            
            // Clear form inputs
            inventoryForm.reset();
        }
    });

    // Function to add item to the table
    function addItemToTable(name, quantity) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${name}</td>
            <td>${quantity}</td>
            <td><button class="delete-button">Hapus</button></td>
        `;
        
        inventoryTableBody.appendChild(row);
    }

    // Function to save item to local storage
    function saveItemToLocalStorage(name, quantity) {
        const items = JSON.parse(localStorage.getItem('inventoryItems')) || [];
        items.push({ name, quantity });
        localStorage.setItem('inventoryItems', JSON.stringify(items));
    }

    // Function to load items from local storage
    function loadItemsFromLocalStorage() {
        const items = JSON.parse(localStorage.getItem('inventoryItems')) || [];
        items.forEach(item => addItemToTable(item.name, item.quantity));
    }

    // Event delegation for delete button
    inventoryTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const row = event.target.parentElement.parentElement;
            const itemName = row.cells[0].textContent;
            row.remove();
            deleteItemFromLocalStorage(itemName);
        }
    });

    // Function to delete item from local storage
    function deleteItemFromLocalStorage(name) {
        let items = JSON.parse(localStorage.getItem('inventoryItems')) || [];
        items = items.filter(item => item.name !== name);
        localStorage.setItem('inventoryItems', JSON.stringify(items));
    }
});

