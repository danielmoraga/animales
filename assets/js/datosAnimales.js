import animalesApi from "./Consulta.js";
console.log(animalesApi);

document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const animalesapi2 = await Consulta.animalesApi();
  console.log(animalesapi2);
  let nombreEspecie = document.getElementById("animal").value;
  const fotoTemplate = animalesApi.find((a) => a.name == nombreEspecie).imagen;
  console.log(fotoTemplate);
});
