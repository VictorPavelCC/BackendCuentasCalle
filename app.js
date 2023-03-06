import express from "express";
import ProductManager from "./ProductManager.js";


const app = express();

let port = 8080;
let manager = new ProductManager("./data/Products.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<h3>Bienvenido al servidor</h3>`);
});


app.get("/products", async (req, res) => {
  try {
    const products = await manager.getProducts();
    let { limit } = req.query;

    if (limit) {
      if (isNaN(limit)) {
        throw new Error("solicitud Invalida");
      }
      let filterProducts = products.slice(0, limit);
      res.send(filterProducts);
    } else {
      res.send(products);
    }
  } catch (error) {
    res.json({ Error: error.message });
  }
});

app.get("/products/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await manager.getProductsById(Number(pid));

    if (!product) throw new Error("Producto no encontrado");

    res.send(product);
  } catch (error) {
    res.json({ Error: error.message });
  }
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server listo", port);
});