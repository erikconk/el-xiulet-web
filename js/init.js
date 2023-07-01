import SingleCard from "./tarifasCards.js";
import { tarifasText } from "./text/tarifas.js";
const tarifesAnualsContent = document.getElementById('tarifas-anuals-parent');
const tarifesPuntualsContent = document.getElementById('tarifas-puntuals-parent');

var singleCard = new SingleCard(tarifesAnualsContent, tarifasText.tarifasMensualesText);
var singleCard = new SingleCard(tarifesPuntualsContent, tarifasText.tarifasPuntualesText);
