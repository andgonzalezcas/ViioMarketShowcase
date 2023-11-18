# ViioMarketShowcase

## Documentación del Proyecto

Este repositorio contiene el código fuente de un proyecto que utiliza Node.js, MongoDB, y Vite con React. El despliegue se realiza mediante Docker y Docker Compose.

### Estructura del Repositorio

- **backend/**: Contiene el código fuente del servidor backend Node.js.
- **frontend/**: Contiene el código fuente del frontend Vite con React.
- **docker-compose.yml**: Archivo de configuración de Docker Compose para la orquestación de contenedores.

### Requisitos del Sistema

- Docker
- Docker Compose

### Configuración del Entorno

1. **Clonar el Repositorio:**
    ```
      bash
      git clone https://github.com/andgonzalezcas/ViioMarketShowcase.git
      cd ViioMarketShowcase
    ```

2. **Construir y Levantar Contenedores:**
    ```
      docker-compose build
      docker-compose up
    ```
  
## Estructura del Proyecto

### Backend

El backend está desarrollado en Node.js. Puedes encontrar el código fuente en el directorio `backend/`.

#### Configuración

- **Puerto de Escucha:** 4040

### Base de Datos (MongoDB)

MongoDB se utiliza como base de datos para el proyecto.

#### Configuración

- **Puerto de Escucha:** 27018

### Frontend

El frontend está desarrollado con Vite y React. Puedes encontrar el código fuente en el directorio `frontend/`.

#### Configuración

- **Puerto de Escucha:** 5174

## Uso del Proyecto

Una vez que los contenedores están en funcionamiento, puedes acceder al backend y frontend mediante los siguientes enlaces:

- Backend: [http://localhost:4040](http://localhost:4040)
- Frontend: [http://localhost:5174](http://localhost:5174)

### documentacion api

En el proyecto nos podemos dirigir a los siguientes enlaces:
- Postman documentatio: [https://documenter.getpostman.com/view/20593277/2s9YXpWzQ6](https://documenter.getpostman.com/view/20593277/2s9YXpWzQ6)
- Swagger: [http://localhost:4040/api-docs](http://localhost:4040/api-docs)
