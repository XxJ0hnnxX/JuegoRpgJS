import { Imprime } from "../../Funciones/Handlers/ImprimeMenaje";
import { ArielRobert, ReySlime, Slime, lang } from "../../gameInit";
import { Decidir } from "../../Funciones/funciones";
import { AldoriaToBARoute } from "../../Funciones/funciones";
import { HandleBatle } from "../../Funciones/Handlers/HandleBatle";



export function RoadAldoriaToBosquesAncestrales(){
    Imprime(lang.m5);
    Imprime(lang.m7);
    ArielRobert.PrintStatus(); ReySlime.PrintStatus();
    HandleBatle(ArielRobert,ReySlime)
    //cities.bosquesancestrales();
}
    

   

   

    

    
    



























// export function AldoriaToBARoute(){
//     Imprime("has empezado a camniar hacia los bosques ancestrales, sientes miedo del absoluto sinelcio que esta ruta transmite")
//     Imprime("haz encontrado un Slime, que deseas hacer, uhir o atacar?")
//     if(Desicion === "uhir"){
//         BosquesAncestralesToZonaNevada();
//     }else if(Desicion === "Atacar"){
//       const resultadoBatalla =  HandleCombat(JuliaLuz, ArielRobert)
//         if(resultadoBatalla === "Gano"){
//             BosquesAncestralesToZonaNevada();
//         }else if(Desicion === "Perdio"){
//             GameOver(ArielRobert)
//         }
//     }
// }


