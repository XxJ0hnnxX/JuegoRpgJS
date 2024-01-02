// GETTING WEAPONS//
import Arco from "./Armas/arco.arma";
import Baston from "./Armas/baston.arma";
import { Espada } from "./Armas/espada.arma";
import { Hacha } from "./Armas/hacha.arma";
// GETTING WEAPONS//
//-------------------------------------------------------------------//

//-------------------------------------------------------------------//
// GETTING PLAYERS//
import Caballero from "./Personajes/caballero.personaje";
import Arquero from "./Personajes/arquero.personaje";
import Elfo from "./Personajes/elfo.personaje";
// GETTING PLAYERS//
//-------------------------------------------------------------------//

//-------------------------------------------------------------------//

//-------------------------------------------------------------------//
//GETTING ENEMIES//
import { Zombie } from "./Personajes/zombie.personaje";
import { Slime } from "./Personajes/slime.personaje";
import { Minotauro } from "./Personajes/minotauro.personaje";
import { Demonio } from "./Personajes/demonio.personaje"
//GETTING ENEMIES//
//-------------------------------------------------------------------//


//PERSONAJES//
export const ArielRobert = new Caballero("Ariel Robert","100","10","15","20")
export const JuliaLuz = new Elfo("Julia Luz", "", "")
export const ThorneIronfist = new Arquero("Thorne Ironfist", "", "")
//-------------------------------------------------------------------//

//-------------------------------------------------------------------//
//
export const ZombieMan = new Zombie()
export const ReySlimeN1 = new Slime("Slime","40","5","8","5")
export const ReySlimeN2 = new Slime("Slime","48","9","9","7")
export const Minotauro = new Minotauro("")
export const Demonio = new Demonio("")
//-------------------------------------------------------------------//
//
//-------------------------------------------------------------------//
//ARMAS
export const EspadaBastarda = new Espada("", "", "")
export const BastonElfico = new Baston("", "", "")
export const Arco = new Arco("", "", "")
export const Hacha = new Hacha("")
//-------------------------------------------------------------------//
//
//-------------------------------------------------------------------//
//IDIOMA
import { MESSAGGES } from "./lang/gameMessajes.lang";
const LANG = "ES";
export let lang;

if(LANG === "ES"){
    lang = MESSAGGES.es;
}
if(LANG === "EN"){
    lang = MESSAGGES.en;
}
//CITY
