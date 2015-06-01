function salvar(esqueci){



document.getElementById( 'carregando' ).style.display = 'block';

 var datastring = $("#cadastro").serialize();

ur = "http://www.brincoutrocou.com.br/new_user.asp?" + datastring;

if (esqueci == "esqueci") {

ur = ur + "&acao=esqueci";

}

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


if (part[0] == "Login com sucesso") {

window.localStorage.bolaocopa=part[1];

location.href="jogar.html";

} else {

alert(part[0]);

location.href="log.html";

}


}
}
}