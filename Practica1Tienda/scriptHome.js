var p = new Surtido(productos);
var micompra =[productos[0],productos[3],productos[5]];
p.dibujarSurtido(micompra);

function recarga(){
p.dibujarSurtido(location.reload());
}
function verPorPrecioMas(p){
  p.ordenPrecioMas();
  p.dibujarSurtido();
}
function verPorPrecioMenos(p){
  p.ordenPrecioMenos();
  p.dibujarSurtido();
}

function verVegano(){
    p.dibujarSurtido(p.filtrarVegano());
}

function navegarCarrito(){
location.href = "carrito.html";
}

function condCompraOnline(){
window.open("condCompra.html","width:500,heigth:500,top:200,left:200");

}
