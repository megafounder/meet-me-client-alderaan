$( document ).ready(function() {
  $( "#GPS" ).click(function() {
        getLocation();
    });
});

function getLocation() {
   console.log("button clicked");

   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition,showError);
   } else {
       x.innerHTML = "Geolocation is not supported by this browser.";
   }
}

function showPosition(position) {
   var latlon = position.coords.latitude+","+position.coords.longitude;
   var heading = 0
   // alert (latlon)
   var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C" + latlon;
   var image_url="<img src=" + url + ">";
   document.getElementById("map").innerHTML =image_url;
}

function showError(error) {
   switch(error.code) {
       case error.PERMISSION_DENIED:
           x.innerHTML = "User denied the request for Geolocation."
           break;
       case error.POSITION_UNAVAILABLE:
           x.innerHTML = "Location information is unavailable."
           break;
       case error.TIMEOUT:
           x.innerHTML = "The request to get user location timed out."
           break;
       case error.UNKNOWN_ERROR:
           x.innerHTML = "An unknown error occurred."
           break;
   }
}
