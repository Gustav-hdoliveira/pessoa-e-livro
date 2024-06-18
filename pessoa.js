var leitor = require('readline-sync');
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, hora) {
        this.nome = nome;
        this.hora = hora;
    }
    Pessoa.prototype.cumprimentar = function () {
        console.log("Ol\u00E1 ".concat(this.nome, ", boa ").concat(this.hora));
    };
    return Pessoa;
}());
