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
    marker1.addListener("mouseover", () => {
        infoWindow1.open(map, marker1);
    });
    marker1.addListener("mouseout", () => {
        infoWindow1.close();
    });

    // Marcador 2: Av. Cândido Gafre - Docas, Santos - SP, 11013-240
    const marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(-23.979547, -46.307741),
        map: map,
    });
    const infoWindow2 = new google.maps.InfoWindow({
        content: "Av. Cândido Gafre - Docas, Santos - SP, 11013-240",
    });
    marker2.addListener("mouseover", () => {
        infoWindow2.open(map, marker2);
    });
    marker2.addListener("mouseout", () => {
        infoWindow2.close();
    });

    // Marcador 3: R. Cláudio Doneux, 54 - Gonzaga, Santos - SP, 11060-460
    const marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-23.961464, -46.334450),
        map: map,
    });
    const infoWindow3 = new google.maps.InfoWindow({
        content: "R. Cláudio Doneux, 54 - Gonzaga, Santos - SP, 11060-460",
    });
    marker3.addListener("mouseover", () => {
        infoWindow3.open(map, marker3);
    });
    marker3.addListener("mouseout", () => {
        infoWindow3.close();
    });

    map.addListener("dragend", function () {
        if (!bounds.contains(map.getCenter())) {
            const center = map.getCenter();
            const newLat = Math.max(bounds.getSouthWest().lat(), Math.min(center.lat(), bounds.getNorthEast().lat()));
            const newLng = Math.max(bounds.getSouthWest().lng(), Math.min(center.lng(), bounds.getNorthEast().lng()));
            map.setCenter(new google.maps.LatLng(newLat, newLng));
        }
    });
}

window.initMap = initMap;
