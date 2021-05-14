var zoneSchoolName = "popupYogaZone";

WA.onEnterZone(zoneSchoolName, () => {
    currentPopup =  WA.openPopup("popUpYoga","Session de Yoga",[
        {
            label: "See the offer",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlSchoolOffer);
            })
        }]);
})

WA.onLeaveZone(zoneSchoolName, closePopUp)


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
