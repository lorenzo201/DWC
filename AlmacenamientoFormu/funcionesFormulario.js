/*Cuando pongamos el foco en un elemento, este elemento pasará a tener
únicamente un borde morado que perderá cuando pierda el foco.*/
onload = function(){
       function focoMorado(e){
         e.target.style.outline = "purple solid 2px";
       }
       function sinfoco(e){
         e.target.style.outline="none";
       }
       inputs = document.querySelectorAll("input");

       for (var i = 0; i < inputs.length; i++) {
         select = document.querySelector("select");
         inputs[i].addEventListener("focus",focoMorado);
         select.addEventListener("focus",focoMorado);
       }
       for (var i = 0; i < inputs.length; i++) {
         select = document.querySelector("select");
         inputs[i].addEventListener("blur",sinfoco);
         select.addEventListener("blur",sinfoco);
       }



       /*Antes de enviar el formulario, comprueba que:
       i. el nombre y el apellido no son nulos y tiene caracteres que tienen sentido
       para un nombre y apellidos*/
       var formulario = document.forms[0];
       formulario.onsubmit =function(){

         /*Aqui pongo el setCookies */
        function setCookie(name,value,days) {
        if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = ";expires="+date.toGMTString();
         }
         else var expires = "";
         document.cookie = name+"="+value+expires+";path=/";
         console.log(document.cookie);
       }


          var error = document.getElementsByClassName("errores")[0];
          var errList ="";
          var ret = true;
          var nomb = document.getElementsByName('nombre')[0].value;
          if(nomb == null || nomb.length==0 || !(/^\S+$/.test(nomb))){
            errList += "Error,escribe tu nombre (es obligatorio) <br/>";
            ret = false;
          }
          var apellidos = document.getElementsByName('apellidos')[0].value;
          if(apellidos == null || apellidos.length==0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
            ret = false;
            errList += "Error,escribe  tu apellido (es obligatorio) <br/>";
          }

          /*el email tiene un formato de email válido y coincide con el email repetido.*/
            var email = document.getElementsByName("email")[0].value;
            if ( ! (/^\w+([\.\-\+]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/.test(email)) ){
              errList += "Error,escribe tu correo (es obligatorio) <br/>";
              ret = false;
            }
            var emailRepe = document.getElementById("emailRepe").value;
            if(email != emailRepe){
              errList += "Error, no coinciden los 2 correos.<br/>";
              ret = false;
              }
              /*el DNI está formado por 8 caracteres seguidos de una letra mayúscula o
              minúscula y es un DNI válido*/
              var dni = document.getElementById("dni").value;
              if(dni == null || dni.length==0 || !(/^\d{8}[a-zA-Z]$/.test(dni))){
                errList += "Error,escribe bien tu dni (es obligatorio) <br/>";
                ret = false;
              }

              /*el usuario es mayor de 18 años (comprueba teniendo en cuenta años, meses
              y días).*/
              var fecha = (document.getElementsByName('fecha')[0].value).split('-');
              var ano=fecha[0];
              var mes=fecha[1];// de 0 a 11
              var dia=fecha[2];// 1 a 31
              console.log(dia + " " + mes + " " + " " + ano);
              var nf= new Date(ano,(mes - 1),dia);
              console.log(nf);
              var hoy = new Date();
              //resto los años de las dos fechas
              var edad = hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año
              //si resto los meses y me da mayor que 0, ha cumplido años
              if (hoy.getMonth() + 1 - mes > 0){
                edad++;
              }
              //si resto los dias y me da menor que 0 entonces no ha cumplido años.
              //si da mayor o igual si ha cumplido
              if (hoy.getUTCDate() - dia >= 0){
                edad++;
              }
              if ( isNaN(nf) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 0 || ano >= hoy.getFullYear()){
                errList += "Error en la fecha, introducelo bien <br/>"
                ret = false;
              }else if (edad < 18){
                errList += "Error, eres menor de edad no puede inscribirse <br/>"
                ret = false;
              }

              /*se ha escogido una sección favorita.*/
              var opcion = document.getElementsByName("seccion")[0].selectedIndex;
              if (opcion == null || opcion == 0){
                errList += "Error, escoja una sección <br/>";
                ret = false;
              }

              /*se ha escogido un modo de pago.*/
              var tipoPago = formulario.pago.value;
              if (tipoPago != "efectivo" && tipoPago != "tarjeta"){
                    ret = false;
                    errList += "Es necesario que indique si quiere emplear su nombre o prefiere ser anónimo en nuestro foro<br/>";
                  }


                    /*se han aceptado las condiciones de alta*/
                if(!cond.checked){
                  ret=false;
                  errList += "No has aceptado las condiciones de alta";
                }

                 /*envía el formulario evitando que mientras se envía se pueda producir
                 un reenvío con el botón. Para ello , una vez pulsado, deshabilita el botón
                 “Enviar” y cambia el valor que muestra por “Enviando…”*/
                 if (ret){
                   errList += "Tu petición se ha enviado correctamente";
                   /*Aqui pongo todo lo de almacenamiento despues del setcookies de arriba*/
                  error.style.color="blue";
                   var name = "nombre";
                   var value1 = document.getElementById("nombre").value;
                   var days = 365;
                   setCookie(name,value1,days);

                   var apellidos = "apellidos";
                   var value2 = document.getElementById("apellidos").value;
                   setCookie(apellidos,value2,days);

                  var email = "Correo";
                  var email1 = document.getElementById("Correo").value;
                  window.localStorage.setItem(email,email1);

                  var dni = "dni";
                  var dni1 = document.getElementById("dni").value;
                  window.sessionStorage.setItem(dni,dni1);
                  formulario.action="alta.html";
                  formulario.submit();
                  document.getElementById("enviar").value = "Enviando...";
                  document.getElementById("enviar").disabled = true;
                /*Cuando se envía el formulario, es necesario que se muestre por pantalla los errores
                en color rojo y en caso de que no existan errores se enviará el formulario.*/
              }else{
                error.style.color="red";
              }
              error.innerHTML =  errList;
              return ret;
              return false;
//return ret; //Si ha habido problema, ret será false y evitaremos el envío. Si fuera true se enviaría.
}

}
