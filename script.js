var zoneYogaName = "popupYogaZone";
var zoneWelcomeName = "popupWelcomeZone";
var zoneRollercoasterName = "popupRollercoasterZone";
var zoneJoindinName1 = "popupJoindinZone1";
var zoneJoindinName2 = "popupJoindinZone2";
var zoneOpenbar1 = "popupOpenbarZone1";
var zoneOpenbar2 = "popupOpenbarZone2";

var urlJoindin = "https://joind.in/event/afup-day-2021-lille";
// "https://joind.in/event/afup-day-2021-lille",
// "https://joind.in/event/afup-day-2021-toulouse"]


WA.onEnterZone(zoneYogaName, () => {
	var estimateStartDate = chrono("May 18 23:00:00 2021");
    currentPopup =  WA.openPopup("popUpYoga", "La Session de Yoga " + estimateStartDate ? "démarre dans" + estimateStartDate : " a démarrée", []);
})

WA.onEnterZone(zoneWelcomeName, () => {
	var texts = [
		"Bienvenue sur la plage de l’AFUP Day 2021 Lille/Rennes ! Voici quelques informations pour profiter des contenus exclusifs réservés à notre public.",
		" Lors des pauses de midi et de l’après-midi, recueillez les débriefs à chaud des speakers dans les zones de chaque ville situées sous leur statues.",
        "Posons-nous 15 min, après le déjeuner et à l’heure du goûter, le temps de respirer en pleine conscience avec notre prof de yoga, dans la zone de yoga située sur le sable. Namaste.",
        "Passez à l’Open Bar entre 12h40 et 13h40 pour échanger avec nos experts PHP qui vous aideront à contribuer au langage et, peut être, partageront avec vous leurs secrets pour être au top niveau.",
        "Installez-vous dans la zone de la cafeteria, près de l’Open Bar, pour discuter et même manger tous ensemble.",
        "Bien sûr, passez voir nos sponsors installés dans leurs bungalows !",
        "Enfin, fouillez la carte, trouvez les easter eggs, retrouvez les copains et les copines, et n’oubliez pas que le Code de Conduite s’applique même sur notre plage virtuelle !"
	];
	var page = 0;

    currentPopup = WA.openPopup("popUpWelcome", texts[page++], [{
        label: "Suivant",		
	    className: "popUpElement",
        callback: (popup1 => {
            popup1.close();
            WA.openPopup("popUpWelcome", texts[page++],[{
	            label: "Suivant",
	            className: "popUpElement",
	            callback: (popup2 => {
	                popup2.close();
                    WA.openPopup("popUpWelcome", texts[page++],[{
                        label: "Suivant",
                        className: "popUpElement",
                        callback: (popup3 => {
                            popup3.close();
                            WA.openPopup("popUpWelcome", texts[page++],[{
                                label: "Suivant",
                                className: "popUpElement",
                                callback: (popup4 => {
                                    popup4.close();
                                    WA.openPopup("popUpWelcome", texts[page++],[{
                                        label: "Suivant",
                                        className: "popUpElement",
                                        callback: (popup5 => {
                                            popup5.close();
                                            WA.openPopup("popUpWelcome", texts[page++],[{
                                                label: "Suivant",
                                                className: "popUpElement",
                                                callback: (popup6 => {
                                                    popup6.close();
                                                    WA.openPopup("popUpWelcome", texts[page++],[{
                                                        label: "Fermer",
                                                        className: "popUpElement",
                                                        callback: (popup7 => {
                                                            popup7.close();
                                                        })
                                                    }])
                                                })
                                            }])
                                        })
                                    }])
                                })
                            }])
                        })
                    }])


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
    currentPopup =  WA.openPopup("popUpJoindin_1","Donnez votre avis sur joind.in !",[{
    	label: "Ouvrir dans un nouvel onglet",
    	className: "popUpElement",
    	callback: (popup => {
    		WA.openTab(urlJoindin);
    	})
    }]);
})

WA.onEnterZone(zoneJoindinName2, () => {
    currentPopup =  WA.openPopup("popUpJoindin_2","Donnez votre avis sur joind.in !",[{
    	label: "Ouvrir dans un nouvel onglet",
    	className: "popUpElement",
    	callback: (popup => {
    		WA.openTab(urlJoindin);
    	})
    }]);
})

WA.onEnterZone(zoneOpenbar1, () => {
    currentPopup =  WA.openPopup("popUpOpenbar1","- Open bar - Discution entre 12h40 et 13h40 avec nos experts.",[{
        label: "Fermer",
        className: "popUpElement",
        callback: (popup => {
            popup.close();
        })
    }]);
})

WA.onEnterZone(zoneOpenbar2, () => {
    currentPopup =  WA.openPopup("popUpOpenbar2","- Cafétéria - papottez en reprenant des forces.",[{
        label: "Fermer",
        className: "popUpElement",
        callback: (popup => {
            popup.close();
        })
    }]);
})
WA.onLeaveZone(zoneYogaName, closePopUp)
WA.onLeaveZone(zoneWelcomeName, closePopUp)
WA.onLeaveZone(zoneRollercoasterName, closePopUp)
WA.onLeaveZone(zoneJoindinName1, closePopUp)
WA.onLeaveZone(zoneJoindinName2, closePopUp)
WA.onLeaveZone(zoneOpenbar1, closePopUp)
WA.onLeaveZone(zoneOpenbar2, closePopUp)


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
