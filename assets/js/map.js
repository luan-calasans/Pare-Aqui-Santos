function initMap() {
    const center = new google.maps.LatLng(-23.991249, -46.302834);
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: center,
    });

    // Define os limites para a cidade de Santos
    const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-24.005, -46.342),
        new google.maps.LatLng(-23.980, -46.282)
    );

    // Ajusta os limites do mapa
    map.fitBounds(bounds);

    new google.maps.Marker({
        position: map.getCenter(),
        map: map,
    });
}

window.initMap = initMap;
