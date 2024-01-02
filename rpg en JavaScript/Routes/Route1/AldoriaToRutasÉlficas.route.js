import { Imprime } from "../../Funciones/Handlers/ImprimeMenaje";
import { ArielRobert, ReySlime } from "../../gameInit";


export function RoadAldoriaToRutasElficas(){
    Imprime(lang.m6);
    Imprime(lang.m7);
    ArielRobert.PrintStatus(); ReySlime.PrintStatus();
    HandleBatle(ArielRobert,ReySlime)
    //cities.bosquesancestrales();
}