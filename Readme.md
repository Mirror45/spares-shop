# 🚘 Spares-shop — Auto Parts Online Store

**Spares-shop** is a responsive website for an auto parts e-commerce store. The project includes the core pages of a typical store: homepage, product catalog, and product detail. Built with **HTML**, **Sass**, and **JavaScript (ES6+)**, and powered by **Gulp 4** for task automation and optimization. The responsive layout and modular code structure make the project scalable and maintainable.

---

## 📄 Pages

- **Homepage** — promotional banner, product categories, and featured sections.
- **Catalog Page** — grid of parts, filtering options, and pagination.
- **Product Page** — image gallery, accordion for details, and quantity selector.

---

## 🧰 Tech Stack

### 🔧 Core Technologies

| Technology   | Description |
|-------------|-------------|
| **HTML5**    | Semantic markup, validated via [W3C Validator](https://validator.w3.org/nu/). |
| **Sass (SCSS)** | Modular architecture (`blocks/`, `global/`, `libs/`), variables, mixins. |
| **JavaScript (ES6+)** | 	Modular, clean code managing UI interactivity: accordions, custom filters with price sliders, tabs, toggles, menus, and product rating components. Implements progressive enhancement to keep core functionality accessible without JS. |
| **Gulp 4**    | Build automation and optimization pipeline. |

### 🛠 Gulp Plugins Used

| Plugin                | Purpose |
|-----------------------|---------|
| `gulp-dart-sass`      | Compile SCSS to CSS. |
| `gulp-htmlmin`        | Minify HTML. |
| `gulp-libsquoosh`, `gulp-webp` | Image optimization and WebP generation. |
| `gulp-autoprefixer`, `gulp-clean-css` | CSS prefixing and minification. |
| `gulp-svgstore`, `gulp-svgo` | SVG sprite generation and optimization. |
| `browser-sync`        | Local development server with LiveReload. |

---

## 🎯 Implementation Highlights

- **BEM methodology** for CSS class naming.
- **Responsive design** (Desktop First) using Flexbox and CSS Grid.
- **Local fonts** connected directly from project files.
- **Progressive enhancement**: core functionality works without JavaScript.
- **Retina-ready images** for high-resolution displays.
- **Swiper.js** used for product image carousels.
- **Stylelint** and **EditorConfig** ensure consistent code quality and formatting.
- **Custom modular JavaScript** managing:

  - Footer accordions.

  - Filter panel with price range slider, custom selects, checkboxes, and reset functionality.

  - Responsive hamburger menu toggle and navigation link activation.

  - Interactive product rating stars.

  - Tabs navigation.

---

## 📁 Project Structure

source/

├── sass/              # Styles (SCSS modules: blocks, global, libs)

├── js/                # JavaScript modules (components)

├── img/               # Images and icons

├── fonts/             # Local fonts

├── *.html             # Markup pages

└── manifest.webmanifest

build/                 # Compiled production build

├── css/               # Minified styles

├── js/                # Minified scripts

├── img/               # Optimized images + WebP

├── fonts/             # Fonts copy

└── *.html             # Final production pages


---

## 📦 Getting Started

> ⚠️ **Node.js v16** is required.

```bash
# Clone the repository to your local machine
git clone https://github.com/Mirror45/spares-shop.git

# Navigate into the cloned project directory
cd spares-shop

# Install all dependencies
npm install

# Start development server with live reload
npm start
```
