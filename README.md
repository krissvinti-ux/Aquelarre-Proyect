# Aquelarre — Lectura de Cartas (React + Vite + Tailwind)

Aquelarre es una Single Page Application (SPA) desarrollada con **React + Vite**, **Tailwind CSS** y **React Router DOM**. La aplicación guía al usuario a través de un flujo completo: **Inicio (Log in / Register)  Registro → Selección de 3 cartas → Interpretación → Historial**, incluyendo la opción de **eliminar el historial de lecturas**.

## Demo / Vista general

Flujo principal de navegación dentro de la aplicación:

1. **Pantalla inicial (Home / Landing)**
   - Vista general con dos accesos:
     - **Log in**
     - **Register**

2. **Register (Formulario de registro)**
   - El usuario ingresa su **nombre**.
   - Al hacer clic en **Guardar / Continuar**, la app lo redirige al **tablero de lectura**.

3. **Tablero de lectura (Card Selection)**
   - El usuario selecciona **exactamente 3 cartas** (**Presente / Pasado / Futuro**).
   - Al confirmar, se muestran **3 cartas obtenidas desde la API**.
   - El usuario hace clic en **Interpretar** para avanzar a la lectura.

4. **Interpretación (Card Reading)**
   - Se presenta la interpretación de las cartas seleccionadas/obtenidas.
   - El usuario hace clic en **Siguiente** para acceder al historial.

5. **Historial (Reading History)**
   - Se visualiza el historial de lecturas realizadas.
   - Desde esta pantalla el usuario puede:
     - **Visualizar** lecturas anteriores
     - **Eliminar** el historial (borrar registros)
     - **Volver al inicio** (Home / Login)


## Objetivo del proyecto

Construir una experiencia interactiva de lectura basada en cartas que permita:

- Registrar al usuario (nombre) para iniciar la experiencia.
- Seleccionar 3 cartas en un tablero.
- Obtener 3 cartas válidas desde una API externa y mostrarlas como resultado.
- Continuar a una pantalla de interpretación de la tirada.
- Guardar y consultar el historial de lecturas, con opción de eliminación.


## Funcionalidades principales

- Home con acceso a **Log in** y **Register**.
- Registro simple (captura de nombre).
- **Selección de cartas**:
  - Límite de **máximo 3** cartas.
  - Etiquetas por orden: **Presente / Pasado / Futuro**.
- **Consumo de API**:
  - Fetch a API externa (MockAPI).
  - Filtrado de cartas inválidas (por ejemplo, sin imagen).
  - Selección aleatoria de 3 cartas válidas.
- **Resultados**:
  - Render de las 3 cartas con imagen.
  - Manejo de estados `loading` y `error`.
- **Interpretación**:
  - Navegación desde resultados con botón **Interpretar**.
- **Historial**:
  - Visualización de lecturas anteriores.
  - Eliminación de historial.
- **Persistencia**:
  - Uso de `localStorage` para conservar información necesaria entre pantallas (por ejemplo, cartas de la tirada o historial).


## Tecnologías utilizadas

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Fetch API**
- **MockAPI**



## API utilizada

La aplicación consume datos desde:

- `https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/`

Campos utilizados (referenciales, pueden variar según el dataset):

- `id`
- `cardNumber`
- `spanishName`
- `clowCard` (URL de imagen)



## Rutas del proyecto (referencial)

- `/` → Home (Log in / Register)
- `/register` → Formulario de registro
- `/card-selection` → Selección de cartas (tablero)
- `/card-reading` → Interpretación / lectura
- `/reading-history` → Historial de lecturas



## Instalación y ejecución local

### Requisitos
- Node.js (recomendado: versión **LTS**)
- npm

### Pasos

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPO>

2. Entra al directorio del proyecto:

cd aquelarre

3. Instala dependencias:

npm install


4. Ejecuta el proyecto en modo desarrollo:

npm run dev


5. Abre la URL que muestra la terminal (por defecto Vite):

http://localhost:5173

6. Estructura de carpetas (referencial)

Nota: respeta los nombres exactos tal como están en tu repositorio.

src/
  components/
    Navbar.jsx
    Footer.jsx
  pages/
    Registrer.jsx
    Registrer.css
    CardSelection.jsx
    CardReading.jsx
    cardReading.css
    Index.jsx
    ReadingHistory.jsx
  images/
    background.png
    logocard.png
    logo.jpg
  layout/
    Layout.jsx
  router/
    index.jsx
  App.css
  App.jsx
  index.css
  main.jsx

**Créditos**

Product Owner: Patricia Perez
Scrum Master: Cristina Viejó
Tech Lead: Graciela Quinteros
UX Designer: Jenifer Ceballos

**Desarrollo (Frontend)**

Patricia Perez
Cristina Viejó
Graciela Quinteros
Jenifer Ceballos
