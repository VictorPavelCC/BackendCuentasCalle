import ProductManager from "./ProductManager.js";
const manager = new ProductManager();

const operations = async () => {
    try {
        await manager.getProducts();
         let product1 = await manager.addProduct("A1", "Remera", "Remera Negra", 11000, "No tiene imagen", 10)
         console.log(product1);
         let product2 = await manager.addProduct("A2", "Pantalon", "Pantalon Nike deportivo Gris", 18500, "No tiene imagen", 8)
         console.log(product2)
         let product3 = await manager.addProduct("A3", "Gorro", "Gorra Adidas Negra", 1600, "No tiene imagen", 15)
         console.log(product3)
          let productoId= await manager.getProductById(2)
          console.log(productoId);
         let productAct = await manager.updateProduct(2, {title:"camperas", price:"2000"});
          console.log(productAct);
         let deleteproduct1 = await manager.deleteProducts(3);
         console.log(deleteproduct1)
     } catch (error) {
         console.log(error);
     }
}

operations();