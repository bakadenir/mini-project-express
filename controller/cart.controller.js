// data seed cart (in-memory)
const carts = [
    { username: "deni", items: [ { productName: "Kopi Susu", qty: 1 } ] }
  ];
  
  // fungsi tambah item
  export function addItem(req, res) {
    const { username } = req.params;
    const { productName, qty } = req.body;
    const quantity = Number(qty ?? 1);
    if (!productName || quantity <= 0) {
      return res.status(400).json({ error: "productName and qty(>0) are required" });
    }
  
    const user = UserController2.__getUsers().find(u => u.username === username);
    if (!user) return res.status(400).json({ error: "user not found" });
    if (user.role !== "buyer") return res.status(403).json({ error: "only buyer can have a cart" });
  
    const product = ProductController.__getProducts().find(
      p => p.name.toLowerCase() === productName.toLowerCase()
    );
    if (!product) return res.status(400).json({ error: "product not found" });
  
    let cart = carts.find(c => c.username === username);
    if (!cart) {
      cart = { username, items: [] };
      carts.push(cart);
    }
  
    const item = cart.items.find(i => i.productName.toLowerCase() === product.name.toLowerCase());
    if (item) {
      item.qty += quantity;
    } else {
      cart.items.push({ productName: product.name, qty: quantity });
    }
  
    res.status(201).json(cart);
  }
  
  // fungsi hapus item
  export function removeItem(req, res) {
    const { username } = req.params;
    const { productName, qty } = req.body;
    const quantity = Number(qty ?? 1);
    if (!productName || quantity <= 0) {
      return res.status(400).json({ error: "productName and qty(>0) are required" });
    }
  
    const cart = carts.find(c => c.username === username);
    if (!cart) return res.status(404).json({ error: "cart not found" });
  
    const idx = cart.items.findIndex(i => i.productName.toLowerCase() === productName.toLowerCase());
    if (idx === -1) return res.status(404).json({ error: "item not in cart" });
  
    cart.items[idx].qty -= quantity;
    if (cart.items[idx].qty <= 0) cart.items.splice(idx, 1);
  
    res.json(cart);
  }
  
  // fungsi lihat cart
  export function getCart(req, res) {
    const { username } = req.params;
    const cart = carts.find(c => c.username === username) ?? { username, items: [] };
    res.json(cart);
  }
  
  // helper optional
  export function __getCarts() {
    return carts;
  }
  