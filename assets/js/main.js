function getETAInfo(start, end) {
    var directionInfo = fetch("https://maps.googleapis.com/maps/api/directions/json?origin=" + start + "&destination=" + end + "&key=" + "AIzaSyCmFDQf58ZuTf-R93Rkrlxk5HEeNe2XmjY");
    directionInfo.then(directionInfo => {
        console.log(directionInfo);
        // var distance = directionInfo.routes.legs[0].distance.text;
        // var duration = directionInfo.routes.legs[0].duration.text;
    })
}



function getEventsList() {
    var eventUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + ticketMasterCred.CONSUMER_KEY

    fetch(eventUrl)
        .then(response => {
        if (response.ok) {
            response.json().then(data =>{
                eventsList = data._embedded.events;
                console.log(eventsList);

                for (var i = 0; i<eventsList.length; i++) {
                    console.log("event i=" + i)
                    console.log(eventsList[i].name)
                    if (eventsList[i].priceRanges) {
                        console.log(eventsList[i].priceRanges)
                    }
                    console.log(eventsList[i].url)
                    venue = eventsList[i]._embedded.venues[0]
                    console.log(venue.name)
                    console.log(venue.city.name)


                }
            })

        }
        else {
            console.log(eventList)
            alert("Error, bad response")
        }

    })

}




