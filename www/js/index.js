console.log('starting application');

var watchPositionId = null;
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

document.addEventListener('deviceready', function(event) {
    console.log('device is ready');

    document.querySelector(".pleaseWait").classList.add('hidden');
    document.querySelector(".app").classList.remove('hidden');

    document.querySelector(".app").addEventListener('click', function() {
        if(watchPositionId) {
            return;
        }
        watchPositionId = navigator.geolocation.watchPosition(function(geoEvent) {
            console.log('position updated');
            console.log(geoEvent);
            // alert('Tu es géolocalisé à la latitude : ' +geoEvent.coords.latitude+ 'et la longitude :'+geoEvent.coords.longitude);
    
            var marker = L.marker([geoEvent.coords.latitude, geoEvent.coords.longitude]).addTo(mymap);

            var circle = L.circle([geoEvent.coords.latitude, geoEvent.coords.longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: geoEvent.coords.accuracy
            }).addTo(mymap);

            mymap.setView([geoEvent.coords.latitude, geoEvent.coords.longitude], 10);

            document.querySelector('.latitude').innerHTML = geoEvent.coords.latitude;
            document.querySelector('.longitude').innerHTML = geoEvent.coords.longitude;
            document.querySelector('.accuracy').innerHTML = geoEvent.coords.accuracy;
    
        });
    });

    
});
