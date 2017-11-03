'use Strict';
var user1 = new Usuario(productos);
user1.calcularImporte();
user1.mostrarCompra();
if(navigator.cookieEnabled == false){
  alert("Las cookies no estan habilitadas");
}
function eliminar(){
  user1.eliminarCompra();
  user1.calcularImporte();
  user1.mostrarCompra();
}
function hacerPedido(){
  if(user1.compra.length != 0){
    var respuesta = confirm("Quiere finalizar el pedido?");
    if(respuesta) {
        location.href("pedidoOK.html")
    } else {
        alert("Continue comprando");
    }

  }
}
function imprimir(){
    window.print();
}

function inicio(){
  location.href="home.html";

}
function condCompraOnline(){
window.open("condCompra.html","width:500,heigth:500,top:200,left:200");
}
