class Livro{
    titulo: string
    autor: string
    anoPublicado: number

    constructor(titulo: string, autor: string, anoPublicado: number){
        this.titulo = "Sombras Ossos e Metal"
        this.autor = "Gustavo Henrique de Oliveira"
        this.anoPublicado = 2028
    }
    obterDetalhes(): void{
        console.log(`O livro: "${this.titulo}" foi publicado em ${this.anoPublicado} pelo escritor ${this.autor}`)
    }
}
