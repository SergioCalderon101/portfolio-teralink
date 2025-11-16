# Portafolio Personal - Sergio Calderon

Portafolio web profesional desarrollado con HTML5, Tailwind CSS y JavaScript vanilla.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🌓 Modo oscuro/claro
- 🎨 Animaciones suaves y transiciones
- 📱 Totalmente responsive (mobile-first)
- ⚡ Optimizado para rendimiento
- 🎯 SEO optimizado

## 📋 Secciones

- **Hero**: Presentación con información de contacto
- **Sobre Mí**: Educación y certificaciones
- **Experiencia**: Historial laboral detallado
- **Proyectos**: Portafolio de proyectos destacados
- **Skills**: Habilidades técnicas y lenguajes
- **Contacto**: Información de contacto y redes sociales

## 🛠️ Tecnologías

- HTML5
- Tailwind CSS (CDN)
- JavaScript (Vanilla)
- Font Awesome (iconos)
- Google Fonts (Inter)

## 📦 Instalación en Hostinger

1. **Descarga los archivos**:
   - `index.html`
   - `script.js`
   - `README.md`

2. **Accede a tu panel de Hostinger**:
   - Ve a "Administrador de archivos" o usa FTP

3. **Sube los archivos**:
   - Navega a la carpeta `public_html`
   - Sube todos los archivos del proyecto

4. **Verifica**:
   - Visita tu dominio (ej: `tudominio.com`)
   - El portafolio debería estar funcionando

## 🎨 Personalización

### Cambiar colores principales
En `index.html`, busca la sección `<script>` con la configuración de Tailwind:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#667eea',    // Color principal
                secondary: '#764ba2',  // Color secundario
            }
        }
    }
}
```

### Actualizar información personal
Busca y reemplaza tu información en:
- Nombre y título (sección `#home`)
- Email y teléfono (secciones `#home` y `#contact`)
- Enlaces de LinkedIn y GitHub
- Experiencia laboral (sección `#experience`)
- Proyectos (sección `#projects`)

### Agregar/quitar secciones
Las secciones están claramente delimitadas con comentarios HTML:
```html
<!-- Hero Section -->
<!-- About Section -->
<!-- Experience Section -->
etc.
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Optimizaciones

- Carga de fuentes optimizada con `preconnect`
- CDNs para recursos externos (carga rápida)
- Imágenes y animaciones optimizadas
- Código minificable para producción

## 🔧 Funcionalidades JavaScript

- Toggle de tema oscuro/claro con localStorage
- Menú móvil interactivo
- Scroll suave entre secciones
- Botón "volver arriba"
- Animaciones al hacer scroll
- Resaltado de navegación activa
- Efecto parallax en hero
- Efecto de escritura en título

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como base para tu propio portafolio.

## 📧 Contacto

- **Email**: sergaio.calderoon@gmail.com
- **LinkedIn**: [Sergio Calderon](https://www.linkedin.com/in/sergio-calderon)
- **GitHub**: [sergio-calderon](https://github.com/sergio-calderon)

---

Desarrollado con ❤️ por Sergio Calderon