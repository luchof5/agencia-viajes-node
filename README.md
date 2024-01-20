```markdown
## Agencia de Viajes - Aplicación Node.js

¡Bienvenido a la aplicación de la Agencia de Viajes! Esta aplicación utiliza Node.js y Express para crear un servidor web que gestiona una agencia de viajes. A continuación, encontrarás información detallada sobre cómo instalar, configurar y ejecutar la aplicación.

### Requisitos Previos

Asegúrate de tener Node.js y npm instalados en tu máquina antes de comenzar. Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).

### Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone [URL_DEL_REPOSITORIO]
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nombre-del-proyecto
   ```

3. Instala las dependencias utilizando npm:

   ```bash
   npm install
   ```

### Configuración de la Base de Datos

1. Abre el archivo `config/db.js` y ajusta la configuración de la base de datos según tus necesidades.

### Ejecución de la Aplicación

1. Inicia la aplicación ejecutando el siguiente comando:

   ```bash
   npm start
   ```

   La aplicación estará disponible en [http://localhost:4000](http://localhost:4000).

### Estructura del Proyecto

- **routes/index.js**: Define las rutas y controladores para la aplicación.
- **config/db.js**: Configuración de la conexión a la base de datos.
- **public**: Carpeta que contiene archivos estáticos como CSS, imágenes, etc.
- **views**: Carpeta que contiene archivos Pug para las vistas.

### Variables de Entorno

La aplicación utiliza la variable de entorno `PORT` para definir el puerto en el que se ejecutará el servidor. Puedes cambiarlo según tus preferencias.

### Características Principales

1. **Conexión a la Base de Datos**: La aplicación se conecta a una base de datos configurada en `config/db.js`.

2. **Motor de Plantillas Pug**: Utiliza Pug como motor de plantillas para renderizar las vistas.

3. **Datos Locales Globales**: Se establecen datos globales como el año actual y el nombre del sitio para su uso en las vistas.

4. **Body Parser**: Configura un middleware para procesar datos del formulario utilizando `express.urlencoded()`.

5. **Archivos Estáticos**: Configura una carpeta pública para servir archivos estáticos.

### Contribuciones

¡Siéntete libre de contribuir y mejorar esta aplicación! Puedes hacerlo mediante pull requests y abriendo problemas.

### Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

¡Disfruta utilizando la aplicación de la Agencia de Viajes construida con Node.js y Express!
```