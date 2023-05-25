function initMap() {
  const center = new google.maps.LatLng(-23.991249, -46.302834);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: center,
  });

  const bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-24.005, -46.342),
    new google.maps.LatLng(-23.980, -46.282)
  );

  map.fitBounds(bounds);

  // Marcador 1: R. Carvalho de Mendonça, 121 - Encruzilhada, Santos - SP, 11070-100
  const marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(-23.972591, -46.322925),
    map: map,
  });
  const infoWindow1 = new google.maps.InfoWindow({
    content: "R. Carvalho de Mendonça, 121 - Encruzilhada, Santos - SP, 11070-100",
  });
  marker1.addListener("click", () => {
    const licensePlate = document.getElementById("licence").value.toUpperCase();
    displayParkingInfo("Estapar", "10,00", licensePlate);
    infoWindow1.open(map, marker1);
  });

  // Marcador 2: Av. Cândido Gafre - Docas, Santos - SP, 11013-240
  const marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(-23.979547, -46.307741),
    map: map,
  });
  const infoWindow2 = new google.maps.InfoWindow({
    content: "Av. Cândido Gafre - Docas, Santos - SP, 11013-240",
  });
  marker2.addListener("click", () => {
    const licensePlate = document.getElementById("licence").value.toUpperCase();
    displayParkingInfo("Concais", "15,00", licensePlate);
    infoWindow2.open(map, marker2);
  });

  // Marcador 3: R. Cláudio Doneux, 54 - Gonzaga, Santos - SP, 11060-460
  const marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(-23.961464, -46.334450),
    map: map,
  });
  const infoWindow3 = new google.maps.InfoWindow({
    content: "R. Cláudio Doneux, 54 - Gonzaga, Santos - SP, 11060-460",
  });
  marker3.addListener("click", () => {
    const licensePlate = document.getElementById("licence").value.toUpperCase();
    displayParkingInfo("Gonzaga", "12,00", licensePlate);
    infoWindow3.open(map, marker3);
  });

  map.addListener("dragend", function () {
    if (!bounds.contains(map.getCenter())) {
      const center = map.getCenter();
      const newLat = Math.max(
        bounds.getSouthWest().lat(),
        Math.min(center.lat(), bounds.getNorthEast().lat())
      );
      const newLng = Math.max(
        bounds.getSouthWest().lng(),
        Math.min(center.lng(), bounds.getNorthEast().lng())
      );
      map.setCenter(new google.maps.LatLng(newLat, newLng));
    }
  });
}

function displayParkingInfo(name, price, licensePlate) {
  const garageTable = document.getElementById("garage");
  const newRow = garageTable.insertRow();
  const nameCell = newRow.insertCell(0);
  const priceCell = newRow.insertCell(1);
  const licensePlateCell = newRow.insertCell(2);
  const reserveButtonCell = newRow.insertCell(3);

  nameCell.innerHTML = name;
  priceCell.innerHTML = price;
  licensePlateCell.innerHTML = licensePlate;
  reserveButtonCell.innerHTML = `<button class="reserve-button" style="background-color: #3650e7; color: #fff">Reservar</button>`;
}

window.initMap = initMap;
