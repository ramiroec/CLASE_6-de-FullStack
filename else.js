        // Función para mostrar el saludo basado en la hora
        function mostrarSaludo() {
            const hora = new Date().getHours();

            // Ejemplo 1: if
            if (hora < 18) {
                document.getElementById("demo1").innerHTML = "¡Buen día!";
            }

            // Ejemplo 2: if...else
            let saludo;
            if (hora < 18) {
                saludo = "¡Buen día!";
            } else {
                saludo = "¡Buenas noches!";
            }
            document.getElementById("demo2").innerHTML = saludo;
        }

        // Función para actualizar el saludo al hacer clic en el botón
        function actualizarSaludo() {
            mostrarSaludo();
        }

        // Mostrar el saludo al cargar la página
        mostrarSaludo();
