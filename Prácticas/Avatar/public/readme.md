# Proyecto: La Leyenda de Aang

Este proyecto es una pequeña aplicación interactiva en la que puedes seleccionar un personaje del universo de *Avatar: La Leyenda de Aang* para enfrentar a un enemigo aleatorio en un juego de ataques elementales.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

    public/ 
    │
    ├── assets/
    │ └── Imágenes e íconos (personajes, elementos, fondo, favicon, etc.)
    ├── css/
    │ └── style.css
    ├── js/
    │ └── avatar.js
    ├── avatar.html
    └── README.md

## Desarrollo paso a paso

### 1. Creación de html (`avatar.html`)
- Comenzamos creando el archivo HTML.
- Agregamos un título (`<h1>`) con íconos representando los elementos.
- Añadimos una sección inicial donde el jugador puede seleccionar su personaje.
- dejamos preparado un espacio para los ataques

### 2. Implementación de la lógica básica en selección del personaje (`avatar.js`)
- Empezamos a trabajar con JavaScript para detectar la selección del personaje.
- Creamos una función que, al hacer clic sobre un personaje, mostraba su nombre.
- Mostraba un mensaje y hacía visible la imagen del personaje seleccionado.

### 3. Mejora visual: imágenes de personajes y estilos iniciales
- Decidimos agregar imágenes para cada personaje para hacer la interfaz más visual.
- Actualizamos el HTML y JavaScript para mostrar las imágenes correspondientes.
- Añadimos un poco de CSS para centrar y alinear mejor los elementos visuales.

### 4. Mejoras estéticas (`style.css`)
- Implementamos un fondo temático generado con inteligencia artificial y un favicon para dar una identidad visual coherente.
- Diseñamos tarjetas visuales para los personajes con hover y mejor formato.
- Añadimos un sistema de vidas visualizado con texto y span estilizados.

### 5. Pie de página
- Añadimos un footer con el logo del equipo y una frase distintiva.
- Incluimos estilos adaptativos (media queries) para hacer la interfaz responsiva en dispositivos móviles.

### 6. Función para elegir personaje enemigo aleatorio
- Implementamos una función que selecciona un enemigo aleatorio distinto al personaje elegido por el jugador.
- Esta lógica asegura que no se repita el personaje y actualiza el nombre e imagen del enemigo.
- También muestra un mensaje emergente (`alert`) para confirmar la elección.

### 7. Verificación de personaje válido
- Se agregó una validación dentro de la función principal para asegurarse de que el personaje seleccionado exista en el sistema.
- Si se intenta seleccionar un personaje no definido, se muestra un mensaje de error y se ocultan las imágenes.


## Resultado de momento

- Puedes seleccionar entre **Zuko**, **Katara**, **Aang** o **Toph**.
- El sistema escoge un enemigo automáticamente (que no sea el mismo que el jugador).
- Aparecen las imágenes correspondientes y se muestran las vidas.
- Hay botones para elegir ataques elementales (sin lógica aún implementada para el combate).
- La página tiene un diseño visual cuidado y es funcional desde el navegador sin necesidad de servidor.

---

Desarrollado por [The Debugging Dojo ©](https://github.com/orgs/PowerSystem2024/teams/thedebuggingdojo)  
*"Mastering code, one bug at a time"*
