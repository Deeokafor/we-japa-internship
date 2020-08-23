(function initMap() {
    var nigeria = {
        lat: 9.0820,
        long: 8.6753
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: nigeria
    });
    
    var marker = new google.maps.Marker({position: nigeria, map: map});
})();