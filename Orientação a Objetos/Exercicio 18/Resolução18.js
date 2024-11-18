/* 18) Faça uma classe Automóvel, identificando seus atributos e
métodos. Herdando tais características, crie três classes: Carro,
Moto e Guincho. Herdando Carro, faça uma classe
CarroAutomático, na qual, para poder ligar, o freio precisa estar
sendo pressionado. Herdando Moto, faça uma classe
MotoPartidaPedal, onde, para ligar, o acelerador precisa estar
puxado. O guincho pode carregar tanto carro quanto moto. Utilize
os 4 pilares da POO. */

// Resolução:

class Automovel {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true
            console.log(`${this.modelo} está ligado.`)
        } else {
            console.log(`${this.modelo} já está ligado.`)
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false
            console.log(`${this.modelo} está desligado.`)
        } else {
            console.log(`${this.modelo} já está desligado.`)
        }
    }

    exibirDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
    }
}

class Carro extends Automovel {
    constructor(marca, modelo, ano, numeroPortas) {
        super(marca, modelo, ano)
        this.numeroPortas = numeroPortas
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Portas: ${this.numeroPortas}`)
    }
}

class CarroAutomatico extends Carro {
    constructor(marca, modelo, ano, numeroPortas) {
        super(marca, modelo, ano, numeroPortas);
        this.freioPressionado = false
    }

    pressionarFreio() {
        this.freioPressionado = true
        console.log("Freio pressionado")
    }

    ligar() {
        if (this.freioPressionado) {
            super.ligar();
        } else {
            console.log("Não é possível ligar o carro. Pressione o freio.")
        }
    }
}

class Moto extends Automovel {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano);
    }
}

class MotoPartidaPedal extends Moto {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano);
        this.aceleradorPuxado = false
    }

    puxarAcelerador() {
        this.aceleradorPuxado = true
        console.log("Acelerador puxado.")
    }

    ligar() {
        if (this.aceleradorPuxado) {
            super.ligar();
        } else {
            console.log("Não é possível ligar a moto. Puxe o acelerador.")
        }
    }
}

class Guincho extends Automovel {
    constructor(marca, modelo, ano, capacidade) {
        super(marca, modelo, ano);
        this.capacidade = capacidade;
    }

    carregar(veiculo) {
        if (veiculo instanceof Automovel) {
            console.log(`${veiculo.modelo} foi carregado pelo guincho.`)
        } else {
            console.log("Somente automóveis podem ser carregados.")
        }
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Capacidade do guincho: ${this.capacidade} toneladas.`);
    }
}

// Exemplo de automoveis:

console.log("---------- Carro ----------")
const meuCarro = new CarroAutomatico("Toyota", "Corolla", 2022, 4)
meuCarro.ligar()
meuCarro.pressionarFreio()
meuCarro.ligar()
meuCarro.desligar()

console.log("\n---------- Moto ----------")
const minhaMoto = new MotoPartidaPedal("Yamaha", "MT-07", 2021)
minhaMoto.ligar()
minhaMoto.puxarAcelerador()
minhaMoto.ligar()
minhaMoto.desligar()

console.log("\n---------- Guincho ----------")
const oGuincho = new Guincho("Volvo", "FH16", 2020, 15)
oGuincho.carregar(meuCarro)
oGuincho.carregar(minhaMoto)
oGuincho.ligar()
oGuincho.desligar()