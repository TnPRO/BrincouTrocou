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


compr();

}
}
}

function compr(moedas){


document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/novidade.asp?usuario="+ window.localStorage.brincoutrocou;  

       

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


cmp = compdo.split("|");
	
document.getElementById( 'carregando' ).style.display = 'none';


total = cmp.length;

num = (total-1);

var novidade = "";

for (var i=0;i<num;i++){

novidade = novidade + "<li><font size=+1>" + cmp[i+2] + " - <b>" + cmp[i] + "</b></font><br><br>" + cmp[i+1] + "<br><br><hr>";

i = i + 2;

}



$("#nov").html(novidade);

}else {alert("Data receiving error")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
}



function sair(){
window.localStorage.bolaocopa = "";
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
