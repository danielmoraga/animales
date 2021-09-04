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
  let image = document.createElement("img")
  let nombreEspecie = document.getElementById("animal").value;  
  image.src=`/assets/imgs/${animales.find((a) => a.name == nombreEspecie).imagen}`;
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
  }
  console.log(listaAnimales);

});