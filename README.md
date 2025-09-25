# 📦 Express E-Commerce Mini (In-Memory, ESM)

Project sederhana untuk belajar **Express.js** dengan konsep **Routes ↔ Controllers ↔ Data**.  
Data disimpan di **memory** (array di file controller), jadi akan reset setiap kali server di-restart.

---

## 🚀 Cara Menjalankan

1. Clone / buat folder project
2. Install dependency:
   ```bash
   npm install
   ```
3. Jalankan server:
   ```bash
   npm run dev
   ```
4. Buka di browser / Postman:
   ```
   http://localhost:3000
   ```

---

## 📂 Struktur Folder

```
my-express-app/
│
├── package.json
├── server.js
│
├── routes/
│   ├── user.routes.js
│   ├── product.routes.js
│   └── cart.routes.js
│
└── controller/
    ├── user.controller.js
    ├── product.controller.js
    └── cart.controller.js
```

---

## 🛠 Endpoint & Parameter

### 👤 Users

| Method | Endpoint              | Parameter                         | Deskripsi             |
|--------|-----------------------|-----------------------------------|-----------------------|
| POST   | `/users`              | Body JSON: `username, name, email, role (buyer/seller)` | Tambah user baru |
| GET    | `/users`              | –                                 | List semua user       |
| GET    | `/users/:username`    | URL param: `username`             | Ambil user by username |

📌 Contoh body POST `/users`
```json
{
  "username": "atika",
  "name": "Atika",
  "email": "atika@example.com",
  "role": "buyer"
}
```

---

### 📦 Products

| Method | Endpoint                | Parameter                                            | Deskripsi                 |
|--------|-------------------------|------------------------------------------------------|---------------------------|
| POST   | `/products`             | Body JSON: `name, category, price, description?, owner(seller)` | Tambah produk baru |
| GET    | `/products`             | –                                                    | List semua produk         |
| GET    | `/products/:name`       | URL param: `name`                                    | Ambil produk by name      |

📌 Contoh body POST `/products`
```json
{
  "name": "Teh Tarik",
  "category": "Beverage",
  "price": 15000,
  "description": "Teh tarik creamy",
  "owner": "eka"
}
```

---

### 🛒 Carts

| Method | Endpoint                     | Parameter                                            | Deskripsi              |
|--------|------------------------------|------------------------------------------------------|------------------------|
| POST   | `/carts/:username/add`       | URL param: `username`<br>Body JSON: `productName, qty` | Tambah produk ke cart |
| POST   | `/carts/:username/remove`    | URL param: `username`<br>Body JSON: `productName, qty` | Hapus produk dari cart|
| GET    | `/carts/:username`           | URL param: `username`                                | Lihat isi cart user    |

📌 Contoh body POST `/carts/deni/add`
```json
{
  "productName": "Kopi Susu",
  "qty": 2
}
```

📌 Contoh body POST `/carts/deni/remove`
```json
{
  "productName": "Kopi Susu",
  "qty": 1
}
```

---

## ⚡ Seed Data (Default)

Saat server baru jalan, data awal di memory:

### Users
```json
[
  { "username": "eka", "name": "Eka", "email": "eka@example.com", "role": "seller" },
  { "username": "deni", "name": "Deni", "email": "deni@example.com", "role": "buyer" }
]
```

### Products
```json
[
  { "name": "Kopi Susu", "category": "Beverage", "price": 25000, "description": "Kopi susu gula aren", "owner": "eka" }
]
```

### Carts
```json
[
  { "username": "deni", "items": [ { "productName": "Kopi Susu", "qty": 1 } ] }
]
```

---

## 🔑 Catatan
- Semua data **hilang** saat server di-restart (karena disimpan di memory).
- Untuk test API gunakan **Postman** atau **Thunder Client (VS Code extension)**.
- Role penting:
  - **seller** → bisa buat produk
  - **buyer** → bisa punya cart

---

## 🎯 Latihan yang Disarankan
1. Tambah user baru via POST `/users`.
2. Tambah produk baru dengan `owner` seller.
3. Tambah produk ke cart buyer.
4. Hapus produk dari cart.
5. Cek isi cart dengan GET `/carts/:username`.
