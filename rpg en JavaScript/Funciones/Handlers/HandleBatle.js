

import { lang } from "../../gameInit";
import { Decidir } from "../funciones";
import { Imprime } from "./ImprimeMenaje";
import { GameOver } from "../funciones";

Decidir();
//  let huir = false;
//  let atacar = false;
export function HandleBatle(PersonajePrincipal, Enemigo){
    while(true){
        let result = Imprime(lang.m7)//deseas huir?
        if(result == false){
            PersonajePrincipal.atacar(Enemigo)
            if(Enemigo.HealthPoint <= 0){
                Imprime(lang.m14);
                PersonajePrincipal.attackPoint = PersonajePrincipal.attackPoint + 15
                //obtener recompensa(n1) de nivel uno
                break;
            }else{
                Enemigo.atacar(PersonajePrincipal);
                if(PersonajePrincipal.HealthPoint <= 0){
                    Imprime(lang.m14)
                    Imprime(lang.m20)//game over
                    GameOver();
                    break;
                }
            }
        }else{
            ImprimeMensaje(lang.m5)//histe cobarde.
            break;
        }

    }
}