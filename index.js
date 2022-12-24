class ProductManager {
    constructor(){
        this.products = []
    }

    getProduct(){
        return this.products
    }
    addProduct({title, desc, price, thumbnail, code, stock}){
        
        const findProduct = this.products.find((product) => product.title === title || product.code === code)

        if(findProduct){
            console.log('Error, producto ya ingresado');
        }else{
            const id = this.products.length +1 
            this.products.push({id, title, desc, price, thumbnail, code, stock})
    
        }
    }

    getProductById(id){
        const findProduct = this.products.find((product) => product.id === id)

        if(findProduct){
            console.log('Producto encontrado \n' + JSON.stringify(findProduct));
        }else{
            console.log('No se encontro ningun producto con ese Id');
        }
    }
}

const productManager = new ProductManager()

const newProduct1 = {
    title : 'Fideos',
    desc: 'Comestible',
    price: 200,
    thumbnail: "asd",
    code: 'c1',
    stock: 200
}

const newProduct2 = {
    title : 'Arroz',
    desc: 'Comestible',
    price: 140,
    thumbnail: "asc",
    code: 'c2',
    stock: 200
}


productManager.addProduct(newProduct1)
productManager.addProduct(newProduct2)


console.log(productManager.getProductById(1));

