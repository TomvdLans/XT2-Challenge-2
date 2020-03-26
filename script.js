function start() {                                                                  //roep klok op en check dagdeel wanneer pagina is geladen
    startTime();
    checkDagdeel();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();                                                       //variabelen die uren opslaat
    var m = today.getMinutes();                                                     //variabelen die minuten opslaat
    m = checkTime(m);                                                               //minuten starten checkTime functie

    document.getElementById('clock').innerHTML = h + ":" + m;                       //weergeef uren en minuten binnen element met id "clock"
    setTimeout(startTime, 1200);                                                    //check elke 1200 milisec. tijd
}
    
function checkTime(i) {
    if (i < 10) {i = "0" + i};                                                      //als minuut kleiner is dan 10 voeg 0 ervoor
    return i;
}

function checkDagdeel() {
    var today = new Date();
    var h = today.getHours();
    //console.log(h);                                                               //test uur

    if (h > 21 || h < 6) {                                                          //tussen 21 en 6 is nacht
        document.getElementById("bg").className = "night";                          //verander classname naar dagdeel (verander achtergrond)
        document.getElementById("sun").src = "images/moon.svg";                     //verander afbeelding van zon
        document.getElementById("cloud").src = "images/transparent-cloud.svg";      //verander afbeelding van wolk
        //console.log('nacht');                                                     //test dagdeel

    } else if (h > 19 && h < 21) {                                                  //tussen  19 en 21 is zonsondergang
        document.getElementById("bg").className = "sunset";
        document.getElementById("sun").src = "images/red-sun.svg";
        document.getElementById("cloud").src = "images/transparent-cloud.svg";
        //console.log('ondergang');
        

    } else if (h > 6 && h < 9) {                                                    //tussen 6 en 9 is zonsopkomst
        document.getElementById("bg").className = "sunrise";
        document.getElementById("sun").src = "images/red-sun.svg";
        document.getElementById("cloud").src = "images/transparent-cloud.svg";
        //console.log('opgang');

    } else {                                                                        //anders is het dag
        document.getElementById("bg").className = "day";
        document.getElementById("sun").src = "images/yellow-sun.svg";
        document.getElementById("cloud").src = "images/white-cloud.svg";
        //console.log('dag');
    }
} setInterval(checkDagdeel, 10000);                                                 //check om de 10.000 milisec. dagdeel


    
