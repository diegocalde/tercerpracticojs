// Obtener elementos del HTML
const tituloInput = document.querySelector("#titulo");
const autorInput = document.querySelector("#autor");
const editorialInput = document.querySelector("#editorial");
const button = document.querySelector(".btn");
const listaLibros = document.querySelector("#lista-libros");
const formulario = document.querySelector("#book-form");
const selectLibros = document.querySelector("#select-libros"); // Elemento select

// Lista de libros predefinidos
const librosPredefinidos = [
  {
    titulo: "Harry Potter and the Sorcerer's Stone",
    autor: "J.K. Rowling",
    editorial: "Scholastic",
  },
  {
    titulo: "To Kill a Mockingbird",
    autor: "Harper Lee",
    editorial: "HarperCollins",
  },
  {
    titulo: "The Great Gatsby",
    autor: "F. Scott Fitzgerald",
    editorial: "Scribner",
  },
  { titulo: "1984", autor: "George Orwell", editorial: "Penguin" },
  {
    titulo: "Pride and Prejudice",
    autor: "Jane Austen",
    editorial: "Penguin Classics",
  },
  {
    titulo: "The Hobbit",
    autor: "J.R.R. Tolkien",
    editorial: "Houghton Mifflin Harcourt",
  },
  {
    titulo: "The Catcher in the Rye",
    autor: "J.D. Salinger",
    editorial: "Little, Brown and Company",
  },
  {
    titulo: "Brave New World",
    autor: "Aldous Huxley",
    editorial: "HarperCollins",
  },
  {
    titulo: "The Lord of the Rings",
    autor: "J.R.R. Tolkien",
    editorial: "Houghton Mifflin Harcourt",
  },
  {
    titulo: "To Kill a Mockingbird",
    autor: "Harper Lee",
    editorial: "HarperCollins",
  },
];

// Cargar libros del localStorage si existen
let librosGuardados = JSON.parse(localStorage.getItem("listaLibros")) || [];

// Llenar el menú desplegable con los libros predefinidos
librosPredefinidos.forEach((libro, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = libro.titulo;
  selectLibros.appendChild(option);
});

// Agregar listener al menú desplegable
selectLibros.addEventListener("change", (event) => {
  const libroSeleccionado = librosPredefinidos[event.target.value];
  tituloInput.value = libroSeleccionado.titulo;
  autorInput.value = libroSeleccionado.autor;
  editorialInput.value = libroSeleccionado.editorial;
});

// Agregar listener al formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Crear libro a partir de los campos del formulario
  const nuevoLibro = {
    titulo: tituloInput.value,
    autor: autorInput.value,
    editorial: editorialInput.value,
  };

  // Agregar libro a la lista de libros guardados
  librosGuardados.push(nuevoLibro);

  // Guardar lista de libros en el localStorage
  localStorage.setItem("listaLibros", JSON.stringify(librosGuardados));

  // Crear una nueva fila en la tabla con los datos del libro
  const nuevaFila = document.createElement("tr");
  const celdaTitulo = document.createElement("td");
  celdaTitulo.textContent = nuevoLibro.titulo;
  const celdaAutor = document.createElement("td");
  celdaAutor.textContent = nuevoLibro.autor;
  const celdaEditorial = document.createElement("td");
  celdaEditorial.textContent = nuevoLibro.editorial;

  nuevaFila.appendChild(celdaTitulo);
  nuevaFila.appendChild(celdaAutor);
  nuevaFila.appendChild(celdaEditorial);

  listaLibros.appendChild(nuevaFila);

  // Limpiar campos del formulario
  tituloInput.value = "";
  autorInput.value = "";
  editorialInput.value = "";
});
//los libros se mostraran en la consola para verificar que estan en el almacenamientp local
console.log("Libros almacenados en el localStorage:");
librosGuardados.forEach((libro, index) => {
    console.log(`Libro ${index + 1}:`);
    console.log("Título:", libro.titulo);
    console.log("Autor:", libro.autor);
    console.log("Editorial:", libro.editorial);
    console.log("---------------");
});
