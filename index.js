
class ProductManager{    
    constructor(){
        this.products = []
    }

    addProduct(title,description,price,thumbnail,stock){
        const product ={
            id: this.#generarId(),
            title,
            description,
            price,
            thumbnail,
            code: this.#generarCode(),
            stock
        }

        try {
            if (!title || !description || !price || !thumbnail || !stock) {
              throw new Error(`Complete todos los parametros requeridos`)
            } else {
              this.products.push(product)
            }
          } catch (error) {
            console.log(`Problema agregando producto: ${error.message}`)
          }
        }
      
        getProducts() {
          try {
            console.log(this.products)
          } catch (error) {
            console.log(`Error obteniendo todos los productos: ${error.message}`)
          }
    }
    
        getProductById(id){
        try {
          const idProduct = this.products.filter(product => product.id === id)
          if (idProduct.length > 0) {
            console.log(idProduct[0]);
          } else throw new Error(`Not found`)
        } catch (error) {
          console.log(`Problema al buscar producto con el id ${id}: ${error.message}`)
        }
    }     

    #generarId(){
      const id =
          this.products.length === 0
          ? 1
          : this.products[this.products.length - 1].id + 1
      return id
    }

    #generarCode(codeLength = 15){
      const numeros = "057829175"
      const letras = "ajhdfsjjANXLOJDFA"
      const mezcla = numeros + letras
      let code = ""
      for (let i = 0; i < codeLength; i++) {
        const random = Math.floor(Math.random() * mezcla.length)
        code += mezcla.charAt(random)
      }
      return code
    }
    
}

const manager = new ProductManager()
manager.addProduct("remera", "remera negra ", 11000, "No tiene imagen", 8)
manager.addProduct("pantalon", "pantalon deportivo nike gris", 18500, "No tiene imagen", 6)
manager.addProduct("gorro", "gorra adidas negra", 5600, "No tiene imagen", 10)
console.log(manager)