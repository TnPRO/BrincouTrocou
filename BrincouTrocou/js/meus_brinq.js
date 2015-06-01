window.open    = function(){};
window.print   = function(){};
// Support hover state for mobile.
if (false) {
window.ontouchstart = function(){};
}


var idbrinqs = [];

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
// Do cool things here...
}


function getImage() {
// Retrieve image file location from specified source
navigator.camera.getPicture(uploadPhoto, function(message) {
alert('Erro no envio da Foto');
},{
quality: 100, 
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
correctOrientation: true
}
);

}

function getImag() {
// Retrieve image file location from specified source
navigator.camera.getPicture(uploadPhoto, function(message) {
alert('Erro no envio da Foto');
},{
quality: 100, 
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.CAMERA,
correctOrientation: true
}
);

}

function uploadPhoto(imageURI) {
document.getElementById( 'carregando' ).style.display = 'block';
var options = new FileUploadOptions();
options.fileKey="file";
options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
options.mimeType="image/jpeg";

var params = new Object();
params.value1 = "usu"+window.window.localStorage.brincoutrocou+"_1";
params.value2 = "param";

options.params = params;
options.chunkedMode = false;

var ft = new FileTransfer();
ft.upload(imageURI, "http://www.brincoutrocou.com.br/insere_foto.asp", win, fail, options);
}

function win(r) {
console.log("Code = " + r.responseCode);
console.log("Response = " + r.response);
console.log("Sent = " + r.bytesSent);
//alert(r.response);
document.getElementById( 'carregando' ).style.display = 'none';
id = document.forms['insere0'].brinquedo.value;
document.getElementById( 'imagem' ).src= "http://www.brincoutrocou.com.br/img/usu" +window.localStorage.brincoutrocou + "_1.jpg?"  + new Date().getTime();
document.forms['insere'+id].image.value = "usu"+window.localStorage.brincoutrocou + "_1.jpg"
}

function fail(error) {
document.getElementById( 'carregando' ).style.display = 'none';
alert("Ocorreu um erro no envio da foto. Código = " + error.code);
}

function getImage2() {
// Retrieve image file location from specified source
navigator.camera.getPicture(uploadPhoto2, function(message) {
alert('Erro no envio da Foto');
},{
quality: 100, 
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
correctOrientation: true
}
);

}

function getImag2() {
// Retrieve image file location from specified source
navigator.camera.getPicture(uploadPhoto2, function(message) {
alert('Erro no envio da Foto');
},{
quality: 100, 
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.CAMERA,
correctOrientation: true
}
);

}

function uploadPhoto2(imageURI) {
document.getElementById( 'carregando' ).style.display = 'block';
var options = new FileUploadOptions();
options.fileKey="file";
options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
options.mimeType="image/jpeg";

var params = new Object();
params.value1 = "usu"+window.localStorage.brincoutrocou+"_2";
params.value2 = "param";

options.params = params;
options.chunkedMode = false;

var ft = new FileTransfer();
ft.upload(imageURI, "http://www.brincoutrocou.com.br/insere_foto.asp", win2, fail2, options);
}

function win2(r) {
console.log("Code = " + r.responseCode);
console.log("Response = " + r.response);
console.log("Sent = " + r.bytesSent);
//alert(r.response);
document.getElementById( 'carregando' ).style.display = 'none';
id = document.forms['insere0'].brinquedo.value;
document.getElementById( 'imagem2' ).src= "http://www.brincoutrocou.com.br/img/usu" +window.localStorage.brincoutrocou + "_2.jpg?"  + new Date().getTime();
document.forms['insere'+id].image2.value = "usu"+window.localStorage.brincoutrocou + "_2.jpg"
}

function fail2(error) {
document.getElementById( 'carregando' ).style.display = 'none';
alert("Ocorreu um erro no envio da foto. Código = " + error.code);
}

function getImage3() {
// Retrieve image file location from specified source
navigator.camera.getPicture(uploadPhoto3, function(message) {
alert('Erro no envio da Foto');
},{
quality: 100, 
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
correctOrientation: true
}
);

}

function getImag3() {
// Retrieve image file location from specified source
navigator.camera.getPicture(uploadPhoto3, function(message) {
alert('Erro no envio da Foto');
},{
quality: 100, 
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.CAMERA,
correctOrientation: true
}
);

}

function uploadPhoto3(imageURI) {
document.getElementById( 'carregando' ).style.display = 'block';
var options = new FileUploadOptions();
options.fileKey="file";
options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
options.mimeType="image/jpeg";

var params = new Object();
params.value1 = "usu"+window.localStorage.brincoutrocou+"_3";
params.value2 = "param";

options.params = params;
options.chunkedMode = false;

var ft = new FileTransfer();
ft.upload(imageURI, "http://www.brincoutrocou.com.br/insere_foto.asp", win3, fail3, options);
}

function win3(r) {
console.log("Code = " + r.responseCode);
console.log("Response = " + r.response);
console.log("Sent = " + r.bytesSent);
//alert(r.response);
document.getElementById( 'carregando' ).style.display = 'none';
id = document.forms['insere0'].brinquedo.value;
document.getElementById( 'imagem3' ).src= "http://www.brincoutrocou.com.br/img/usu" +window.localStorage.brincoutrocou + "_3.jpg?"  + new Date().getTime();
document.forms['insere'+id].image3.value = "usu"+window.localStorage.brincoutrocou + "_3.jpg"
}

function fail3(error) {
document.getElementById( 'carregando' ).style.display = 'none';
alert("Ocorreu um erro no envio da foto. Código = " + error.code);
}






function jogos(){



document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/meus_brinquedos.asp?usuario=" + window.localStorage.brincoutrocou;




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

html = "<rank><div class='entrar4'style='margin-top:10px;' id='detalhe"+ jogo[j] +"'><a href='inserir.html' class='button4' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Cadastrar Novo&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div></rank><br><br><rank><nao><h1>Você ainda não cadastrou nenhum brinquedo. Disponibilize os seus Brinquedos e ganhe moedas para trocar com outros usuários <a href='inserir.html'>clicando aqui</a></nao></rank>"
  
  $("#lista").html(html);
  
  
  } else {
  
  num = (total-1)/3;
  
  
  
  j=0;
  
  var html = "";
  
  var disp = "";
  
  html = html + "<rank><div class='entrar4'style='margin-top:10px;' id='topo'><a href='inserir.html' class='button4' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Cadastrar Novo&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div></rank><br><br>"
  
  
  for (var i=0;i
  <num;i++){
  
  
  idbrinqs.push(jogo[j]);
  
  if (jogo[j+2] == "D") {
  
  disp = "Disponível";
  
  } else if (jogo[j+2] == "T") {
  
  disp = "Em Trânsito"
  
  } else {
  
  disp = "Indisponível"
  
  }
  
  var d = new Date()
  
  
  html = html + "<rank><div class='responsive-container'><div class='dummy'></div><div class='img-container'><img src='http://www.brincoutrocou.com.br/img/"+ jogo[j] +"_1.jpg?ver=" + d.getTime() + "' onError=this.src='imagefound.jpg'; ></div></div><br><nom><h1>" + jogo[j+1] + "</h1><br>Status: " + disp + "</nom>"
  
  
  if (jogo[j+2] != "T") {
  
  html = html + "<div class='entrar4' id='detalhe"+ jogo[j] +"'><a href='javascript:detalhes("+ jogo[j] +")' class='button4' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Atualizar Dados&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div></rank>"
  
  } else {
  
  html = html + "<div class='entrar4' id='detalhe"+ jogo[j] +"'>&nbsp;</div></rank>"
  
  
  }
  
  
  
  j = j+3;
  
  }
  $("#lista").html(html);
  
  }
  
  
  }
  }
  }
  
  
  
  
  
  
  function reduzir(id){
  
  
  var html = "";
  
  html = html + "<a href='javascript:detalhes("+ id+")' class='button4' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Mais Detalhes&nbsp;&nbsp;&nbsp;&nbsp;</span></a>"
  
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
  
  
  var myParam = location.search.split('confirma=')[1]
  
  if (myParam == 1) {
  
  alert("Brinquedo alterado com Sucesso");
  
  }
  
  
  
  jogos();
  
  
  
  }else {alert("Erro na obtenção de dados")
  document.getElementById( 'carregando' ).style.display = 'none';
  
  
  }
  }
  }
  
  
  
  function trocar(id,moeda,de){
  
  
  
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
    
    
    function valida(id) {
    
    
    
    
    
    if (document.forms['insere'+id].name.value == "" ) { 
	
    alert("Você precisa inserir o nome do brinquedo.");
    document.forms['insere'+id].name.focus();
    return false;
    
    }
    
    
    if (document.forms['insere'+id].data.value == "" ) { 
	
    alert("Você precisa inserir a data aproximada de compra do brinquedo.");
    document.forms['insere'+id].data.focus();
    return false;
    
    }
    
    
    if (document.forms['insere'+id].peso.value == "0" ) { 
	
    alert("Você precisa inserir o peso do brinquedo.");
    document.forms['insere'+id].peso.focus();
    return false;
    
    }
    
    
    
    
    if (document.forms['insere'+id].tipo.value == "0" ) { 
	
    alert("Você precisa inserir o tipo do brinquedo.");
    document.forms['insere'+id].tipo.focus();
    return false;
    
    }
    
    if (document.forms['insere'+id].faixa.value == "0" ) { 
	
    alert("Você precisa inserir a faixa etária do brinquedo.");
    document.forms['insere'+id].faixa.focus();
    return false;
    
    }
    
    
    atualiza(id);		
    
    
    
    }	
    
    
    
    function atualiza(id){
    
    
    
    document.getElementById( 'carregando' ).style.display = 'block';
    
    var datastring = $('#insere'+id).serialize();
    
    ur = "http://www.brincoutrocou.com.br/atu_brinquedo.asp?id=" + id + "&usuario=" + window.localStorage.brincoutrocou + "&" + datastring;
    
    
    
    if (window.XMLHttpRequest) { // Non-IE browsers
	rs = new XMLHttpRequest();
	rs.onreadystatechange = Reqatu
	//req.onreadystatechange = targetDiv;
	
	rs.open("GET", ur, true);
	
	rs.send(null);
	} else if (window.ActiveXObject) { // IE
    rs = new ActiveXObject("Microsoft.XMLHTTP");
    if (rs) {
    rs.onreadystatechange = Reqatu;
    rs.open("GET", ur, true);
    rs.send();
    
    
    }
	}
    
    
    
    }
    
    
    
    
    
    function Reqatu() {
    
    // apenas quando o estado for "completado"
    if (rs.readyState == 4) {
    
    // apenas se o servidor retornar "OK"
	if (rs.status ==200) {
    
    document.getElementById( 'carregando' ).style.display = 'none';
    
	var par = rs.responseText;
	
    
    alert("Brinquedo Atualizado com sucesso");
    location.reload();
    
    } else {alert("Erro na atualização do Brinquedo. Tente novamente ou entre em contato conosco.")
    
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
    
    
    function detalhes(id){
    
    
    for (var i = 0, l = idbrinqs.length; i 
    < l; ++i) {
    if (idbrinqs[i] != id) {
	reduzir(idbrinqs[i]);
    }
    }
    
    
    document.getElementById( 'carregando' ).style.display = 'block';
    ur = "http://www.brincoutrocou.com.br/mob_edita_brinq.asp?usuario=" + window.localStorage.brincoutrocou + "&id=" + id;
    
    
    
    
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
    
    $("#detalhe"+ part[0]).height(1100);
    
    var html = part[1] + "<a href='javascript:reduzir(" + part[0] + ")' class='button4' data-ajax='false'><span>&nbsp;&nbsp;&nbsp;&nbsp;Menos Detalhes&nbsp;&nbsp;&nbsp;&nbsp;</span></a>";
    
    
    $("#detalhe"+ part[0]).html(html);
    
    
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
    
    
    }, function(response) { alert("Houve algum erro no compartilhamento. Tente novamente") });
    } 