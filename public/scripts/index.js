(() => document.addEventListener("DOMContentLoaded", () => {
    // Declaraciones
    const socket = io()
    const btnMap = document.getElementById("btnMap");
    const mapFrame = document.getElementById("mapFrame");
    // Funciones

    // Eventos
    btnMap.addEventListener("click", () => {
        if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            // La ubicacion esta Habilitada
            if(typeof position === "object"){
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