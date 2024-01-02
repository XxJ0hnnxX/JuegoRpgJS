import { Imprime } from "../../Funciones/Handlers/ImprimeMenaje";
import { ArielRobert, JuliaLuz } from "../../gameInit";

export function RoadAldoriaToSenderosOscuros(){
    Imprime(lang.m6);
    Imprime(lang.m7);
    ArielRobert.PrintStatus(); ReySlime.PrintStatus();
    HandleBatle(ArielRobert,ReySlime)
    //cities.bosquesancestrales();
}