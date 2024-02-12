# evaluacion-front

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```

## DataProvider

The included data provider use [ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server). It fits REST APIs powered by [JSON Server](https://github.com/typicode/json-server), such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

You'll find an `.env` file at the project root that includes a `VITE_JSON_SERVER_URL` variable. Set it to the URL of your backend. By default, we set it to targets [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Evaluacion Front
    Este proyecto llamado "evaluacion-front" es una aplicación front-end construida con Vite y React. Se conecta directamente a un backend en laravel. 

    Se sugiere utilizar [MAMP PRO](https://www.mamp.info/en/downloads/) para una mejor compatibilidad
    
    A continuación, se detallan las principales configuraciones y dependencias utilizadas en este proyecto.

## Scripts
    dev: Inicia el entorno de desarrollo utilizando Vite.
    build: Genera una versión optimizada del proyecto para producción mediante Vite.
    serve: Previsualiza la versión de producción generada por Vite.
    type-check: Realiza la verificación estática de tipos utilizando TypeScript.
    lint: Ejecuta ESLint para realizar análisis estático del código y aplicar correcciones automáticas.
    format: Utiliza Prettier para formatear el código en el directorio ./src.
    Dependencias
    Producción
    axios: Librería para realizar peticiones HTTP.
    bootstrap: Marco de diseño CSS y componentes.
    jwt-decode: Decodificador de JSON Web Tokens (JWT).
    ra-data-json-server: Adaptador para React Admin que utiliza JSON Server como backend.
    ra-input-rich-text: Componente de entrada de texto enriquecido para React Admin.
    react: Biblioteca principal de React.
    react-admin: Marco para construir interfaces de administración basadas en React.
    react-dom: Manipulación del DOM para React.
    react-router-dom: Enrutamiento para aplicaciones React.
    sweetalert2: Biblioteca para mostrar modales y alertas interactivas.
    Desarrollo
    @types/node: Definiciones de tipos para Node.js.
    @types/react: Definiciones de tipos para React.
    @types/react-dom: Definiciones de tipos para ReactDOM.
    @typescript-eslint/eslint-plugin: Plugin ESLint con reglas específicas para TypeScript.
    @typescript-eslint/parser: Parser para TypeScript compatible con ESLint.
    @vitejs/plugin-react: Plugin Vite para trabajar con React.
    eslint: Herramienta para identificar y corregir problemas en el código JavaScript/TypeScript.
    eslint-config-prettier: Configuración para desactivar reglas de ESLint que entran en conflicto con Prettier.
    eslint-plugin-react: Reglas específicas de ESLint para trabajar con React.
    eslint-plugin-react-hooks: Reglas específicas de ESLint para trabajar con los hooks de React.
    prettier: Herramienta para formatear código de manera consistente.
    typescript: Lenguaje de programación que añade tipos a JavaScript.
    vite: Marco de desarrollo para construir aplicaciones web modernas.

Estas dependencias están organizadas en las secciones "dependencies" y "devDependencies" según si son necesarias en producción o solo en desarrollo, respectivamente.

