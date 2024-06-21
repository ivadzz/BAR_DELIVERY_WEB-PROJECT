const Usuario = require('../model/usuario');

function cadastrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha
    }
    
    Usuario.create(usuario).then(()=>{
        let sucesso = true;
        res.render("index.html", {sucesso});
    }).catch((err)=>{
        console.log(err);
        let erro = true;
        res.render("index.html", {erro});
    });

}

function listarUsuarios(req, res) {
    Usuario.findAll().then((usuarios)=>{
        res.json(usuarios);
    }).catch((err)=>{
        res.json(err);
    });
}
function criarContaView(req, res) {
    res.render('usuario_cadastro.html');
}

function removerUsuario(req, res) {
    let userId = req.params.id;

    Usuario.destroy({ where: { id: userId } }).then(() => {
        res.redirect('/?remover_usuario=true');
    }).catch((err) => {
        console.log(err);
        res.redirect('/?remover_usuario=false');
    });
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios,
    criarContaView,
    removerUsuario
}