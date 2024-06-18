class Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}`)
    }
    /*
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}, tenho ${this.idade} anos e sou ${this.faichaetaria()}`)
    }

    crianca(): void{
        console.log("criança")
    }
    adulto(): void{
        console.log("adulto")
    }
    idoso(): void{
        console.log("idoso")
    }
    faichaetaria(){
        if (this.idade - 18) {
            this.crianca()
        } else if (this.idade + 18 && this.idade -60){
            this.adulto()
        } else {
            this.idoso()
        }
    }
    */
}
class Crianca extends Pessoa {
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}, tenho ${this.idade} anos e sou crianca`)
    }
}
class Adulto extends Pessoa {
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}, tenho ${this.idade} anos e sou Adulto`)
    }
}
class Idoso extends Pessoa {
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}, tenho ${this.idade} anos e sou Idoso`)
    }
}