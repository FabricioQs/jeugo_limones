function generarAleatorio (min,max){
    let random= Math.random();//0-1
    //Ejemplo: max es 600 minimo es 5
    let numero=random*(max-min);//0-max 0-595
    //EJEMPLO: 0
    let numeroEntero = parseInt(numero);
    numeroEntero=Math.ceil(numero);
    return numeroEntero
}

