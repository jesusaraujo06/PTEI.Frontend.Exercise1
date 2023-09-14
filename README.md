# PTEI.Frontend.Exercise1
## Aplicación web SPA en Angular que consume la API pública: TMDB, a través de peticiones HTTPS.

## Requisitos
[NodeJS](https://nodejs.org/es)

[Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Empezar
Empiece clonando el repositorio

```bash
git clone https://github.com/jesusaraujo06/PTEI.Frontend.Exercise1.git
```

Diríjase a la ruta donde clonó el repositorio y abra la solución con Visual Studio

```bash
cd your_path
```

Instalar dependencias
```bash
npm install
```

## Correr
```bash
ng serve --open
```

## Demostración

![image](https://github.com/jesusaraujo06/PTEI.Frontend.Exercise1/assets/72844628/fd8365b5-cd8a-4138-8470-51b35af4420a)

Usando el buscador:

![image](https://github.com/jesusaraujo06/PTEI.Frontend.Exercise1/assets/72844628/0481e979-63ab-45fd-92b9-2e22eda7d27e)


## Consideraciones
- Se utilizó Angular Material y Bootstrap para el diseño

## Pendiente o por mejorar
- Aplicar debounce al buscar una pelicula en el campo de busqueda
- Mejorar el diseño
- Implementar páginación o InfiniteScroll

## **Descripción de la prueba técnica**
**Ejercicio práctico**
En este ejercicio, se te pide que desarrolles una aplicación web SPA en Angular que consuma una
API pública a través de peticiones POST. La aplicación debe permitir a los usuarios buscar y ver
información sobre películas.

**Requisitos**
- La aplicación debe tener un formulario de búsqueda donde el usuario pueda ingresar el título de
una película.
- Al hacer clic en el botón de búsqueda, la aplicación debe realizar una petición POST a la API pública
de The Movie DB (https://www.themoviedb.org/documentation/api) y mostrar los resultados en
una lista.
- Cada elemento de la lista debe incluir el título de la película, la fecha de estreno y la descripción.
- La aplicación debe usar Angular Material para los componentes de la interfaz de usuario (botones,
formularios, etc.).
- La aplicación debe incluir validaciones en front para asegurarse de que el usuario ingrese un título
válido en el formulario de búsqueda.

**Entregables**
- El código fuente de la aplicación en un repositorio de Git.
- Un archivo README que explique cómo se puede ejecutar la aplicación y cualquier otra
información relevante.
