function loginRealizado() {
    //var url = 'http://192.168.0.109:2929/login2';
    var emailUsuario = document.getElementById('emailUsuario').value;
    var senhaUsuario = document.getElementById('senhaUsuario').value;

    var adm1 = emailUsuario = 'williamtoledo658@gmail.com', senhaUsuario = "transformersgodofwar3";
    var adm2 = emailUsuario = 'eduardo7854964@gmail.com', senhaUsuario = "palmeirensedefe";
    var adm3 = emailUsuario = 'brunonogueiracamilo@gmail.com', senhaUsuario = "fazoL13";
    var adm4 = emailUsuario = 'fs5946088@gmail.com', senhaUsuario = "donadomorro";
    var adm5 = emailUsuario = 'silasromao54@gmail.com', senhaUsuario = "silasrabao2022";
    
    //var Dados ={
      //  emailUsuario,
        //senhaUsuario,
    //}

    if (emailUsuario === "williamtoledopereirazica658@gmail.com" && senhaUsuario === "transformers3"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "Franciele.santos122@etec.sp.gov.br" && senhaUsuario === "FranSilva123"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "eduardo08alviverde@gmail.com" && senhaUsuario === "palmeirassempre"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "bruno.camilo2@etec.sp.gov.br" && senhaUsuario === "Bolsonaro22"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "samuel@samu.com" && senhaUsuario === "12345678"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "williamtoledo658@gmail.com" && senhaUsuario === "transformersgodofwar3"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "eduardo7854964@gmail.com" && senhaUsuario === "palmeirensedefe"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "brunonogueiracamilo@gmail.com" && senhaUsuario === "fazoL13"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "fs5946088@gmail.com" && senhaUsuario === "donadomorro"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "silasromao54@gmail.com" && senhaUsuario === "silasrabao2022"){
        location.href = "../../Tela Principal/Logado/home.html";
    } else if (emailUsuario === "williamtoledo658@gmail.com" && senhaUsuario === "transformersgodofwar3"){
        location.href = "../../ADM/ADM/index.html"
    } else {
        alert("não deu certo");
    }

    /*fetch(url, {
        method: "POST",
        body: JSON.stringify(Dados),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then ((resultado) => {
        return resultado.json();
    })
    .then((user) => {
        if (user.token) {
            console.log('bla');
            alert("LOGIN OK");
            window.location.href = "../../Tela Do Item/item.html"
            return user.send();
        } else {
            alert("incorreto")
        }
    })*/

    //console.log(res1)
    //.then( (res1) => {
        //console.log(res1)
      
   // })

}

//http://10.0.1.96:2929/login2
//http://192.168.0.109:2929/login2