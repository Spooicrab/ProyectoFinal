// Proyecto final: Pagina de reservas y alquileres un camping.

//Verificamos si el usuario ya cargó datos anteriormente en la pagina
window.addEventListener("load", () => {
  if (localStorage.getItem("carpaGrandeCantidad")) {
    CarpaGrande.cantidad = parseInt(
      localStorage.getItem("carpaGrandeCantidad")
    );
  }

  if (localStorage.getItem("carpaChicaCantidad")) {
    Carpachica.cantidad = parseInt(localStorage.getItem("carpaChicaCantidad"));
  }
});

//  //  //
let Productos = [];
let TotalDiario = 0;

//Creamos los objetos de la pagina

const Objeto = function (nombre, precio, cantidad, descripcion) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
  this.descripcion = descripcion;
  Productos.push(this);
};

let CarpaGrande = new Objeto(
  "Carpa Grande",
  15,
  localStorage.getItem("carpaGrandeCantidad"),
  "Carpa Grande con capacidad de 3 a 6 personas"
);
let Carpachica = new Objeto(
  "Carpa Chica",
  12,
  localStorage.getItem("carpaChicaCantidad"),
  "Carpa chica de uso individual o doble"
);
let Mesa = new Objeto("Mesa", 5, 0, "Mesa comun para uso familiar");
let Silla = new Objeto("Silla", 3, 0, "Silla de madera común y resistente");

//  //  //  //

///Consultamos el valor del dolar para mostrarlo en la pagina

fetch("https://criptoya.com/api/dolar")
  .then((response) => response.json())
  .then(({ blue, qatar, ccl }) => {
    dolar1 = document.getElementById("blue");
    dolar1.textContent = `Dolar blue: $${blue}`;

    dolar2 = document.getElementById("qatar");
    dolar2.textContent = `Dolar tarjeta: $${qatar}`;

    dolar3 = document.getElementById("ccl");
    dolar3.textContent = `Contado con liquidación: $${ccl}`;
  });

//  //  //  //  //  //  //  //  //  //  //  //

//Aqui modificamos el DOM cambiando los divs por los valores de los objetos

const titulo1 = document.getElementById("Nombre1");
titulo1.textContent = CarpaGrande.nombre;

const descripcion1 = document.getElementById("descripcion1");
descripcion1.textContent = CarpaGrande.descripcion;

const Cantidad1 = document.getElementById("Cantidad1");
Cantidad1.textContent = `Cantidad: ${CarpaGrande.cantidad}`;

const precio1 = document.getElementById("precio1");
precio1.textContent = `Carpa grande: U$D${CarpaGrande.precio}`;

//Al apretar los botones se suman o restan al TotalDiario (valor que es multiplicado por la cantidad de dias luego para calcular el total de la estadia), también guardamos el valor nuevo de la cantidad en el local storage;

const CarpagSuma = document.getElementById("+1cg");
CarpagSuma.addEventListener("click", function () {
  CarpaGrande.cantidad++;
  localStorage.setItem("carpaGrandeCantidad", CarpaGrande.cantidad.toString());
  Cantidad1.textContent = `Cantidad: ${CarpaGrande.cantidad}`;
  TotalDiario += CarpaGrande.precio;
});

const CarpagResta = document.getElementById("-1cg");
CarpagResta.addEventListener("click", function () {
  if (CarpaGrande.cantidad >= 1 || 0) {
    //Aqui hacemos este arreglito para evitar "elegir una cantidad negativa de carpas"
    CarpaGrande.cantidad--;
    localStorage.setItem(
      "carpaGrandeCantidad",
      CarpaGrande.cantidad.toString()
    );
    Cantidad1.textContent = `Cantidad: ${CarpaGrande.cantidad}`;
    TotalDiario -= CarpaGrande.precio;
  }
});

//  //  // Repetimos el proceso para cada objeto

const titulo2 = document.getElementById("Nombre2");
titulo2.textContent = Carpachica.nombre;

const descripcion2 = document.getElementById("descripcion2");
descripcion2.textContent = Carpachica.descripcion;

const Cantidad2 = document.getElementById("Cantidad2");
Cantidad2.textContent = `Cantidad: ${Carpachica.cantidad}`;

const precio2 = document.getElementById("precio2");
precio2.textContent = `Carpa chica: U$D${Carpachica.precio}`;

const CarpacSuma = document.getElementById("+1cc");
CarpacSuma.addEventListener("click", function () {
  Carpachica.cantidad++;
  localStorage.setItem("carpaChicaCantidad", Carpachica.cantidad.toString());

  Cantidad2.textContent = `Cantidad: ${Carpachica.cantidad}`;
  TotalDiario += Carpachica.precio;
});

const CarpacResta = document.getElementById("-1cc");
CarpacResta.addEventListener("click", function () {
  if (Carpachica.cantidad >= 1 || 0) {
    Carpachica.cantidad--;
    localStorage.setItem("carpaChicaCantidad", Carpachica.cantidad.toString());
    Cantidad2.textContent = `Cantidad: ${Carpachica.cantidad}`;
    TotalDiario -= Carpachica.precio;
  }
});

//  //  //

const titulo3 = document.getElementById("Nombre3");
titulo3.textContent = Mesa.nombre;

const descripcion3 = document.getElementById("descripcion3");
descripcion3.textContent = Mesa.descripcion;

const Cantidad3 = document.getElementById("Cantidad3");
Cantidad3.textContent = `Cantidad: ${Mesa.cantidad}`;

const precio3 = document.getElementById("precio3");
precio3.textContent = `Mesa: U$D${Mesa.precio}`;

const MesaSuma = document.getElementById("+1m");
MesaSuma.addEventListener("click", function () {
  Mesa.cantidad++;
  Cantidad3.textContent = `Cantidad: ${Mesa.cantidad}`;
  TotalDiario += Mesa.precio;
});

const MesaResta = document.getElementById("-1m");
MesaResta.addEventListener("click", function () {
  if (Mesa.cantidad >= 1 || 0) {
    Mesa.cantidad--;
    Cantidad3.textContent = `Cantidad: ${Mesa.cantidad}`;
    TotalDiario -= Mesa.precio;
  }
});

//  //  //

const titulo4 = document.getElementById("Nombre4");
titulo4.textContent = Silla.nombre;

const descripcion4 = document.getElementById("descripcion4");
descripcion4.textContent = Silla.descripcion;

const Cantidad4 = document.getElementById("Cantidad4");
Cantidad4.textContent = `Cantidad: ${Silla.cantidad}`;

const precio4 = document.getElementById("precio4");
precio4.textContent = `Silla: U$D${Silla.precio}`;

const SillaSuma = document.getElementById("+1s");
SillaSuma.addEventListener("click", function () {
  Silla.cantidad++;
  Cantidad4.textContent = `Cantidad: ${Silla.cantidad}`;
  TotalDiario += Silla.precio;
});

const SillaResta = document.getElementById("-1s");
SillaResta.addEventListener("click", function () {
  if (Silla.cantidad >= 1 || 0) {
    Silla.cantidad--;
    Cantidad4.textContent = `Cantidad: ${Silla.cantidad}`;
    TotalDiario -= Silla.precio;
  }
});

//  //  //  //  //  //  //  //  //  //  //  //

//Aqui seteamos el boton donde se generará el resumen

let dias = document.getElementById("dias").value;
const resumen = document.getElementById("resumen");
resumen.addEventListener("click", () => {
  let dias = document.getElementById("dias").value;
  let TOTAL = TotalDiario * dias; //Calculamos el valor total
  let ticket = "<div>";

  if (CarpaGrande.cantidad != 0 || Carpachica.cantidad != 0) {
    //Solo alquilamos con carpas!
    Productos.forEach((Objeto) => {
      if (Objeto.cantidad !== 0) {
        //verificamos qué seleccionó el usuario objeto por objeto del array productos
        ticket += `<p>${Objeto.nombre} - Cantidad: ${Objeto.cantidad}</p>`;
      }
    });

    ticket += `<h2>Total: u$d${TOTAL} </h2></div>`;

    Swal.fire({
      title: "Resumen",
      html: ticket,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Confirmar",
      confirmButtonAriaLabel: "Confirmar",
      cancelButtonText: "Volver",
      cancelButtonAriaLabel: "Volver",
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-secondary",
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.confirm) {
        Swal.fire(
          "GRACIAS!",
          "La reserva ha sido hecha exitosamente.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        ticket = "<div>"; // con esto evitamos que los ticket se stackeen
      }
    });
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "Elija al menos ún tipo de carpa",
    });
  }
});
