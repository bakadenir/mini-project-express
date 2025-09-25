const products = [
    { name: "Kopi Susu", category: "Beverage", price: 25000, description: "Kopi susu gula aren", owner: "eka" }
    ];
    
    
    // akses users dari user.controller untuk validasi owner? (untuk pemula, kita import ulang di file ini)
    import * as UserController from "./user.controller.js";
    
    
    export function create(req, res) {
    const { name, category, price, description, owner } = req.body;
    if (!name || !category || typeof price !== "number" || !owner) {
    return res.status(400).json({ error: "name, category, price(number), owner are required" });
    }
    // owner harus ada & role seller
    const seller = UserController.__getUsers().find(u => u.username === owner);
    if (!seller) return res.status(400).json({ error: "owner (seller username) not found" });
    if (seller.role !== "seller") return res.status(403).json({ error: "owner must have role 'seller'" });
    
    
    const exists = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (exists) return res.status(409).json({ error: "product name already exists" });
    
    
    const newProduct = { name, category, price, description: description ?? "", owner };
    products.push(newProduct);
    res.status(201).json(newProduct);
    }
    
    
    export function findAll(_req, res) {
    res.json(products);
    }
    
    
    export function findByName(req, res) {
    const { name } = req.params;
    const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (!product) return res.status(404).json({ error: "product not found" });
    res.json(product);
    }
    
    
    // Helper agar controller lain bisa baca daftar products (optional untuk latihan)
    export function __getProducts() { return products; }