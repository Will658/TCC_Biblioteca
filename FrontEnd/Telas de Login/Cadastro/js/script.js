function confereSenhaCadastro() {
    const senha = document.querySelector('input[name=senha]');
    const confirma = document.querySelector('input[name=confirma]');

    if (confirma.value === senha.value) {
        confirma.setCustomValidity('');
    } else {
        confirma.setCustomValidity('As senhas não conferem');
    }
}

function cadastroFeito() {
    var url = 'http://10.0.1.96:2929/gravar-usuario';
    var nomeUsuario = document.getElementById('nomeUsuario').value;
    var emailUsuario = document.getElementById('emailUsuario').value;
    var senhaUsuario = document.getElementById('senhaUsuario').value;
    var select = document.querySelector('select[name=Instituição]');
    var idInst = select.options[select.selectedIndex].value;
    var Curso = document.querySelector('select[name=Curso]');
    var idCurso = Curso.options[Curso.selectedIndex].value;
    var Horario = document.querySelector('select[name=Horário]');
    var idHorario = Horario.options[Horario.selectedIndex].value;

    var Dados ={
        nomeUsuario,
        emailUsuario,
        senhaUsuario,
        idInst,
        idCurso,
        idHorario
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(Dados),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resultado) => {
        return resultado.json();
    })
    alert("Cadastro feito!");
}