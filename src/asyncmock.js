const misProductos = [
    {id:"1", nombre:"Napolitana", descripcion: "Pizza con queso muzzarella, tomate y aceitunas", stock: 10, precio: 1600, img: "../img/napolitana.jpg", idCat:"2"},
    {id:"2", nombre:"Muzzarella", descripcion: "Pizza con queso muzzarella y aceitunas", stock:5, precio: 1500, img: "../img/muzzarella.jpg", idCat:"2"},
    {id:"3", nombre:"Especial", descripcion: "Pizza con queso muzzarella, jamon, aceitunas y morrones", stock:7, precio: 1800, img: "../img/especial.jpg", idCat:"2"},
    {id:"4", nombre:"Carne", descripcion: "Empanadas de carne (no apto vegano)", stock:31, precio: 300, img: "../img/carne.jpg", idCat:"3"},
    {id:"5", nombre:"Atun", descripcion: "Empanadas de atun de peces felices", stock:20, precio: 300, img: "../img/atun.jpg", idCat:"3"},
    {id:"6", nombre:"Jamon", descripcion: "Empanadas de jamon y queso", stock:43, precio: 300, img: "../img/jamon.jpg", idCat:"3"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve (producto);
        }, 100)
    }

    )
}

export const getProductosPorCat = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 200)
    })
}