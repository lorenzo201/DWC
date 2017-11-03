'use Strict';
function Surtido(productos){
  this.productos =productos;
  this.ordenPrecioMas=function(){
  this.productos.sort(function(p1,p2){
    return p1.precio- p2.precio;
  });
  }
  this.ordenPrecioMenos=function(){
  this.productos.sort(function(p1,p2){
    return p2.precio- p1.precio;
  });
  }
    function verVegano(p){
      return p.Vegano == true;
    }
      this.filtrarVegano=function(){
        var x=this.productos.filter(verVegano);
        return x;
  }

   this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str= "";
    if (produ == undefined){
        for (var i = 0; i < this.productos.length; i++) {
          str += "<div>";
          str += "<img src='" +this.productos[i].foto +"' alt'";
          str += this.productos[i].nombre+ "";
          str +="<p> El producto: "  + this.productos[i].nombre+"</p>";
          str +="<p> Descripcion: "  + this.productos[i].descripcion+"</p>";
          str +="<p><b> Precio: "  + this.productos[i].precio+"€</b></p>";
          str +="</div>";
          this.productos[i];
        }
        cuerpo.innerHTML= str;
}else{
  for (var i = 0; i < produ.length; i++) {
    str += "<div>";
    str += "<img src='" +produ[i].foto +"' alt'";
    str += produ[i].nombre+ "";
    str +="<p> El producto: "  + produ[i].nombre+"</p>";
    str +="<p> Descripcion: "  + produ[i].descripcion+"</p>";
    str +="<p><b> Precio: "    + produ[i].precio+"€</b></p>";
    str +="</div>";
  }
  cuerpo.innerHTML= str;


}
    }
  }
