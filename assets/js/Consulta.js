async function animalesApi(){
    let resultado;
    try{
        let promesa = await fetch('http://127.0.0.1:5500/animales.json')
        let resultado = await promesa.json()
        console.log(resultado)
    }
    catch(error){
        console.log(error);
        resultado =null
    }
    return resultado;
}
 animalesApi()

 console.log(animalesApi);


export default animalesApi

