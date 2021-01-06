function maPosition(position) {
  var infopos = "Ma position :\n";
  infopos += "Latitude : "+position.coords.latitude +"\n";
  infopos += "Longitude: "+position.coords.longitude+"\n";
  document.getElementById("infoposition").innerHTML = infopos;
}

if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(maPosition);