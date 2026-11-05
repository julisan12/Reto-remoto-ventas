# Reto Remoto: landing de ventas interactiva

Página de ventas responsiva para el lanzamiento de un reto formativo. Está construida con **React 19 + TypeScript**, con estilos de **Tailwind CSS 4** y animaciones de **Motion**.

## Funcionalidades

- Página con varias secciones: hero, contenido del reto, precios, preguntas frecuentes y llamada a la acción final.
- Planes de precios (Plan LATAM y Plan Premium) con un bono destacado.
- Menú móvil y cambios de vista con transiciones animadas (`AnimatePresence`).
- Diseño *mobile-first* totalmente responsivo.
- Iconografía con `lucide-react`.

## Stack

| Área        | Tecnología                       |
|-------------|----------------------------------|
| UI          | React 19, TypeScript             |
| Build       | Vite                             |
| Estilos     | Tailwind CSS 4                   |
| Animaciones | Motion (`motion/react`)          |
| Iconos      | lucide-react                     |

## Cómo ejecutarlo

Requisito: Node.js 18 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Otros scripts:

```bash
npm run build      # build de producción en dist/
npm run preview    # sirve el build localmente
npm run lint       # chequeo de tipos (tsc --noEmit)
```

## Estructura

```
src/
├── App.tsx        # página completa y sus secciones
├── main.tsx       # punto de entrada
├── index.css      # Tailwind y estilos globales
└── lib/utils.ts   # utilidades
```

## Autora

Julieth Sánchez · [github.com/julisan12](https://github.com/julisan12)
