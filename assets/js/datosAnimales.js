import animalesApi from "./Consulta.js";
import Leon from './Leon.js';
import Aguila from './Aguila.js';
import Lobo from './Lobo.js';
import Oso from './Oso.js';
import Serpiente from './Serpiente.js';

let listaAnimales =[];
document.getElementById("animal").addEventListener("change", async () => {
  const {animales} = await animalesApi.getData()
  let divPreview = document.getElementById("preview");
  divPreview.innerHTML = "";
  divPreview.style.display="flex";
  divPreview.style.justifyContent="center";
  divPreview.style.alignItems="center";
  let image = document.createElement("img")
  let nombreEspecie = document.getElementById("animal").value;  
  image.src=`/assets/imgs/${animales.find((a) => a.name == nombreEspecie).imagen}`;
  image.style.minWidth = "100px";
  image.style.maxHeight = "200px";

 
  divPreview.appendChild(image)

})



document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const {
    animales
  } = await animalesApi.getData()
  //console.log(animales);
  let nombreEspecie = document.getElementById("animal").value;
  let edadEspecie = document.getElementById("edad").value;
  let comentario = document.getElementById("comentarios").value;
  //console.log(animales.find((a) => a.name == nombreEspecie));
  const foto = animales.find((a) => a.name == nombreEspecie).imagen;
  const sonido = animales.find((a) => a.name == nombreEspecie).sonido;
  let animal= null;

  switch (nombreEspecie) {
    case "Leon":
      animal = new Leon(nombreEspecie, edadEspecie, foto, comentario, sonido)
      break;

    case "Lobo":
      animal = new Lobo(nombreEspecie, edadEspecie, foto, comentario, sonido)
      break

    case "Oso":
      animal = new Oso(nombreEspecie, edadEspecie, foto, comentario, sonido)
      break

    case "Serpiente":
      animal = new Serpiente(nombreEspecie, edadEspecie, foto, comentario, sonido)
      break    

    case "Aguila":
      animal = new Aguila(nombreEspecie, edadEspecie, foto, comentario, sonido)
      break       
  }

  if(animal !=null){
    listaAnimales.push(animal)
    cargarAnimales()

  }
  document.getElementById("animal").value ="Seleccione un animal";
  document.getElementById("edad").value = "Seleccione un rango de años";
  document.getElementById("comentarios").value = "";
  document.getElementById("preview").innerHTML = "";
});

let cargarSonido = (idAnimal)=>{
  switch (listaAnimales[idAnimal].nombre) {
    case "Leon":
      listaAnimales[idAnimal].rugir();
      break;

    case "Lobo":
      listaAnimales[idAnimal].aullar();          
      break

    case "Oso":
      listaAnimales[idAnimal].grunir();          
      break

    case "Serpiente":
      listaAnimales[idAnimal].sisear();            
      break    

    case "Aguila":
      listaAnimales[idAnimal].sisear();            
      break       
  }
}

let cargarAnimales =()=>{
  let contenedorLista = document.getElementById("Animales");
  contenedorLista.innerHTML=""
  for(let i=0; i<listaAnimales.length;i++){
    let anim = listaAnimales[i]
    let card = `<div class="card m-3" style="width: 18rem;">
    <img src="assets/imgs/${anim.img}" id="animal_${i}"class="card-img-top" alt="...">
    <div class="card-body">
    <button id="botonSonido_${i}" class="btn btn-primary boton">Play</button>
    </div>
    </div> 
    `
    contenedorLista.innerHTML+=card;

    let animalImagen = document.getElementById(`animal_${i}`)
    let animaSonido = document.getElementById(`botonSonido_${i}`)


    //animalImagen.addEventListener("click",()=>{
//
    //})
    animaSonido.addEventListener("click",cargarSonido)
    animaSonido.idAnimal=i;
     
      
    

   



    
  }

  

}

/*
 let card = `<div class="card m-3" style="width: 18rem;">
    <img src="assets/imgs/${anim.img}" id="animal_${i}"class="card-img-top" alt="...">
    <div class="card-body">
    <audio id="player_${i}" src="assets/sounds/${anim.sonido}"></audio>
    <button id="botonSonido_${i}" class="btn btn-primary boton" onclick="document.getElementById('player_${i}').play()">Play</button>
    </div>
    </div> 
*/