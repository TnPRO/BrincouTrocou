window.open    = function(){};
window.print   = function(){};
// Support hover state for mobile.
if (false) {
window.ontouchstart = function(){};
}


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
params.value1 = "usu"+ window.localStorage.brincoutrocou +"_1";
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
document.getElementById( 'imagem' ).src= "http://www.brincoutrocou.com.br/img/usu" + window.localStorage.brincoutrocou + "_1.jpg?"  + new Date().getTime();
document.forms['insere'].image.value = "usu"+ window.localStorage.brincoutrocou + "_1.jpg"
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
params.value1 = "usu"+ window.localStorage.brincoutrocou +"_2";
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
document.getElementById( 'imagem2' ).src= "http://www.brincoutrocou.com.br/img/usu" + window.localStorage.brincoutrocou + "_2.jpg?"  + new Date().getTime();
document.forms['insere'].image2.value = "usu"+ window.localStorage.brincoutrocou + "_2.jpg"
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
params.value1 = "usu"+ window.localStorage.brincoutrocou +"_3";
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
document.getElementById( 'imagem3' ).src= "http://www.brincoutrocou.com.br/img/usu" + window.localStorage.brincoutrocou + "_3.jpg?"  + new Date().getTime();
document.forms['insere'].image3.value = "usu"+ window.localStorage.brincoutrocou + "_3.jpg"
}

function fail3(error) {
document.getElementById( 'carregando' ).style.display = 'none';
alert("Ocorreu um erro no envio da foto. Código = " + error.code);
}




function salvar(esqueci){



document.getElementById( 'carregando' ).style.display = 'block';

var datastring = $("#formu").serialize();

ur = "http://www.brincoutrocou.com.br/atualiza_dados.asp?usuario=" + window.localStorage.brincoutrocou + "&" + datastring;


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


alert("Dados atualizados com sucessos");



}
}
}

function valida() {






if (document.forms['insere'].name.value == "" ) { 

alert("Você precisa inserir o nome do brinquedo.");
document.forms['insere'].name.focus();
return false;

}


if (document.forms['insere'].data.value == "" ) { 

alert("Você precisa inserir a data aproximada de compra do brinquedo.");
document.forms['insere'].data.focus();
return false;

}


if (document.forms['insere'].peso.value == "0" ) { 

alert("Você precisa inserir o peso do brinquedo.");
document.forms['insere'].peso.focus();
return false;

}


if (document.forms['insere'].image.value == "" ) { 

alert("Você precisa inserir ao menos uma foto.");
document.forms['insere'].arq1.focus();
return false;

}

if (document.forms['insere'].tipo.value == "0" ) { 

alert("Você precisa inserir o tipo do brinquedo.");
document.forms['insere'].tipo.focus();
return false;

}

if (document.forms['insere'].faixa.value == "0" ) { 

alert("Você precisa inserir a faixa etária do brinquedo.");
document.forms['insere'].faixa.focus();
return false;

}


atualiza();		



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


document.forms[0].usuario.value=window.localStorage.brincoutrocou;

var myParam = location.search.split('confirma=')[1]

if (myParam == 1) {

alert("Brinquedo Inserido com Sucesso. Você pode editá-lo na página Meus Brinquedos.");

}

compr();

}else {alert("Erro na obtenção de dados")
document.getElementById( 'carregando' ).style.display = 'none';


}
}
}


function atualiza(){



document.getElementById( 'carregando' ).style.display = 'block';

var datastring = $("#formu").serialize();

ur = "http://www.brincoutrocou.com.br/ins_brinquedo.asp?usuario=" + window.localStorage.brincoutrocou + "&" + datastring;



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


alert("Brinquedo Inserido com sucesso");
location.reload();

} else {alert("Erro na inserção do Brinquedo. Tente novamente ou entre em contato conosco.")

document.getElementById( 'carregando' ).style.display = 'none';
}
} 
}





function compr(moedas){


document.getElementById( 'carregando' ).style.display = 'block';

ur = "http://www.brincoutrocou.com.br/dado.asp?usuario="+ window.localStorage.brincoutrocou + "&moedas=" + moedas; 



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



if (cmp[2] == "") {

alert("Antes de cadastrar um brinquedo você precisa cadastrar o seu CEP");

location.href = "dados.html";

return false;

}

}else {alert("Erro ao receber os dados")
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


}, 
function(response) { alert("Houve algum erro no compartilhamento. Tente novamente") });
} 