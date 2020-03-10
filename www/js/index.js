console.log('starting application');

document.addEventListener('deviceready', function(event) {
    console.log('device is ready');

    document.querySelector(".pleaseWait").classList.add('hidden');
    document.querySelector(".app").classList.remove('hidden');

    document.querySelector(".app").addEventListener('click', function() {
        navigator.geolocation.watchPosition(function(geoEvent) {
            console.log('position updated');
            console.log(geoEvent);
            // alert('Tu es géolocalisé à la latitude : ' +geoEvent.coords.latitude+ 'et la longitude :'+geoEvent.coords.longitude);
    
            document.querySelector('.latitude').innerHTML = geoEvent.coords.latitude;
            document.querySelector('.longitude').innerHTML = geoEvent.coords.longitude;
            document.querySelector('.accuracy').innerHTML = geoEvent.coords.accuracy;
    
        });
    });

    
});
