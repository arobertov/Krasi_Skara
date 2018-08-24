function initMap() {
        // The location of Sofia
        var sofia = {lat: 42.720184,lng: 23.254202};
        // The map, centered at Sofia
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 16, center: sofia});
        // The marker, positioned at Sofia
        var marker = new google.maps.Marker({position: sofia, map: map});
}

