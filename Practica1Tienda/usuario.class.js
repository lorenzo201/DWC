'use Strict';
function Usuario(compra){
  this.id =(Math.random() * 1000)+1;
    this.idioma= navigator.language;
    this.navegador = navigator.userAgent;
    this.compra = compra;
    this.importe = 0;

    this.eliminarCompra = function(){
      if(this.compra.length>0){
        this.compra.pop();
      }else {
        alert("Esta Vacio el carrito de la compra");
      }
    }
    this.calcularImporte = function(){
      if (this.compra.length>0) {
        this.importe= this.compra.reduce(function(total,n){
          return total + n.precio;
        },0);
      }else {
          alert("Esta Vacio el carrito de la compra");
      }
    }
    this.mostrarCompra = function(compra){
      cuerpo.innerHTML = "";
      var str = "";
      if (compra == undefined) {

        for (var i = 0; i <this.compra.length; i++) {

          str += "<div>";
          str += "<img src='" + this.compra[i].foto+ "' alt = '"
          str += this.compra[i].nombre + "'>";
          str += "<p>Producto: "+this.compra[i].nombre + "</p>";
          str += "<p>" + this.compra[i].descripcion + "</p>";
          str += "<p><b>"+this.compra[i].precio + "</b></p>";
          str += "</div>";
        }
      }else{
        for (var i = 0; i < compra.length; i++) {
          this.importe =+ compra[i].precio;
          str += "<div>";
          str += "<img src='" +compra[i].foto+ "' alt = '"
          str += compra[i].nombre + "'>";
          str += "<p>Producto: "+compra[i].nombre + "</p>";
          str += "<p>" +compra[i].descripcion + "</p>";
          str += "<p><b>"+compra[i].precio+"</b></p>";
          str += "</div>";
        }
      }
      cuerpo.innerHTML = str+"<hr>"+this.importe;
    }
  }
