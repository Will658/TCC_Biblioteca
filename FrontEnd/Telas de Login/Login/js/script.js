function loginRealizado() {
    var url = 'http://192.168.0.109:2929/login2';
    var emailUsuario = document.getElementById('emailUsuario').value;
    var senhaUsuario = document.getElementById('senhaUsuario').value;

    var Dados ={
        emailUsuario,
        senhaUsuario,
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(Dados),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resultado) => {
        return resultado.json();
    })
}