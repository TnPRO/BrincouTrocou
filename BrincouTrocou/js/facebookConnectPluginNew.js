
//check logged in status
function checkLoggedInStatus(successHandler, errHandler, args)
{
    cordova.exec(successHandler, errHandler, "FBAuthPlugin", "checkForPreviousLoginAuth", [args]);
}

//FB login authentication
function loginUsingFB(args)
{
    cordova.exec(fbLoginSuccessHandler, fbLoginErrorHandler, "FBAuthPlugin", "loginWithFB", [args]);
}

function fbLoginSuccessHandler(loginInfo)
{
	var id = loginInfo.userInfo.id;
	var mail = loginInfo.userInfo.email;
	var name = loginInfo.userInfo.name;
	var birth = "01/12/1988";
	console.log(name+''+mail+''+id);
	facecheck(mail,id,name,birth);
}

function fbLoginErrorHandler(errMsg)
{
    console.log(errMsg);
}

//FB logout authentication
function logoutUsingFB(successHandler, errHandler, args)
{
    cordova.exec(successHandler, errHandler, "FBAuthPlugin", "logoutWithFB", [args]);
}
