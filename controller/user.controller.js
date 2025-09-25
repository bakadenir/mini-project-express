const users = [
    { username: "eka", name: "Eka", email: "eka@example.com", role: "seller" },
    { username: "deni", name: "Deni", email: "deni@example.com", role: "buyer" }
    ];
    
    
    export function create(req, res) {
    const { username, name, email, role } = req.body;
    if (!username || !name || !email || !role) {
    return res.status(400).json({ error: "username, name, email, role are required" });
    }
    const allowed = ["buyer", "seller"];
    if (!allowed.includes(role)) return res.status(400).json({ error: "role must be 'buyer' or 'seller'" });
    const exists = users.find(u => u.username === username);
    if (exists) return res.status(409).json({ error: "username already exists" });
    
    
    const newUser = { username, name, email, role };
    users.push(newUser);
    res.status(201).json(newUser);
    }
    
    
    export function findAll(_req, res) {
    res.json(users);
    }
    
    
    export function findByUsername(req, res) {
    const { username } = req.params;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).json({ error: "user not found" });
    res.json(user);
    }