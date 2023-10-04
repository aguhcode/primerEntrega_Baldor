const products = [
    {
        id: "1",
        name: "iPhone 12",
        price: 20000,
        category: "Celular",
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 10,
        description: "Telefono celular marca iPhone"
    },
    {id: "2", name: "Samsung", price: 8000, category:"Celular", img:"https://http2.mlstatic.com/D_NQ_NP_2X_707576-MLU70178569527_062023-F.webp"},
    {id: "3", name: "iPad", price: 18300, category:"tablet", img:"https://http2.mlstatic.com/D_NQ_NP_2X_991281-MLA47871333051_102021-F.webp"},
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
                resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}