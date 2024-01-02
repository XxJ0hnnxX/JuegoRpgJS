import { Imprime } from "../Funciones/Handlers/ImprimeMenaje";
import { lang } from "../gameInit";

export class Personaje {

    pleyableType = 'player';
    #name;
    helthPoint;
    stamina;
    attackPoint;
    attackType;
    deffencePoint;

    constructor(name, helthPoint, stamina, attackPoint, deffencePoint) {
        this.#name = name;
        this.helthPoint = helthPoint;
        this.stamina = stamina;
        this.attackPoint = attackPoint;
        this.deffencePoint = deffencePoint;
    }

    PrintStatus() {
        console.log(`
            Name: ${this.#name} \n 
            HP: ${this.helthPoint}\n 
            stamina: ${this.stamina}\n
            attackpoint: ${this.attackPoint}\n
            deffencepoint: ${this.deffencePoint}\n
        `)
    }

    Atacar(Personaje){

        Personaje.helthPoint = Personaje.helthPoint - this.attackPoint;

        Imprime(`${this.name} ha atacado a ${Personaje.name}`)

        if(Personaje.helthPoint <= 0){
            Imprime(lang.m2)
        }
else{
    Imprime(lang.m1)


}


    }
}

