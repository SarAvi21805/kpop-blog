# 🎤 K-Pop World Blog - Proyecto Senior

**Link del proyecto:** [https://kpop-blog.onrender.com/](https://kpop-blog.onrender.com/)  
**Nivel declarado:** Senior (100 pts)  
**Estudiante:** Alejandra Saraí Avilés González 
**Año:** 2026
**Carnet:** 24722

## 🚀 Descripción
Un mini-blog dinámico dedicado a la industria del K-pop. Permite explorar grupos, buscar por nombre, acceder a un grupo aleatorio, gestionar una lista de favoritos personal y cambiar entre modo claro y oscuro (Dark/Light Mode).

## 🛠️ Tecnologías Utilizadas
- **React 18 + Vite**
- **React Router v7** (Implementando la lógica de navegación SPA requerida)
- **Context API** (Gestión de estado global para favoritos y temas)
- **iTunes Search API** (Consumo de datos multimedia dinámicos en tiempo real)
- **JSON Local (Fetch)** (Persistencia de datos estructurales desacoplada)
- **Prop-Types** (Validación de esquemas y tipos de componentes)

## 🌟 Requerimientos Senior Implementados
1. **Consumo de APIs y Datos Desacoplados:** Se utiliza una arquitectura de datos híbrida. La información estructural de los perfiles se gestiona de forma desacoplada mediante un recurso JSON local (cumpliendo con el requisito de **no hardcoding** en componentes), mientras que el contenido multimedia se consume en tiempo real desde la **API oficial de iTunes**, integrando servicios externos para una experiencia de usuario de nivel Senior.
2. **Estado Global (Context API):** Se implementó un `FavoritesProvider` para centralizar la lógica de grupos favoritos y la persistencia del tema (Dark/Light Mode), permitiendo que el estado sea compartido y consistente en todas las vistas de la aplicación.
3. **Validación con Prop-Types:** Se definieron PropTypes en 3 componentes fundamentales para asegurar la robustez del código: `KpopCard`, `SectionHeader` y `FavoritesProvider`.
4. **Navegación Programática y Dinámica:** Uso de los hooks `useNavigate` para la funcionalidad de "Idol Aleatorio", `useParams` para la carga dinámica de detalles y `useLocation` para control de rutas.
5. **Manejo de Errores (Página 404):** Implementación de una ruta de captura (*catch-all*) con una página 404 personalizada para gestionar rutas no existentes.

## 📖 Documentación de Componentes Reutilizables

### 1. `KpopCard`
- **Ubicación:** `src/components/KpopCard.jsx`
- **Función:** Renderiza la tarjeta de presentación de cada grupo en el grid de la lista.
- **Props:** Recibe un objeto `group` que debe contener `id`, `name`, `agency` e `image`.

### 2. `SectionHeader`
- **Ubicación:** `src/components/SectionHeader.jsx`
- **Función:** Encabezado estandarizado con estilos dinámicos para el título y subtítulo de cada página.
- **Props:** `title` (string, requerido) y `subtitle` (string, opcional).

## 🏃 Instrucciones para ejecución local
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev`.

---
*Video de demostración disponible en la carpeta `/demo`.*