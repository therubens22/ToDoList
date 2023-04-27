const rellenoText = document.querySelector("#rellenoText");
const boton = document.querySelector(".boton");
const contieneTareas = document.querySelector(".contiene-tareas");


boton.addEventListener("click", (e) => {

  const text = rellenoText.value;

  if (text !== "") {
    const nuevoLi = document.createElement("li");
    const parrafo = document.createElement("p");
    parrafo.textContent = text;

    nuevoLi.appendChild(parrafo);
    nuevoLi.appendChild(borraBoton());
    contieneTareas.appendChild(nuevoLi);

    rellenoText.value = "";
   
  }
});

function borraBoton() {
  const eliminar = document.createElement("button");

  eliminar.textContent = "Borrar";
  eliminar.className = "borrar";

  eliminar.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    contieneTareas.removeChild(item);
  });

  return eliminar;
}

  const caja = document.querySelector("#caja");
  const contenedor = document.querySelector("#contenedor");


  contenedor.addEventListener("drop", (e) => {
    console.log("drop");
  }); 