const tareaInput = document.getElementById("tareaInput");
const agregarTareaBtn = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

agregarTareaBtn.addEventListener("click", () => {
  const tarea = tareaInput.value;
  if (tarea !== "") {
    const nuevoItem = document.createElement("li");
    nuevoItem.classList.add("list-group-item");
    nuevoItem.textContent = tarea;

    const eliminarBtn = document.createElement("button");
    eliminarBtn.classList.add("btn", "btn-danger", "float-right");
    eliminarBtn.textContent = "Eliminar";

    eliminarBtn.addEventListener("click", () => {
      listaTareas.removeChild(nuevoItem);
    });

    nuevoItem.appendChild(eliminarBtn);
    listaTareas.appendChild(nuevoItem);
    tareaInput.value = "";
  }
});