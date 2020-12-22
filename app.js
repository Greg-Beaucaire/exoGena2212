let heure = prompt('Quelle heure est-il ? Utilisez le format suivant : HH:MM');

function minutesTillMidnight(heure){
let heureToMinute = heure[0] + heure[1];
let minute = heure[3] + heure[4];
heureToMinute = parseInt(heureToMinute)* 60;
minute = parseInt(minute);
let minuteDansUneBelleJourneeSansWordpress = 1440;
let minuteDansUneBelleJourneeSansWordpressDejaEcoulees = minute + heureToMinute;
let tempsRestantAvantMinuitDansCetteSiBelleJourneeSansWordpress = minuteDansUneBelleJourneeSansWordpress - minuteDansUneBelleJourneeSansWordpressDejaEcoulees;
alert(`Il reste ${tempsRestantAvantMinuitDansCetteSiBelleJourneeSansWordpress} minutes avant qu'il ne soit minuit`);
}

minutesTillMidnight(heure);

