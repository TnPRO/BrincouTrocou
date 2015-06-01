window.open    = function(){};
    window.print   = function(){};
    // Support hover state for mobile.
    if (false) {
      window.ontouchstart = function(){};
    }


$(window).scroll(function()
{ 
    if($(window).scrollTop() >= $(document).height() - $(window).height() - 500)
    {
	if ($("#inicio").html() == "fim" ) {
        //document.getElementById( 'carregando' ).style.display = 'block';
        jogos(); }
    }
});



function mudamenu(){

$("#inicio").html("fim")
$("#pagina").html("0")
$("#lista").html("")

menu();

}

function menu(){

tipo = document.menu.tipo.value;

faixa = document.menu.faixa.value;

uf = document.menu.uf.value;



ur = "http://www.brincoutrocou.com.br/menu_troca.asp?usuario=" + window.localStorage.brincoutrocou + "&tipo=" + tipo + "&faixa=" + faixa + "&uf=" + uf; 

       

if (window.XMLHttpRequest) { // Non-IE browsers
	men = new XMLHttpRequest();
	men.onreadystatechange = Reqmenu;
	//req.onreadystatechange = targetDiv;
	
	men.open("GET", ur, true);
	
	men.send(null);
	} else if (window.ActiveXObject) { // IE
		men = new ActiveXObject("Microsoft.XMLHTTP");
		if (men) {
			men.onreadystatechange = Reqmenu;
			men.open("GET", ur, true);
			men.send();
			

		}
	}


}




 
function Reqmenu() {
 
// apenas quando o estado for "completado"
if (men.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (men.status ==200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';
	var mmenu = men.responseText;
	


$("#barra").html(mmenu);

jogos();

}
}
}




function jogos(){

$("#inicio").html("inicio")

tipo = document.menu.tipo.value;

faixa = document.menu.faixa.value;

uf = document.menu.uf.value;

pag = $("#pagina").html();


if (pag == "fim") {

return false;

} else {

pag = parseInt(pag);

 document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/brinquedo.asp?pagina=" + pag + "&usuario=" + window.localStorage.brincoutrocou + "&tipo=" + tipo + "&faixa=" + faixa + "&uf=" + uf

pag = pag + 1;

$("#pagina").html(pag);
       

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

html = "<br><br><li><rank><nao><h1>Ainda não foram cadastrados brinquedos para o seu critério de busca. Lembrando que você não consegue visualizar aqui os seus brinquedos disponibilizados. Seja o primeiro a cadastrar <a href='inserir.html'>clicando aqui</a></nao></rank>"

$("#lista").html(html);


} else {

num = (total-1)/3;



j=0;

var html = "";

for (var i=0;i<num;i++){

var d = new Date()

html = html + "<rank><div class='responsive-container'> <div class='dummy'></div> <div class='img-container'><img src='http://www.brincoutrocou.com.br/img/"+ jogo[j] +"_1.jpg?ver=" + d.getTime() + "' onError=this.src='img/imagefound.jpg'; id='imagem"+ jogo[j] + "' ></div></div><br>"



nume = parseInt(jogo[j+2]);

for (var k=1;k<nume+1;k++){

html = html + "<img src='http://www.brincoutrocou.com.br/img/"+ jogo[j] +"_"+ k + ".jpg?ver=" + d.getTime() + "' onError=this.src='img/imagefound.jpg'; height=50 onclick='myimage("+ jogo[j] + ",this.src)' >"

if (k != jogo[j+2]) {

html = html + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
}

}

html = html + "<br><br><nom><h1>" + jogo[j+1] + "</h1></nom><div class='entrar4' id='detalhe"+ jogo[j] +"'><a href='javascript:detalhes("+ jogo[j] +")' class='button5' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Mais Detalhes&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div></rank>"

j = j+3;

}
$("#lista").append(html);


if (jogo[total-1] == "fim") {

$("#pagina").html("fim");
}


$("#inicio").html("fim")

}


}
}
}






function reduzir(id){


var html = "";

html = html + "<a href='javascript:detalhes("+ id+")' class='button5' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Mais Detalhes&nbsp;&nbsp;&nbsp;&nbsp;</span></a>"

$("#detalhe"+id).height(60);

$("#detalhe"+id).html(html);

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


menu();



}else {alert("Erro na obtenção de dados")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
}



function trocar(id,moeda,de){

if (moeda == "0") {

alert("Você precisa cadastrar o seu endereço incluindo CEP primeiro antes de solicitar um Brinquedo.");

location.href="dados.html";

return false;

}



var p = document.getElementById('prata').innerHTML;

var prata = parseInt(p);

var o = document.getElementById('ouro').innerHTML;

var ouro = parseInt(o);


if (prata >= parseInt(moeda)) { 

if (ouro >= 1) {

var r = confirm("Para solicitar esse brinquedo você será debitado em " + moeda + " moedas de prata e uma moeda de ouro. Você só será efetivamente debitado quando receber o brinquedo, caso não receba as moedas serão devolvidas. Deseja continuar ?");
if (r == true) {


document.getElementById( 'carregando' ).style.display = 'block';
ur = "http://www.brincoutrocou.com.br/troca_brinquedo.asp?usuario=" + window.localStorage.brincoutrocou + "&id=" + id + "&moeda=" + moeda + "&de=" + de;


       

if (window.XMLHttpRequest) { // Non-IE browsers
	res = new XMLHttpRequest();
	res.onreadystatechange = Reqenvia;
	//req.onreadystatechange = targetDiv;
	
	res.open("GET", ur, true);
	
	res.send(null);
	} else if (window.ActiveXObject) { // IE
		res = new ActiveXObject("Microsoft.XMLHTTP");
		if (res) {
			res.onreadystatechange = Reqenvia;
			res.open("GET", ur, true);
			res.send();
			

		}
	}


}

} else {

alert("Você não possui saldo suficiente de moedas de ouro. Adquira moedas de ouro no menu Moedas.");
}



} else {

alert("Você não possui saldo suficiente de moedas de prata. Adquira moedas de prata no menu Moedas ou disponibilize brinquedos para troca para receber moedas.");
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

$("#pagina").html(1);

$("#lista").html("");

mudamenu();

}
}
}


function detalhes(id){



document.getElementById( 'carregando' ).style.display = 'block';
ur = "http://www.brincoutrocou.com.br/descricao.asp?usuario=" + window.localStorage.brincoutrocou + "&id=" + id;


       

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

part = partp.split("|");

	
var html = "";

html = html + "<txt><b>Descrição:</b> " + part[0] + "<br><br><b>Data da Compra:</b>  " + part[6] + "<br><br><b>Tipo:</b>  " + part[1] + "<br><br><b>Faixa Etária:</b> " + part[2] + "<br><br><b>Localização:</b> " + part[3] + "<br><br><b>Moedas para Troca: " + part[7] + " </b>&nbsp;<img src='img/prata.png' height='15' style='vertical-align:middle'></txt><br><br><a href='javascript:trocar(" + part[4] + "," + part[7] + "," + part[5] + ")' class='button3' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Trocar Brinquedo&nbsp;&nbsp;&nbsp;&nbsp;</span></a><br><br><a href='javascript:reduzir(" + part[4] + ")' class='button4' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Menos Detalhes&nbsp;&nbsp;&nbsp;&nbsp;</span></a>"

$("#detalhe"+ part[4]).height(350);

$("#detalhe"+ part[4]).html(html);


}
}
}




function correio(origem, destino, peso){



document.getElementById( 'carregando' ).style.display = 'block';
ur = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem="+ origem + "&sCepDestino=" + destino + "&nVlPeso=" + peso + "&nCdFormato=1&nVlComprimento=30&nVlAltura=30&nVlLargura=30&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=40010&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=1";


       

if (window.XMLHttpRequest) { // Non-IE browsers
	cor = new XMLHttpRequest();
	cor.onreadystatechange = Reqcorreio;
	//req.onreadystatechange = targetDiv;
	
	cor.open("POST", ur, true);
cor.setRequestHeader("Access-Control-Allow-Origin", "*");
	
	cor.send(null);
	} else if (window.ActiveXObject) { // IE
		cor = new ActiveXObject("Microsoft.XMLHTTP");
		if (cor) {
			cor.onreadystatechange = Reqcorreio;
			cor.open("GET", ur, true);
			cor.send();
			

		}
	}

}







 
function Reqcorreio() {
 
// apenas quando o estado for "completado"
if (cor.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (cor.status ==200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';
	var partp = cor.responseText;

alert(partp);

part = partp.split("<Valor>");


var n = part[1].indexOf("</Valor>");


var res = part[1].substring(0, n);

var a = parseInt(res);


	
$("#troca").html(a);



}
}
}



function editar(bolao){


var tt = bolao.split('|');

location.href="convidar.html?bolao="+ tt[0] + "&nome=" + tt[1];

}


function compr(moedas){


document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.bolao14.com/app/comprarface.asp?usuario="+ window.localStorage.bolaocopa + "&moedas=" + moedas; 

       

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


if (cmp[1] == 1) {


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