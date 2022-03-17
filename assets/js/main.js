// var getEventsList = function(city, startDateTime) {
//     var startDateTime = startDateTime + "T00:00:00Z"
//     var eventUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="
//                     + ticketMasterCred.CONSUMER_KEY
//                     + "&city=" + city
//                     + "&startDateTime=" + startDateTime
//                     + "&sort=date,asc"
//     fetch(eventUrl)
//         .then(response => {
//         if (response.ok) {
//             response.json().then(data =>{
//                 eventsList = data._embedded.events;
//                 for (var i = 0; i<eventsList.length; i++) {
//                     createEventCard(eventsList[i])
//                 }
//             })
//         }
//         else {
//             alert("Error, bad response")
//         }
//     })
// };

// var createEventCard = function(event) {
//     var eventCardEl = $("<div>").addClass("card horizontal")
//     var cardImageEl = $("<div>").addClass("card-image")
//     var ImageEl = $("<img>").attr("src", event.images[0].url)
//     var eventCardStacked =$("<div>").addClass("card-stacked")
//     var cardContentEl = $("<div>").addClass("card-content")
//     var eventNameEl = $("<p>").text(event.name)
//     var eventDateEl =$("<p>").text(event.dates.start.localDate)
//     if (event.priceRanges){
//         var eventPriceEl =$("<p>").text("Lowest Price: $" + event.priceRanges[0].min)
//     }
//     else {
//         var eventPriceEl =$("<p>")
//     }
//     var eventVenueEl = $("<p>").text(event._embedded.venues[0].name)

//     var eventActionEl = $("<div>").addClass("card-action")
//     var eventLinkEl = $("<a>")
//                         .attr("href", event.url)
//                         .text("Buy Tickets")


//     cardContentEl.append(eventNameEl, eventDateEl, eventPriceEl, eventVenueEl)
//     eventActionEl.append(eventLinkEl)
//     eventCardStacked.append(cardContentEl, eventActionEl)
//     cardImageEl.append(ImageEl)
//     eventCardEl.append(cardImageEl, eventCardStacked)

//     $("#right-side-results").append(eventCardEl)
// };

function initMap() {
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var chicago = new google.maps.LatLng(41.850033, -87.6500523);
    var mapOptions = {
      zoom:7,
      center: chicago
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
};

function calcRoute(start, end) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'));

    var request = {
        origin: start,
        destination: end,
        travelMode: "DRIVING"
    };
    console.log(request)
    directionsService.route(request, function(result, status){
        if (status == "OK"){
            console.log(result);
            console.log(result.routes[0].legs[0].duration.text);
            directionsRenderer.setDirections(result);
        }
    });
    directionsRenderer.setMap(map);
};

addressString = "738 W Irving Park, Chicago IL"
eventCity = "Chicago"
eventDate = "2022-05-05"

window.addEventListener('load', function () {
    initMap();
    // getEventsList(eventCity, eventDate);

    setTimeout(function () {
        calcRoute(addressString, "Beat Kitchen Chicago")
    }, 5000);
});

// var events = getEventsList("Chicago", "2022-05-05");
// getETAInfo("irvine", "disneyland");



// function getETAInfo(start, end) {
//     var directionInfo = fetch("https://maps.googleapis.com/maps/api/directions/json?origin=" + start + "&destination=" + end + "&key=" + "AIzaSyCmFDQf58ZuTf-R93Rkrlxk5HEeNe2XmjY", {
//         mode: "no-cors"
//     });
//     directionInfo.then(directionInfo => {
//         console.log(directionInfo);
//         // var distance = directionInfo.routes.legs[0].distance.text;
//         // var duration = directionInfo.routes.legs[0].duration.text;
//     })
// }

// function getETAInfo(start, end) {
//     var directionInfo = fetch("https://www.mapquestapi.com/directions/v2/route?key=Gt9LXIoolr55XbcGYg9MVFhLr9xt8DH0&from=disneyland&to=irvine");
//     console.log(directionInfo);
//     directionInfo.then(directionInfo => {
//         console.log(directionInfo);
//         // var distance = directionInfo.routes.legs[0].distance.text;
//         // var duration = directionInfo.routes.legs[0].duration.text;
//     })
// }

// getETAInfo("irvine", "disneyland");

