function saludarBoton(event) {
    alert('¡Hola soy el botón!');
    event.stopPropagation(); 
}

var divElement = document.getElementById("div");


        divElement.addEventListener("click", function() {
            alert("Hola! Soy el div");
        
        

        });
