import { Imprime } from "../../Funciones/Handlers/ImprimeMenaje";
import { ArielRobert, ReySlimeN1 } from "../../gameInit";
import { RoadAldoriaToBosquesAncestrales } from "../Route1/AldoriaToBosquesAncestrales.route";
import { RoadAldoriaToDeciertoDeSombras } from "../Route2/AldoriaToDesiertodelasSombras.route";


export function AldoriaToBARoute(){
    Imprime("Has salido de las murallas de Aldoria, hay dos caminos...")
    Imprime("Que camino deseas tomar, Bosques Ancestrales o Desierto de las Sombras")

}
export function TomarCamino(camino){
    if(camino == "BosquesAncestrales"){
        RoadAldoriaToBosquesAncestrales();
    }
    if(camino == "DeciertoDeSombras"){
        //TODO
        RoadAldoriaToDeciertoDeSombras();
    }
    if(camino == "RutasElficas" ){

        RoadAldoriaToRutasElficas();

    }
    if(camino == "SantuarioElfico" ){

        RoadAldoriaToRutasSantuarioElfico();
}

if(camino == "SenderosOscuros" )

{
RoadAldoriaToSenderosOscuros();
}
if(camino == "CiudadAbandonadadelasSombras" )

{
RoadAldoriaToCiudadAbandonadadelasSombras();
}
if(camino == "DunasPerdidas" ){

    RoadAldoriaToDunasPerdidas();

}
if(camino == "OasisdelaDesesperacion" ){

    RoadAldoriaToOasisdelaDesesperacion();

}





}