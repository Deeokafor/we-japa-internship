function initMap() {
    var options = {
        zoom: 8,
        center: {lat:6.465422,lng:3.406448}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
    
    var marker = new google.maps.Marker({position: nigeria, map: map});
}