# 🚘 Spares-shop — Auto Parts Online Store

**Spares-shop** is a responsive website layout for an auto parts e-commerce store. The project is a classic Multi-Page Application (MPA) that includes a homepage, a product catalog, and a product details page. The build process and resource optimization are handled by **Gulp 4**.

---

## 📄 Pages

The following pages are implemented in the project (located in the root of `source/`):

- **index.html** — Homepage (promotional banners, categories, popular products).
- **catalog.html** — Catalog (product grid, filtering, pagination).
- **product-page.html** — Product Page (gallery, description, quantity selector, rating).

---

## 🧰 Tech Stack

### 🔧 Core Technologies
- **HTML5**: Semantic markup.
- **Sass (SCSS)**: Modular style structure (BEM naming), variables, and mixins. Compiled via `dart-sass`.
- **JavaScript (ES6+)**: Modular architecture using `import/export` syntax.
- **Gulp 4**: Task runner for automating routine tasks.

### ⚙️ Build Features (Gulp)

Based on the `gulpfile.js` and `package.json` analysis, the project uses the following tools:

| Category | Tool | Description |
|-----------|------------|----------|
| **CSS** | `gulp-dart-sass` | SCSS compilation. |
| | `gulp-postcss` | CSS post-processing. |
| | `autoprefixer` | Automatic vendor prefixing. |
| | `postcss-csso` | Advanced CSS minification (replaces clean-css). |
| **JavaScript** | `gulp-terser` | Compression and optimization of ES6+ code. |
| **HTML** | `gulp-htmlmin` | HTML file minification. |
| **Images** | `gulp-libsquoosh` | Image compression (jpg, png) and **WebP** generation. |
| **SVG** | `gulp-svgmin` | Vector graphics optimization. |
| | `gulp-svgstore` | SVG sprite generation (inline usage). |
| **Server** | `browser-sync` | Local development server with live reload. |

---

## 🧩 Implemented JS Modules

The code is divided into components located in `source/js/main/`:
- **menu.js**: Mobile menu management.
- **swiper.js**: Slider initialization (using the Swiper library).
- **filters.js**: Logic for catalog filters.
- **accordeon.js**: Collapsible blocks (e.g., in the footer).
- **tabs.js**: Tab switching for product information.
- **product-rating.js**: Interactive star rating.
- **favorite.js**: "Add to favorites" functionality.

---

## 📁 Project Structure

```text
source/
├── fonts/             # Local fonts (Barlow)
├── img/               # Images and icons
│   └── icons/         # SVG icons for sprite generation
├── js/                # JS modules
│   └── main/          # UI components
├── sass/              # Styles (SCSS)
│   ├── blocks/        # BEM blocks
│   ├── global/        # Global styles and variables
│   └── libs/          # Library styles
└── *.html             # HTML templates

build/                 # Production build folder (generated automatically)
```

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
