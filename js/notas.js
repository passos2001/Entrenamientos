// ================== notas.js ==================

// Referencias a elementos del DOM
const notaForm = document.getElementById("notaForm");
const tituloInput = document.getElementById("titulo");
const contenidoInput = document.getElementById("contenido");
const notasContainer = document.getElementById("notasContainer");
const volverBtn = document.getElementById("volver");

// ================== Funciones ==================

// Obtener notas desde localStorage
function getNotas() {
    return JSON.parse(localStorage.getItem("notas")) || [];
}

// Guardar notas en localStorage
function saveNotas(notas) {
    localStorage.setItem("notas", JSON.stringify(notas));
}

// Renderizar notas en pantalla
function renderNotas() {
    notasContainer.innerHTML = "";
    const notas = getNotas();

    notas.forEach((nota, index) => {
        const div = document.createElement("div");
        div.classList.add("nota");

        div.innerHTML = `
      <h3>${nota.titulo}</h3>
      <p>${nota.contenido}</p>
      <div class="acciones">
        <button class="editar">✏ Editar</button>
        <button class="eliminar">🗑 Eliminar</button>
      </div>
    `;

        // Acción de eliminar
        div.querySelector(".eliminar").addEventListener("click", () => {
            eliminarNota(index);
        });

        // Acción de editar
        div.querySelector(".editar").addEventListener("click", () => {
            editarNota(index);
        });

        notasContainer.appendChild(div);
    });
}

// Agregar nueva nota
notaForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = tituloInput.value.trim();
    const contenido = contenidoInput.value.trim();

    if (titulo && contenido) {
        const notas = getNotas();
        notas.push({ titulo, contenido });
        saveNotas(notas);

        tituloInput.value = "";
        contenidoInput.value = "";
        renderNotas();
    }
});

// Eliminar nota
function eliminarNota(index) {
    const notas = getNotas();
    notas.splice(index, 1);
    saveNotas(notas);
    renderNotas();
}

// Editar nota
function editarNota(index) {
    const notas = getNotas();
    const nota = notas[index];

    // Cargar en inputs
    tituloInput.value = nota.titulo;
    contenidoInput.value = nota.contenido;

    // Eliminar nota original y esperar que usuario guarde
    notas.splice(index, 1);
    saveNotas(notas);
    renderNotas();
}

// Botón volver (regresa a la página anterior)
volverBtn.addEventListener("click", () => {
    window.history.back();
});

// Render inicial
renderNotas();
