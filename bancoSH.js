//no dejar la cuenta con menos de 10
 //no poder tener mas de 990

console.log(document);

// Arreglo de objetos para los datos //
 var clientes = [
    {name:'Phil', password:'BigBoss', balance: 900},
    {name:'Daisy', password:'ShakerLady', balance: 600},
    {name:'Grant', password:'SandStorm', balance: 700},
    {name:'Leo', password:'ScienceBoy', balance: 400},
    {name:'Jemma', password:'ScienceGirl', balance: 450},
    {name:'Melinda', password:'Specialist01', balance: 400}
 ];

 // Funcion ingresar //

 function ingresar(){

    let user= document.getElementById("usuario").value;
    let password= document.getElementById("contrasena").value;

    identificacion(user, password);
 }

 function identificacion(user, password){
    console.log(user)
    let validUser = false; 
    for(let i=0; i<clientes.length; i++){
        console.log(clientes[i].name)
        if(user === clientes[i].name && password === clientes[i].password){

            //alert('Welcome  '+ clientes[i].name);
            validUser = true;
            opcionesPage(i)
            return
        }

        if(!validUser){
         document.querySelector('.errorIngreso').textContent= "Usuario o contrasenia no validos";
         document.getElementById("errorIngreso").style.display="block";
        }
    }
 }

 //Funcion para mostrar la pagina siguiente
 function opcionesPage(posicionUsuario){

   //ocultar login
   document.getElementById("inicio").style.display="none";

   //mostrar menu de opciones
   document.getElementById("accion").style.display="block";
   

   //Bienvenida personalizada
   document.querySelector('.nombreUsuario').textContent= "Bienvenido a tu cuenta " + clientes[posicionUsuario].name

   //opcion de consulta
   let consultar= document.getElementById("consultar");
      consultar.addEventListener('click',function(){
      document.getElementById("balance").style.display="block";
      document.getElementById("showRetiro").style.display="none";
      document.getElementById("showDeposito").style.display="none";
      document.getElementById("mensajesGenerales").style.display="none";
      document.getElementById("buttons").style.display="none";
      document.querySelector('.balance').textContent= "Tu balance actual es: $ " + (clientes[posicionUsuario].balance)
      document.getElementById("other").style.display="block";
   });

   //opcion de retirar
   const retirar= document.getElementById("retirar");
   retirar.addEventListener('click',function(){
      document.getElementById("showRetiro").style.display="block";
      document.getElementById("showDeposito").style.display="none";
      document.getElementById("balance").style.display="none";
      document.getElementById("mensajesGenerales").style.display="none";
     
      const retiro= document.getElementById("retiro1");
      retiro.addEventListener('click',function(){
         let cantRetiro = document.getElementById('retiro').value
         //condicion de no tener menos de 10
         console.log((cantRetiro))
         console.log(clientes[posicionUsuario].balance)
         if(clientes[posicionUsuario].balance - Number(cantRetiro) >= 10){
         clientes[posicionUsuario].balance -= Number(cantRetiro)
         document.querySelector('.mensajesGenerales').textContent= "Has realizado un retiro por: $" + cantRetiro
         document.querySelector('.balance').textContent= "Tu balance actual es: $" + clientes[posicionUsuario].balance
         document.getElementById("mensajesGenerales").style.display="block";
         document.getElementById("balance").style.display="block";
         document.getElementById("showRetiro").style.display="none";
         document.getElementById("other").style.display="block";
         document.getElementById("buttons").style.display="none";
         
         }else{
            document.querySelector('.balance').textContent= "No puedes tener menos de $10 en tu cuenta"
            document.getElementById("balance").style.display="block";
            document.getElementById("mensajesGenerales").style.display="none";
            document.getElementById("other").style.display="block";
         }

      },{once:true});
      
   });   
  
   //opcion de deposito
   const depositar= document.getElementById("depositar");
   depositar.addEventListener('click',function(){
      document.getElementById("showDeposito").style.display="block";
      document.getElementById("showRetiro").style.display="none";
      document.getElementById("balance").style.display="none";
      document.getElementById("mensajesGenerales").style.display="none";
      
      const retiro= document.getElementById("deposito1");
      retiro.addEventListener('click',function(){
         let cantDeposito = document.getElementById('deposito').value
         console.log(cantDeposito)
         console.log(clientes[posicionUsuario].balance)
         //codicion de no tener mas de 990
         if(clientes[posicionUsuario].balance + Number(cantDeposito) <= 990){
         clientes[posicionUsuario].balance += Number(cantDeposito)
         document.querySelector('.mensajesGenerales').textContent= "Has realizado un deposito por: $" + cantDeposito   
         document.querySelector('.balance').textContent= "Tu balance actual es: $" + clientes[posicionUsuario].balance
         document.getElementById("mensajesGenerales").style.display="block";
         document.getElementById("balance").style.display="block";
         document.getElementById("showDeposito").style.display="none";
         document.getElementById("other").style.display="block";
         document.getElementById("buttons").style.display="none";
         
         }else{
            document.querySelector('.balance').textContent= "No puedes tener mas de $990 en tu cuenta"
            document.getElementById("balance").style.display="block";
            document.getElementById("mensajesGenerales").style.display="none";
            document.getElementById("other").style.display="block";
         }

      },{once:true});
      
   }) 
let redo = document.getElementById("otra");
 function otraOp(){
      document.getElementById("balance").style.display="none";
      document.getElementById("showRetiro").style.display="none";
      document.getElementById("showDeposito").style.display="none";
      document.getElementById("mensajesGenerales").style.display="none";
      document.getElementById("buttons").style.display="block";
      document.getElementById("other").style.display="none";
            
     } 
   redo.addEventListener("click",otraOp)
 }

