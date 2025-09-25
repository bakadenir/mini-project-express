import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);

app.get("/", (_req, res) => res.json({ message: "API is running" }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
