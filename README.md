# Rick and Morty Project

Este proyecto es una aplicación de React que utiliza la API de Rick and Morty para mostrar personajes, ubicaciones y episodios de la serie. A continuación, encontrarás detalles sobre las tecnologías utilizadas y cómo puedes ejecutar este proyecto.

## Tecnologías utilizadas

- **React (JSX)**: Utilizamos JSX en lugar de TypeScript para reducir el tiempo de desarrollo. Sin embargo, el proyecto puede migrarse fácilmente a TypeScript, lo que se recomienda para mejorar la robustez y el mantenimiento del código.

- **Material UI (MUI)**: MUI se usó para el diseño de la aplicación debido a su amplio catálogo de componentes predefinidos y personalizables, lo que aceleró el desarrollo y mejoró la consistencia en el diseño visual.

- **Zustand**: Para la gestión de estados globales, elegimos Zustand sobre Redux por ser una alternativa más ligera y fácil de implementar. Zustand es ideal para proyectos donde la complejidad del estado es manejable sin la necesidad de configuración extensa. Es además más rápido y tiene un rendimiento óptimo debido a su enfoque de actualización basada en hooks.

- **TanStack Query (React Query)**: Utilizado para la gestión de datos asíncronos. TanStack Query simplifica las peticiones HTTP y el almacenamiento en caché, proporcionando una forma eficiente de manejar el estado de datos, la actualización automática y la revalidación.

- **API de Rick and Morty**: Se integró la API oficial de Rick and Morty para obtener datos sobre personajes, ubicaciones y episodios. [Documentación de la API](https://rickandmortyapi.com/)

- **Netlify**: Utilizado para el despliegue de la aplicación, proporcionando una URL pública accesible en cualquier momento. Netlify facilita la integración continua y permite actualizar el sitio automáticamente con cada cambio en el repositorio.

## Demo

Puedes ver la demo de la aplicación en el siguiente enlace: [Rick and Morty App en Netlify](https://tu-demo-en-netlify.netlify.app)

## Requisitos previos

- Node.js (versión 14 o superior)
- npm o yarn

## Instalación y ejecución

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

   npm install


