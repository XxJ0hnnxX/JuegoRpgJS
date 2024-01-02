//IMPORT OBJECTS//
import { ArielRobert } from "./gameInit";
import { JuliaLuz } from "./gameInit";
import { ThorneIronfist } from "./gameInit";
import { Imprime } from "./Funciones/Handlers/ImprimeMenaje"
import { lang } from "./gameInit";
import { TomarCamino } from "./Routes/Cities/Aldoria.route";
//IMPORT OBJECTS//
//------------------------------------------------------------------------//

//BACK GROUND HISTORY
Imprime(lang.m1)
Imprime(lang.m2)
Imprime(lang.m3)
Imprime(lang.m4)

//FIRST DESITION
let camino = null;
if(camino == "BosquesAncestrales"){
    TomarCamino("BosquesAncestrales");
}else{
    TomarCamino("DeciertoDeSombras");
}

if(camino == "RutasElficas"){
    TomarCamino("RutasElficas");

}else{


TomarCamino("SenderosOscuros");


}

if (camino == "SenderosOscuros"){
    TomarCamino("SenderosOscuros");
}else{

    TomarCamino("SantuarioElfico");

}
if (camino == "OasisdelaDesesperacion"){
    TomarCamino("OasisdelaDesesperacion");
}else{

    TomarCamino("DunasPerdidas");

}
if (camino == "DunasPerdidas"){
    TomarCamino("DunasPerdidas");
}else{

    TomarCamino("CiudadAbandonadadelasSombras");

}



