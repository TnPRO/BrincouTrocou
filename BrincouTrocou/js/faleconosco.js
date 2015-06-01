window.open    = function(){};
    window.print   = function(){};
    // Support hover state for mobile.
    if (false) {
      window.ontouchstart = function(){};
    }

function salvar(esqueci){



document.getElementById( 'carregando' ).style.display = 'block';

 var datastring = $("#formu").serialize();

ur = "http://www.brincoutrocou.com.br/send_mai.asp?" + datastring;


if (window.XMLHttpRequest) { // Non-IE browsers
	res = new XMLHttpRequest();
	res.onreadystatechange = Reqpart;
	//req.onreadystatechange = targetDiv;
	
	res.open("GET", ur, true);
	
	res.send(null);
	} else if (window.ActiveXObject) { // IE
		res = new ActiveXObject("Microsoft.XMLHTTP");
		if (res) {
			res.onreadystatechange = Reqpart;
			res.open("GET", ur, true);
			res.send();
			

		}
	}



}




 
function Reqpart() {
 
// apenas quando o estado for "completado"
if (res.readyState === 4) {
 
// apenas se o servidor retornar "OK"
	if (res.status === 200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';

	var partp = res.responseText;
	
part = partp.split("|");


if (part[0] === "Obrigado pela sua mensagem. Retornaremos em breve.") {

alert(part[0]);

location.href="faleconosco.html";

} else {

alert(part[0]);

}


}
}
}

function verificamail() {




				
				
				if (document.forms['mail'].name.value === "" ) { 
	
				alert("Você precisa inserir o seu NOME.");
				document.forms['mail'].name.focus();
				return false;

				}
				
				if (document.forms['mail'].email.value === "" ) { 
	
				alert("Você precisa inserir o seu EMAIL.");
				document.forms['mail'].email.focus();
				return false;

				}

				if (document.forms['mail'].message.value === "" ) { 
	
				alert("Você precisa inserir a sua MENSAGEM.");
				document.forms['mail'].message.focus();
				return false;

				}


				salvar();		
				


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
if (sal.readyState === 4) {
 
// apenas se o servidor retornar "OK"
	if (sal.status ===200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';
	var saldo = sal.responseText;
	
sald = saldo.split("|");



$("#ouro").html(sald[0]);

$("#prata").html(sald[1]);

if (sald[2] === 0){

m = "<a href='novidade.html'><img src='msg.png' height='50' border='0'></a>"

$("#msg").html(m);

}





}else {alert("Erro na obtenção de dados")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
}

function compr(moedas){


document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.bolao14.com/app/comprarface.asp?usuario="+ window.localStorage.brincoutrocou + "&moedas=" + moedas; 

       

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
if (comp.readyState === 4) {
 
// apenas se o servidor retornar "OK"
	if (comp.status ===200) {
 
 var compdo = comp.responseText;

cmp = compdo.split("|");
	
document.getElementById( 'carregando' ).style.display = 'none';


if (cmp[1] === 1) {


alert("Obrigado por Compartilhar. Você recebeu " + cmp[0] + " moedas de prata com sucesso. Compartilhe semanalmente para ganhar mais moedas.");

var e = document.getElementById('prata').innerHTML;

var prata = parseInt(e) + parseInt(cmp[0]);

$("#prata").html(prata);


} else {

alert("Obrigado por Compartilhar. Dessa vez não poderemos lhe dar as " + cmp[0] + " moedas de prata pois ainda não passaram 7 dias desde a última vez que compartilhou o Golazo no seu Face.");

}


}else {alert("Data receiving error")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
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