function facebook() {

document.getElementById( 'carregando' ).style.display = 'block';

    btnLoginClicked();
/*
facebookConnectPlugin.login(["email"], function(response)
        {
           

            if (response.authResponse) 
            { 
                processFacebook();
                //login success
            } else  {
	alert("Erro na autenticação com Facebook");
                         document.getElementById( 'carregando' ).style.display = 'none';
                    }
        });
 */
}

//login function
function btnLoginClicked()
{
    console.log("login btn clicked");
    loginUsingFB("arguments");
}

/*
function lgnErrHandler(e)
{
    alert("unable to login : "+e);
}

function lgnSuccessHandler(e)
{
    alert("logged in - userID : "+e.userInfo.id+" username : "+e.userInfo.name+ " access token "+e.accessToken);
}
 */

        function processFacebook()
        {
               
		facebookConnectPlugin.api( "me/?fields=id,email,name,birthday", ["user_birthday", "user_friends"],

                    function (response) { facecheck(JSON.stringify(response.email),JSON.stringify(response.id),JSON.stringify(response.name),JSON.stringify(response.birthday)) },

                    function (response) { alert(JSON.stringify(response)) });
        } 



function facecheck(mail,id,name,birth){


ur = "http://www.brincoutrocou.com.br/check_user.asp?face=T&email=" + mail + "&senha=" + id + "&nome=" + name + "&birth=" + birth;




if (window.XMLHttpRequest) { // Non-IE browsers
	res = new XMLHttpRequest();
	res.onreadystatechange = Reqpar;
	//req.onreadystatechange = targetDiv;
	
	res.open("GET", ur, true);
	
	res.send(null);
	} else if (window.ActiveXObject) { // IE
		res = new ActiveXObject("Microsoft.XMLHTTP");
		if (res) {
			res.onreadystatechange = Reqpar;
			res.open("GET", ur, true);
			res.send();
			

		}
	}



}




 
function Reqpar() {
 
// apenas quando o estado for "completado"
if (res.readyState == 4) {
 
// apenas se o servidor retornar "OK"
	if (res.status ==200) {
 
 document.getElementById( 'carregando' ).style.display = 'none';

	var partp = res.responseText;
	
part = partp.split("|");


if (part[0] == "Login com sucesso") {

window.localStorage.brincoutrocou=part[1];
 document.getElementById( 'carregando' ).style.display = 'none';
location.href="trocar.html";

} else {
 document.getElementById( 'carregando' ).style.display = 'none';
alert(part[0]);

}


}
}
}








function salvar(esqueci){



document.getElementById( 'carregando' ).style.display = 'block';

 var datastring = $("#cadastro").serialize();

ur = "http://www.brincoutrocou.com.br/check_user.asp?" + datastring;

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

window.localStorage.brincoutrocou=part[1];

location.href="trocar.html";


} else {

alert(part[0]);

}


}else {alert("Erro na obtenção de dados")
document.getElementById( 'carregando' ).style.display = 'none';
} 
}
}




function checa()
{
//alert(document.url);
    if (window.localStorage.brincoutrocou)
    {
        location.href = "trocar.html";
    }
}