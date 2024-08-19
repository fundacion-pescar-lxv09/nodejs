(() => document.addEventListener("DOMContentLoaded", () => {
    // Declaraciones
    const socket = io()
    const btnMap = document.getElementById("btnMap");
    const mapFrame = document.getElementById("mapFrame");
    // Funciones
    function getNearByPlaces(lat, lng, map){
        // Datos para la solicitud de Lugares
        const req = {
            location: new google.maps.LatLng(lat,lng),
            radius: 10000, // metros
            type: ["hotel"] // servicio
        }
        // Mapa para el renderizado
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(req, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK){
                results.forEach((place) => {
                    new google.maps.Marker({
                        title: place.name,
                        position: place.geometry.location,
                        map
                    })
                })
            }
            else {
                alert("No se encontraron restaurantes registrados cerca de tu posicion")
            }
        })
    }
    // Eventos
    btnMap.addEventListener("click", () => {
        if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            // La ubicacion esta Habilitada
            if(typeof position == 'object'){
                // Coordenadas del Cliente
                const { latitude:lat, longitude:lng } = position?.coords
                // Disparamos el evento de compartir Ubicacion
                socket.emit("shareLocation", { lat, lng })
                // Creamos un Objeto Mapa con las coordenadas
                const map = new google.maps.Map(mapFrame, {
                    center: { lat, lng },
                    zoom: 15
                })
                // Identificamos la posicion del Usuario en el Mapa
                new google.maps.Marker({
                    title: "Usted esta Aquí",
                    position: { lat, lng },
                    map
                })
                // Solicitamos direcciones Cercanas
                getNearByPlaces(lat,lng, map)
            }
            // EL usuario no Permitio la Ubicacion
            else {
                alert("Debes permitir la ubicacion para generar el mapa e identificar donde estas")
            }
        })}
        // El navegador no Soporta Ubicacion
        else {
            alert("Lo sentimos, pero tu navegador No soporta la geolocalizacion")
        }
    })
}))()