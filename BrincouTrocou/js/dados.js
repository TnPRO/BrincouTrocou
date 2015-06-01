window.open    = function(){
    };
    window.print   = function(){
    };
    // Support hover state for mobile.
    if (false) {
      window.ontouchstart = function(){
      };
    }
    
    function salvar(esqueci){
      
      
      
      document.getElementById( 'carregando' ).style.display = 'block';
      
      var datastring = $("#formu").serialize();
      
      ur = "http://www.brincoutrocou.com.br/atualiza_dados.asp?usuario=" + window.localStorage.brincoutrocou + "&" + datastring;
      
      
      if (window.XMLHttpRequest) {
        // Non-IE browsers
        res = new XMLHttpRequest();
        res.onreadystatechange = Reqpart;
        //req.onreadystatechange = targetDiv;
        
        res.open("GET", ur, true);
        
        res.send(null);
      }
      else if (window.ActiveXObject) {
        // IE
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
      
      
      
      
      
      
      if (document.forms['dados'].cep.value == "" ) {
        
        
        alert("Você precisa inserir o seu CEP.");
        document.forms['dados'].cep.focus();
        return false;
        
      }
      
      if (document.forms['dados'].endereco.value == "" ) {
        
        
        alert("Você precisa inserir o seu Endereço.");
        document.forms['dados'].endereco.focus();
        return false;
        
      }
      
      if (document.forms['dados'].numero.value == "" ) {
        
        
        alert("Você precisa inserir o seu Número.");
        document.forms['dados'].numero.focus();
        return false;
        
      }
      
      if (document.forms['dados'].cidade.value == "" ) {
        
        
        alert("Você precisa inserir a sua Cidade.");
        document.forms['dados'].cidade.focus();
        return false;
        
      }
      
      if (document.forms['dados'].uf.value == "" ) {
        
        
        alert("Você precisa inserir o seu Estado.");
        document.forms['dados'].uf.focus();
        return false;
        
      }
      
      
      
      salvar();
      
      
      
      
    }
	
    
    
    function saldo(){
      
      document.getElementById( 'carregando' ).style.display = 'block';
      
      ur = "http://www.brincoutrocou.com.br/saldo.asp?usuario="+ window.localStorage.brincoutrocou; 
      
      
      
      if (window.XMLHttpRequest) {
        // Non-IE browsers
        sal = new XMLHttpRequest();
        sal.onreadystatechange = Reqsaldo;
        //req.onreadystatechange = targetDiv;
        
        sal.open("GET", ur, true);
        
        sal.send(null);
      }
      else if (window.ActiveXObject) {
        // IE
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
        else {
          alert("Erro na obtenção de dados")
            document.getElementById( 'carregando' ).style.display = 'none';
          
          
        }
      }
    }
    
    
    
    function compr(moedas){
      
      
      document.getElementById( 'carregando' ).style.display = 'block';
      
      ur = "http://www.brincoutrocou.com.br/dado.asp?usuario="+ window.localStorage.brincoutrocou + "&moedas=" + moedas; 
      
      
      
      if (window.XMLHttpRequest) {
        // Non-IE browsers
        comp = new XMLHttpRequest();
        comp.onreadystatechange = Reqcompdo;
        //req.onreadystatechange = targetDiv;
        
        comp.open("GET", ur, true);
        
        comp.send(null);
      }
      else if (window.ActiveXObject) {
        // IE
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
          
          
          
          document.forms[0].name.value= cmp[0];
          document.forms[0].nasc.value= cmp[1];
          document.forms[0].cep.value= cmp[2];
          document.forms[0].endereco.value= cmp[3];
          document.forms[0].numero.value= cmp[4];
          document.forms[0].complemento.value= cmp[5];
          document.forms[0].bairro.value= cmp[6];
          document.forms[0].cidade.value= cmp[7];
          document.forms[0].uf.value= cmp[8];
          
          
          
        }
        else {
          alert("Erro ao receber os dados")
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
      }
                                       ,
                                       function(response) {
                                         
                                         
                                       }
                                       , function(response) {
                                         alert("Houve algum erro no compartilhamento. Tente novamente") }
                                      );
    }
    