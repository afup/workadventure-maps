var zoneYogaName = "popupYogaZone";
var zoneWelcomeName = "popupWelcomeZone";
var zoneRollercoasterName = "popupRollercoasterZone";
var zoneJoindinName1 = "popupJoindinZone1";
var zoneJoindinName2 = "popupJoindinZone2";

WA.onEnterZone(zoneYogaName, () => {
	var estimateStartDate = chrono("May 18 23:00:00 2021");
    currentPopup =  WA.openPopup("popUpYoga", "La Session de Yoga " + estimateStartDate ? "démarre dans" + estimateStartDate : " a démarrée", []);
})

WA.onEnterZone(zoneWelcomeName, () => {
	var texts = [
		"Bienvenue à l'AfupDay 2021 ! Nous souhouaitons de profiter au maximum de cette journée 😮",
		"Blah bla blha hbla"
	];
	var page = 0;

    currentPopup = WA.openPopup("popUpWelcome", texts[page++], [{
        label: "Suivant",		
	    className: "popUpElement",
        callback: (popup1 => {
            popup1.close();
            WA.openPopup("popUpWelcome", texts[page++],[{
	            label: "Fermer",
	            className: "popUpElement",
	            callback: (popup2 => {
	                popup2.close();
            	})
            }])
        })
	}]);
})

WA.onEnterZone(zoneRollercoasterName, () => {
    currentPopup =  WA.openPopup("popUpRollercoaster","Durée d'attente estimée" + chrono("May 18 23:00:00 2031"),[{
        label: "Fermer",
        className: "popUpElement",
        callback: (popup => {
            popup.close();
        })
    }]);
})

WA.onEnterZone(zoneJoindinName1, () => {
    currentPopup =  WA.openPopup("popUpJoindin_1","Donnez votre avis !",[]);
})

WA.onEnterZone(zoneJoindinName2, () => {
    currentPopup =  WA.openPopup("popUpJoindin_2","Donnez votre avis !",[]);
})

WA.onLeaveZone(zoneYogaName, closePopUp)
WA.onLeaveZone(zoneWelcomeName, closePopUp)
WA.onLeaveZone(zoneRollercoasterName, closePopUp)
WA.onLeaveZone(zoneJoindinName1, closePopUp)
WA.onLeaveZone(zoneJoindinName2, closePopUp)


function puriel(value) {
	return (value > 1) ? 's' : '';
}

function chrono(eventStart) {
	var date1 = new Date();
	var date2 = new Date (eventStart);
	var sec = (date2 - date1) / 1000;
	var n = 24 * 3600;
	var jours, heure, minute, seconde, result = 0;

	if (sec > 0) {
		j = Math.floor (sec / n);
		jours = j ? ' ' + j + " jour" + puriel(j) : '';
		h = Math.floor ((sec - (j * n)) / 3600);
		heure = h ? ' ' + h + " heure" + puriel(h) : '';
		mn = Math.floor ((sec - ((j * n + h * 3600))) / 60);
		minute = mn ? ' ' + mn + " minute" + puriel(mn) : '';
		sec = Math.floor (sec - ((j * n + h * 3600 + mn * 60)));
		seconde = sec ? " et " + sec + " seconde" + puriel(sec) : '';
		
		result = jours +  heure + minute + seconde
	}

	return result;
}

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
