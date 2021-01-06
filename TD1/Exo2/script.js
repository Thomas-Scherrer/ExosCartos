var options = {
  enableHighAccuracy: true,
};

function success(position) {
  var infopos = "Ma position actuelle :<br>";
  infopos += "Latitude : " + position.coords.latitude + "<br>";
  infopos += "Longitude: " + position.coords.longitude + "<br>";
  infopos +=
    "Avec une précision de " + position.coords.accuracy + " mètres" + "<br>";
    infopos += "Et une vitesse de déplacement de la position égale à " + position.coords.speed + "<br>";
  document.getElementById("infoposition").innerHTML = infopos;
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(success, error, options);
