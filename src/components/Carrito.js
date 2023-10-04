

let carrito = [];

let agregarCarrito = new Promise (function(resolve,reject){
    setTimeout(function(){
        let tiempo = Math.random();
        if( tiempo < 0.4 ){
            carrito.push("Se agrego al carrito");
            resolve(carrito);
        }
        else{
            reject("No se pudo cargar al carrito")
        }
    }, 2000)
});

agregarCarrito
            .then((carrito)=>{
                console.log("Todo salio bien");
                console.log(carrito);
            })
            .catch((error)=> console.log(error));