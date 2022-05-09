import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; 
    agencia;
    _cliente;
    _saldo = 0;
    


    
    //Definindo que cliente só pode ser alterado se for dentro do módulo cliente
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    // Deixando o programa ler o conteúdo dentro do cliente 
    get cliente(){
        return this._cliente;
    }
    
    //Basicamente criando uma proteção a variavel saldo que não pode ser alterada sem o acessor de atrubuição entao ele é só leitura
    get saldo (){
        return this._saldo;
    }





    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }




    //Criando o método de saque 
    sacar(valor){
       if(this._saldo >= valor){
           this._saldo -= valor;
           return valor;
       }
    }

    //Criando o método de depópsito
    depositar(valor) {
        if(valor > 0){
            this._saldo += valor;
            return valor;
        }
    }

    //Criando o método de tranferência 
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
