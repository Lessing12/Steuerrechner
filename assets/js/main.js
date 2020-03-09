

// Mehrwertsteuersatz
steuersatz1 = 0.16;
steuersatz2 = 0.20;
steuersatz3 = 0.35;
steuersatz4 = 0.45;
  
// Variablen
var nettobetrag  = 0; // Nettobetrag
var betrag = 0; // Bruttobetrag
var steuerbetrag = 0; // Mehrwertsteuer
  
function berechnen()
{
 
  with(window.document.formular) {
    // Nettobetrag einlesen
    nettobetrag = netto.value;
    // Einfache Eingabepruefungen
    if(nettobetrag == "") {
  alert("Fehler: Bitte Nettobetrag eingeben!");
  return false;
    }
    else if(isNaN(nettobetrag) == true) {
  alert("Fehler: Bitte als Nettobetrag einen Zahlenwert eingeben!");
  return false;
    }
    if(nettobetrag <=9408){
        alert("Sie müssen keine Einkommensteuer zahlen!");
        return true;
    }
    if(nettobetrag >=9409 && nettobetrag <= 14532){
       
    
    // steuerbetrag = eval(nettobetrag + "*" + steuersatz1);
    // betrag = eval(nettobetrag + "-" + steuerbetrag);
    console.log(nettobetrag)
    let z = (nettobetrag-9408)/10000
    betrag=(972.87*z+1400)*z   
    // MWSt und Brutto ausgeben
    brutto.value = betrag;
    mwst.value = steuerbetrag;
    }
    else if(nettobetrag >=14532 && nettobetrag <= 57000){

        console.log(nettobetrag)
        let z = (nettobetrag-14532)/10000
        betrag=(212.02*z+2397)*z+972.79     
        brutto.value = betrag;
        mwst.value = steuerbetrag;
    }
      if(nettobetrag >=57052 && nettobetrag <= 270500){
        console.log(nettobetrag)
        // let z = (nettobetrag-9408)/10000
        betrag=(0.42*nettobetrag-8963.74)   


        // MWst und Brutto berechnen
        // steuerbetrag = eval(nettobetrag + "*" + steuersatz3);
        // betrag = eval(nettobetrag + "-" + steuerbetrag);
        // MWSt und Brutto ausgeben
        brutto.value = betrag;
        mwst.value = steuerbetrag;
        }
        else if(nettobetrag >= 270501){
            betrag=(0.45*nettobetrag-17078.74) 

            // steuerbetrag = eval(nettobetrag + "*" + steuersatz4); 
            // betrag = eval(nettobetrag + "-" + steuerbetrag);
            brutto.value = betrag;
            mwst.value = steuerbetrag;
        }
  return true;
}

}

function ruecksetzen()
{
  with(window.document.formular) {
    bruttobetrag = 0;
    steuerbetrag = 0;
    if(berechnen() == false) {
  brutto.value = betrag;
  mwst.value = steuerbetrag;
    }
  }
  return true;
}















// function myFunction() {
//     var greeting;
//     var time = new Date().getHours();
//     if (time < 10) {
//       greeting = "Good morning";
//     } else if (time < 20) {
//       greeting = "Good day";
//     } else {
//       greeting = "Good evening";
//     }
//     document.getElementById("demo").innerHTML = greeting;
//   