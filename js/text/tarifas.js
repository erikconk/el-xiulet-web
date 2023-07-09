const space = "&nbsp;"
const infoImg = `<img class='singleCard-icons' src='./assets/icons/info.png'>${space}`
const checkedImg = `<img class='singleCard-icons' src='./assets/icons/check.png'>${space}`
const notImg = `<img class='singleCard-icons' src='./assets/icons/not.png'>${space}`
const moneyImg = `<img class='tarifas-icons' src='./assets/icons/money.png'>${space}`
const newLine = "<br>"

export const info = [
    `<li>Tots els serveis estan subjectes als <a id="horarios" onclick="link()">horaris del centre.</a><br> 
    <li>Les parades de l'autobús que s'inclouen als serveis son: <a id="servicios" onclick="link()">"Font de la call" nº 5100 l'anada al cole i "Font de la call" nº 5099 per la recollida.</a><br>
    <li>Revisa la compatiblitat de <a id="servicios" onclick="link()">l'acompanyament a les activitats extraescolars</a> previeament a l'inscipció.<br>
    `
]
export const titleBox1 = "Quota Mensual."
export const titleBox2 = "Quota Puntual."
export const tarifas = [
    {
        title : "Matins, tardes i vacances.<br>140€/mes",
        includes :  `
        ${checkedImg}Servei d'acompanyament a l'escola o a la parada de l'autobús.${newLine} 
        ${checkedImg} Recollida a l'escola, inclosos els horaris de l'escola francesa fins a les 20h.${newLine} 
        ${checkedImg} Recollida a la parada de l'autobús.${newLine}
        ${checkedImg} Vacances escolars del setembre al juny.${newLine}
        ${checkedImg} Acompanyar a l'infant a les activitats extraescolars.${newLine}
        ${moneyImg} <strong>Suplement 7€/dia</strong> de dinar a les vacances escolars.
        `
    },
    {
        title : "Tardes i vacances.<br>130€/mes",
        includes :  `
        ${checkedImg} Recollida a l'escola, inclosos els horaris de l'escola francesa fins a les 20h.${newLine} 
        ${checkedImg} Recollida a la parada de l'autobús.${newLine}
        ${checkedImg} Vacances escolars del setembre al juny.${newLine}
        ${checkedImg} Acompanyar a l'infant a les activitats extraescolars.${newLine}
        ${moneyImg} <strong>Suplement 7€/dia</strong> de dinar a les vacances escolars.
        `
    },
    {
        title : "Mitja quota: Matins i tardes.<br>70€/mes",
        includes :  `
        ${infoImg} Inclou dues setmanes naturals de cada mes.${newLine}
        ${checkedImg}Servei d'acompanyament a l'escola o a la parada de l'autobús.${newLine} 
        ${checkedImg} Recollida a l'escola, inclosos els horaris de l'escola francesa fins les 20h.${newLine} 
        ${checkedImg} Recollida a la parada de l'autobús.${newLine}
        ${checkedImg} Acompanyar a l'infant a les activitats extraescolars.${newLine}
        ${moneyImg} <strong>Suplement 15€/dia</strong> a les vacances escolars. (dinar inclòs en el suplement.)
        `
    },
    {
        title : "Matins lectius.<br>40€/mes",
        includes :  `
        ${checkedImg}Servei d'acompanyament a l'escola o a la parada de l'autobús.${newLine} 
        `
    }     
]
export const tarifasPuntuales = [
    {
        title : "Tarda (17h a 20h).<br>10€/dia",
        includes :  `
        ${checkedImg} Recollida a l'escola, inclosos els horaris de l'escola francesa fins les 20h.${newLine} 
        ${checkedImg} Recollida a la parada de l'autobús.${newLine} 
        `
    },
    {
        title : "Tarda (16h a 20h).<br>11€/dia",
        includes :  `
        ${checkedImg} Recollida a l'escola, inclosos els horaris de l'escola francesa fins les 20h.${newLine} 
        ${checkedImg} Recollida a la parada de l'autobús.${newLine}
        `
    },
    {
        title : "Tarda (14h a 20h).<br>13€/dia",
        includes :  `
        ${checkedImg} Recollida a l'escola, inclosos els horaris de l'escola francesa fins a les 20h.${newLine} 
        ${checkedImg} Recollida a la parada de l'autobús.${newLine}
        `
    },
    {
        title : "Mati (7:30h a 9h).<br>4€/dia",
        includes :  `
        ${checkedImg}Servei d'acompanyament a l'escola o a la parada de l'autobús.${newLine} 
        `
    },
    {
        title : "Recollida puntual a l'escola.<br>5€/hora",
        includes :  `
        ${checkedImg} Recollida a l'escola, inclosos els horaris de l'escola francesa fins a les 20h.${newLine} 
        ${checkedImg} Recollida a la parada de Servei d'acompanyament a l'escola o a la parada de l'autobús.${newLine}
        `
    },
    {
        title : "Dia de vacances.<br>19€/dia",
        includes :  `
        ${infoImg} L'horari aplicat és de 7:30h a 20h.${newLine}
        ${checkedImg} Dinar inclòs en el preu de la tarifa.${newLine}
        `
    },
    {
        title : "Mati de vacances.<br>12€/dia",
        includes :  `
        ${infoImg} L'horari aplicat és de 7:30h a 13h.${newLine}
        ${notImg} Dinar no inclòs en el preu de la tarifa.${newLine}
        `
    },
    {
        title : "Tarda de vacances.<br>12€/dia",
        includes :  `
        ${infoImg} L'horari aplicat és de 16h a 20h.${newLine}
        ${notImg} Dinar no inclòs en el preu de la tarifa.${newLine}
        `
    },
]

export const tarifasText = {
    //titleText : "Tarifes",
    //subtitleText : "Curs<br>Setembre 2023 - Juny 2024",
    //infoText : info,
    //titleBox: [titleBox1, titleBox2],
    tarifasMensualesText : tarifas,
    tarifasPuntualesText : tarifasPuntuales
}
