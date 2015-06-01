    window.open    = function(){};
    window.print   = function(){};
    // Support hover state for mobile.
    if (false) {
      window.ontouchstart = function(){};
    }


function saldo(){

document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/saldo.asp?usuario="+ window.localStorage.brincoutrocou; 

       

if (window.XMLHttpRequest) { // Non-IE browsers
	sal = new XMLHttpRequest();
	sal.onreadystatechange = Reqsaldo;
	//req.onreadystatechange = targetDiv;
	
	sal.open("GET", ur, true);
	
	sal.send(null);
	} else if (window.ActiveXObject) { // IE
		sal = new ActiveXObject("Microsoft.XMLHTTP");
		if (sal) {
			sal.onreadystatechange = Reqsaldo;
			sal.open("GET", ur, true);
			sal.send();
			

		}
	}



}



 
function Reqsaldo() {
 
// apenas quando o estado for "completado"
if (sal.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (sal.status ==200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';
	var saldo = sal.responseText;
	
sald = saldo.split("|");



$("#ouro").html(sald[0]);

$("#prata").html(sald[1]);

if (sald[2] == 0){

m = "<a href='novidade.html'><img src='img/msg.png' height='50' border='0'></a>"

$("#msg").html(m);

}


}else {alert("Erro na obtenção de dados")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
}



function ouro(moedas){


document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/comprarouro.asp?usuario="+ window.localStorage.brincoutrocou + "&moedas=" + moedas; 

       

if (window.XMLHttpRequest) { // Non-IE browsers
	cop = new XMLHttpRequest();
	cop.onreadystatechange = Reqcompd;
	//req.onreadystatechange = targetDiv;
	
	cop.open("GET", ur, true);
	
	cop.send(null);
	} else if (window.ActiveXObject) { // IE
		cop = new ActiveXObject("Microsoft.XMLHTTP");
		if (comp) {
			cop.onreadystatechange = Reqcompd;
			cop.open("GET", ur, true);
			cop.send();
			

		}
	}



}



 
function Reqcompd() {
 
// apenas quando o estado for "completado"
if (cop.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (cop.status ==200) {
 
 var compdo = cop.responseText;
	
document.getElementById( 'carregando' ).style.display = 'none';


alert("Compra de " + compdo + " moedas de ouro realizada com sucesso");

var e = document.getElementById('ouro').innerHTML;

var ouro = parseInt(e) + parseInt(compdo);

$("#ouro").html(ouro);


}else {alert("Erro na obtenção de dados")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
}




function prata(moedas){


document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/comprar.asp?usuario="+ window.localStorage.brincoutrocou + "&moedas=" + moedas; 

       

if (window.XMLHttpRequest) { // Non-IE browsers
	comp = new XMLHttpRequest();
	comp.onreadystatechange = Reqcompdo;
	//req.onreadystatechange = targetDiv;
	
	comp.open("GET", ur, true);
	
	comp.send(null);
	} else if (window.ActiveXObject) { // IE
		comp = new ActiveXObject("Microsoft.XMLHTTP");
		if (comp) {
			comp.onreadystatechange = Reqcompdo;
			comp.open("GET", ur, true);
			comp.send();
			

		}
	}



}



 
function Reqcompdo() {
 
// apenas quando o estado for "completado"
if (comp.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (comp.status ==200) {
 
 var compdo = comp.responseText;
	
document.getElementById( 'carregando' ).style.display = 'none';


alert("Compra de " + compdo + " moedas de prata realizada com sucesso");

var e = document.getElementById('prata').innerHTML;

var prata = parseInt(e) + parseInt(compdo);

$("#prata").html(prata);


}else {alert("Erro na obtenção de dados")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
}




function successHandler (result) {

                var strResult = "";
                if(typeof result === 'object') {
                    strResult = JSON.stringify(result);
                } else {
                    strResult = result;

		
                }
		//alert(strResult);
		if (strResult == "OK") {
		//alert("dentro ok");
		InAppBilling.getPurchases(function(purchases){
                  if(purchases.length>0){
               //alert("succes consume");
		consumePurchase();
		alert("Houve um erro na compra, por favor tente novamente.");
		
                  }
                  else{
                      //alert("vazio");
                 //alert("buy");
		
InAppBilling.buy(successHandler, errorHandler,"io.cordova.brincoutrocou.ouro");
		}
            		});


		}


		if (strResult.substring(2, 7) == "packa") {
		//alert("2");
		consumePurchase();
		ouro(3);
		}




	        

}

function errorHandler(error) {
        alert("Houve o seguinte erro na compra:"+ error + " Por favor tente novamente, caso o erro persista entre em contato.");
	document.getElementById( 'carregando' ).style.display = 'none';
}

function comprar(moeda){
//alert("1");
	document.getElementById( 'carregando' ).style.display = 'block';
	InAppBilling.init(successHandler, errorHandler, {showLog:false});
}




function consumePurchase(){

//alert("comprado");
	cordova.exec(successHandler, errorHandler, "InAppBillingPlugin", "consumePurchase", ["io.cordova.brincoutrocou.ouro"]);
}





function successHandler2(result) {


                 var strResult = "";
                if(typeof result === 'object') {
                    strResult = JSON.stringify(result);
                } else {
                    strResult = result;

		
                }
		//alert(strResult);
		if (strResult == "OK") {
		InAppBilling.getPurchases(function(purchases){
                  if(purchases.length>0){
                 
		
		consumePurchase2();

		 alert("Houve um erro na compra, por favor tente novamente.");
		}

			 else{
                      //alert("vazio");
                //alert("buy");
		
InAppBilling.buy(successHandler2, errorHandler,"io.cordova.brincoutrocou.prata");
		}


		});
		
		          		


		}


		if (strResult.substring(2, 7) == "packa") {
		//alert("2");
		consumePurchase2();
		prata(50);
		}


 }


          
           

function comprar2(moeda){
	document.getElementById( 'carregando' ).style.display = 'block';
	InAppBilling.init(successHandler2, errorHandler, {showLog:false});

}

function consumePurchase2(){

	cordova.exec(successHandler2, errorHandler, "InAppBillingPlugin", "consumePurchase", ["io.cordova.brincoutrocou.prata"]);

             
}







function sair(){
window.localStorage.brincoutrocou = "";
location.href="index.html";
}

 function share_me() 
        { 
               
		facebookConnectPlugin.showDialog( {
method: 'feed',
link: ' http://www.brincoutrocou.com.br/',
picture: 'http://www.brincoutrocou.com.br/face.png',
description: 'Brincar é muito mais divertido do que comprar. Troque os Brinquedos usados do seu filho aqui',
message: ''
},
function(response) {
 
 
 }, function(response) { alert("Houve algum erro no compartilhamento. Tente novamente") }
 );
} 