# InventoryManagerApp

## Deskripsi Proyek
InventoryManagerApp adalah aplikasi manajemen inventaris yang dirancang untuk membantu pengguna melacak dan mengelola barang-barang inventaris mereka. Aplikasi ini mencakup fitur-fitur seperti menambah, menghapus, dan memperbarui item inventaris, serta manajemen pengguna dan transaksi.

## Fitur Utama
- **Manajemen Item:** Tambah, hapus, dan perbarui informasi item inventaris.
- **Manajemen Pengguna:** Buat dan kelola pengguna dengan berbagai level akses.
- **Manajemen Transaksi:** Lacak transaksi masuk dan keluar dari inventaris.
- **Antarmuka Pengguna:** Antarmuka web yang mudah digunakan untuk mengelola inventaris.

## Struktur Direktori
```plaintext
InventoryManagerApp/
├── README.md
├── .gitignore
├── LICENSE
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── backend/
│   ├── server.js
│   └── routes/
│       ├── items.js
│       ├── users.js
│       └── transactions.js
├── database/
│   ├── schema.sql
│   ├── seed.sql
│   └── config.js
└── tests/
    ├── test_items.js
    ├── test_users.js
    └── test_transactions.js
