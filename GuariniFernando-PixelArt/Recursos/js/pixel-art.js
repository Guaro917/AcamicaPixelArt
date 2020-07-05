var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicador = document.getElementById("indicador-de-color");
var mouseApretado = false;
$(document).mousedown(function() {
    mouseApretado = true;
}).mouseup(function() {
    mouseApretado = false;
});


$(document).ready( function(){
});


colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value1;
    indicador.style.backgroundColor = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
  })
);

for (var i=0;i<nombreColores.length;i++) {
  var nuevoColor = document.createElement("div");
  nuevoColor.style.backgroundColor = nombreColores[i];
  $(nuevoColor).addClass("color-paleta");    
  paleta.appendChild(nuevoColor);
}

for (var j=0;j<1749;j++) {
  var nuevoPixel = document.createElement("div");
  grillaPixeles.appendChild(nuevoPixel);
}

      
$( "div.color-paleta" ).click(function() {
  var colores = $( this ).css( "background-color" );
  indicador.style.backgroundColor = colores;
});

$("#grilla-pixeles div").click(function() {
  $(this).css( "background-color", indicador.style.backgroundColor);
});

grillaPixeles.addEventListener("mouseover", pintar);

function pintar(e) {
  if(mouseApretado) {
    e.target.style.backgroundColor = indicador.style.backgroundColor;
  }
}

var botonParaBorrar = document.getElementById("borrar");
var grillaPixelesParaBorrar = document.querySelectorAll("#grilla-pixeles div");
$(botonParaBorrar).click(function() { 
  $(grillaPixelesParaBorrar).animate({"background-color": "white"}, 1000);
});

var superImagenes = document.querySelectorAll(".imgs li");

/* Aqui abajotuve que hacer casos separados si bien se que no es la manera optima, el ejercicio no especificaba como hacerlo y no se me ocurrio
como reducirlo a un caso con un bucle, dejo la idea general de lo mas cerca que estuve de hacerlo funcionar:

var superLista [batman, wonder, flash, invisible]

for (i=0;i<superImagenes.length;i++) {
  $(SuperImagenes[0]).click(function() {
    cargarSuperheroe(superLista[i]);
  });
}
si bien aplicando caso por caso en consola cargarSuperheroe(superlista[i]) me funciona, al tratar de que el for haga el trabajo para cada caso
en el codigo recibia por consola este error, Uncaught TypeError: Cannot read property 'length' of undefined el cual me direccionaba hacia recursos.js, 
despues de revisar durante unos dias decidi que ya que el ejercicio no explicaba especificamente como se tenia que realizar y aun sabiendo 
que no es lo mas optimo decidi resolverlo caso a caso, si bien cumple con la consigna me gustaria que de poder me explicaran en la correcion como
resolver esto ya que no lo pude descifrar*/

$(superImagenes[0]).click(function() {
  cargarSuperheroe(batman);
});

$(superImagenes[1]).click(function() {
  cargarSuperheroe(wonder);
});

$(superImagenes[2]).click(function() {
  cargarSuperheroe(flash);
});

$(superImagenes[3]).click(function() {
  cargarSuperheroe(invisible);
});

var botonParaGuardar = document.getElementById("guardar");
$(botonParaGuardar).click(function() { 
  guardarPixelArt();  
});


