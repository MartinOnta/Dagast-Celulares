window.alert("¡Bienvenido!");

function iniciarMap(){
    var coord = {lat:-34.5668612 ,lng: -59.1178904};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}



