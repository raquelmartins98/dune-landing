# 🌙 Dune-Inspired Gaming Landing Page

Landing page para el concurso "Buscamos al Peor Jugador del Mundo" con estética inspirada en Dune.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple)

## ✨ Características

- 🎨 Diseño inmersivo con estética desértica tipo Dune
- 🌟 Efectos parallax en múltiples capas
- 📱 100% responsive (mobile-first)
- 🎬 Sección de video promocional
- 🎮 Animaciones fluidas con Framer Motion
- ⚡ Optimizado para Vercel

## 🚀 Despliegue en Vercel

```bash
# 1. Instala dependencias
npm install

# 2. Desarrollo local
npm run dev

# 3. Despliega en Vercel (desde tu cuenta)
npx vercel
```

O conecta tu repositorio Git directamente a Vercel para deployment automático.

## 📁 Estructura

```
dune-landing/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globales y animaciones
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página principal
│   └── components/
│       ├── HeroSection.tsx   # Hero con parallax
│       ├── VideoSection.tsx  # Sección de video
│       ├── ChallengeSection.tsx # Cómo funciona
│       ├── CTASection.tsx    # Call to action
│       └── FooterSection.tsx # Footer
├── public/
│   └── favicon.svg
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Sand | `#d4a574` | Acentos principales |
| Arrakis Dark | `#0f0d0a` | Fondo base |
| Spice Light | `#e8c9a8` | Gradientes |
| Spice Dark | `#a67c52` | Hover states |

## 📝 Personalización

### Cambiar el video
Reemplaza el placeholder en `VideoSection.tsx` con un iframe de YouTube/Vimeo:

```tsx
<iframe
  src="https://www.youtube.com/embed/TU_ID_DE_VIDEO"
  className="w-full h-full"
  allowFullScreen
/>
```

### Ajustar parallax
Modifica los valores de `parallaxOffset` en `HeroSection.tsx`:
- `x` e `y` controlan la sensibilidad del movimiento

### Cambiar imágenes
Actualiza las URLs de Unsplash en:
- `VideoSection.tsx` (línea del poster)
- Añade tus propias imágenes en `/public/images/`

## 🔧 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cinzel, Rajdhani)

## 📄 Licencia

MIT - Libre para usar y modificar.
