window.open    = function(){};
    window.print   = function(){};
    // Support hover state for mobile.
    if (false) {
      window.ontouchstart = function(){};
    }


function trocando(valor){

if (valor == "0") {

recebendo();

} else {

enviando();

}

}


function sedex(numero){

// Cria objeto de conexão
var httpOb = new XMLHttpRequest();
var URL = "http://www.brincoutrocou.com.br/rastreamento.asp?numero=" + numero;
// Abre conexão com o servidor do SRO especificando o arquivo de entrada
httpOb.open("POST",URL, false);
//Se a conexão for aberta, estabelece o cabeçalho e envia o código dos objetos

httpOb.send (null);
//Armazena a resposta do servidor
xml_out = httpOb.responseText;

return xml_out;



}



function recebendo(){



document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/minhas_trocas.asp?usuario=" + window.localStorage.brincoutrocou;

       

if (window.XMLHttpRequest) { // Non-IE browsers
	res = new XMLHttpRequest();
	res.onreadystatechange = Reqjogos;
	//req.onreadystatechange = targetDiv;
	
	res.open("GET", ur, true);
	
	res.send(null);
	} else if (window.ActiveXObject) { // IE
		res = new ActiveXObject("Microsoft.XMLHTTP");
		if (res) {
			res.onreadystatechange = Reqjogos;
			res.open("GET", ur, true);
			res.send();
			

		}
	}

}




 
function Reqjogos() {
 
// apenas quando o estado for "completado"
if (res.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (res.status ==200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';
	var jog = res.responseText;


jogo = jog.split("|");



total = jogo.length;



var j = 0;

var html = "";

if (jogo[0] == "vazio"){

html = "<rank><nao><h1>Você ainda não solicitou nenhum Brinquedo. Entre em <a href='trocar.html'>Trocar Brinquedos</a> e peça já o seu.</nao></rank>"

$("#lista").html(html);


} else {

num = (total-1)/4;



j=0;

var html = "";

var disp = "";



for (var i=0;i<num;i++){


if (jogo[j+3] == "I") {

disp = "Sedex ainda não informado";

} else if (jogo[j+3] == "A") {

disp = sedex(jogo[j+2]);

} else if (jogo[j+3] == "C") {

disp = "Troca Concluída";


}

html = html + "<rank><div class='responsive-container'> <div class='dummy'></div> <div class='img-container'><img src='http://www.brincoutrocou.com.br/img/"+ jogo[j] +"_1.jpg' onError=this.src='imagefound.jpg'; ></div></div><br><nom><h1>" + jogo[j+1] + "</h1><br>Status: " + disp + "<br>Sedex: " + jogo[j+2] + "<br><br></nom></rank>"


j = j+4;

}
$("#lista").html(html);

}


}
}
}

function enviando(){



document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/meus_envios.asp?usuario=" + window.localStorage.brincoutrocou;


       

if (window.XMLHttpRequest) { // Non-IE browsers
	envi = new XMLHttpRequest();
	envi.onreadystatechange = Reqenviando;
	//req.onreadystatechange = targetDiv;
	
	envi.open("GET", ur, true);
	
	envi.send(null);
	} else if (window.ActiveXObject) { // IE
		envi = new ActiveXObject("Microsoft.XMLHTTP");
		if (envi) {
			envi.onreadystatechange = Reqenviando;
			envi.open("GET", ur, true);
			envi.send();
			

		}
	}

}




 
function Reqenviando() {
 
// apenas quando o estado for "completado"
if (envi.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (envi.status ==200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';
	var jog = envi.responseText;


jogo = jog.split("|");



total = jogo.length;



var j = 0;

var html = "";

if (jogo[0] == "vazio"){

html = "<rank><nao><h1>Ainda não foi solicitado nenhum envio de Brinquedo para você. Entre em <a href='inserir.html'>Inserir Brinquedos</a> e disponibilize os seus brinquedos.</nao></rank>"

$("#lista").html(html);


} else {

num = (total-1)/5;



j=0;

var html = "";

var disp = "";



for (var i=0;i<num;i++){


if (jogo[j+3] == "I") {

disp = "Sedex ainda não informado";

} else if (jogo[j+3] == "A") {

disp = sedex(jogo[j+2]);

} else if (jogo[j+3] == "C") {

disp = "Troca Concluída";


}

html = html + "<rank><div class='responsive-container'> <div class='dummy'></div> <div class='img-container'><img src='http://www.brincoutrocou.com.br/img/"+ jogo[j] +"_1.jpg' onError=this.src='imagefound.jpg'; ></div></div><br><nom><h1>" + jogo[j+1] + "</h1><br>Status: " + disp + "<br>Sedex: " + jogo[j+2] + "<br><br></nom>"

if (jogo[j+3] == "I") {

html = html + "<div class='entrar4' id='detalhe"+ jogo[j+4] +"'><form name='sedex" + jogo[j+4] +"'><input type='text' name='numero' placeholder='Ex: SQ458226057BR'><br><br><input type='button' value='Inserir Sedex' onclick='insere(" + jogo[j+4] + ")'></form></div></rank>"

} else {

html = html + "<div class='entrar4' id='detalhe"+ jogo[j+4] +"'>&nbsp;</div></rank>"


}


j = j+5;

}
$("#lista").html(html);

}


}
}
}








function saldo(){

document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/saldo.asp?usuario=" + window.localStorage.brincoutrocou; 

       

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


 var myParam = location.search.split('confirma=')[1]

if (myParam == 1) {

alert("Brinquedo alterado com Sucesso");

}



recebendo();





}else {alert("Erro na obtenção de dados")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
}





 
function Reqenvia() {
 
// apenas quando o estado for "completado"
if (res.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (res.status ==200) {
 
var convdo = res.responseText;
	

alert("Solicitação concluída com sucesso. Confira no menu Minhas Trocas o andamento do envio deste brinquedo.");

var o = document.getElementById('ouro').innerHTML;

var ouro = parseInt(o) -1;

$("#ouro").html(ouro);




var e = document.getElementById('prata').innerHTML;

var prata = parseInt(e) - parseInt(convdo);

$("#prata").html(prata);

document.getElementById( 'carregando' ).style.display = '';

jogos();

}
}
}


function insere(id){



document.getElementById( 'carregando' ).style.display = 'block';

var sede = document.forms['sedex'+id].numero.value;

ur = "http://www.brincoutrocou.com.br/insere_sedex.asp?id=" + id + "&sedex=" + sede;


       

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
if (res.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (res.status ==200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';
	var partp = res.responseText;

alert("Número do Sedex incluído com sucesso. Assim que o envio for concluído você receberá as suas moedas de prata.");

enviando();


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