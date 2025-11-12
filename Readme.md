# 🌀 skewnav

> **Skewed 3D navigation tiles with optional iOS-style glass blur** — built for React + TypeScript by **Vikram Kumar (V-Bytes)**.

[![npm version](https://img.shields.io/npm/v/skewnav?style=flat-square)](https://www.npmjs.com/package/skewnav)
[![npm downloads](https://img.shields.io/npm/dm/skewnav?style=flat-square)](https://www.npmjs.com/package/skewnav)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

---

## ✨ Overview

`skewnav` is a lightweight React component library that renders a **skewed 3D navigation bar** with optional **glassmorphism** (blur, transparency, and saturation inspired by iOS).  
It’s fully themable, written in TypeScript, and works seamlessly with **Next.js**, **Vite**, and other modern React frameworks.

**Key Features**

- ⚛️ React 18+ / Next.js compatible
- 💎 TypeScript typings included
- 🎨 Optional glass blur (iOS style)
- 🧩 Fully themable via props or CSS variables
- 📦 ESM + CJS + type declarations
- 🪶 Zero runtime dependencies

---

## 🚀 Installation

```bash
npm install skewnav
# or
yarn add skewnav
# or
pnpm add skewnav
```

## 💡 Usage Example

```tsx
import { SkewNav } from "skewnav";
import "skewnav/styles.css"; // required stylesheet

export default function ExampleNav() {
  return (
    <SkewNav
      glass
      items={[
        { icon: "icon-reorder", href: "#", label: "Menu" },
        { icon: "icon-th-large", href: "#", label: "Grid" },
        { icon: "icon-bar-chart", href: "#", label: "Charts" },
        { icon: "icon-tasks", href: "#", label: "Tasks" },
        { icon: "icon-bell", href: "#", label: "Alerts" },
      ]}
      theme={{
        bg: "#000",
        fg: "#777",
        hoverBg: "#ff6e42",
        hoverFg: "#fff",
        ring: "#b65234",
        side1: "#121212",
        side2: "#181818",
        shadow: "#e1e1e1",
      }}
    />
  );
}
```

## 🧠 Props Reference

| Prop            | Type                         | Default           | Description                                              |
| --------------- | ---------------------------- | ----------------- | -------------------------------------------------------- |
| **`items`**     | `SkewNavItem[]`              | —                 | Array of navigation tiles.                               |
| **`rotateDeg`** | `number`                     | `-35`             | Rotation angle of the entire strip (in degrees).         |
| **`skew`**      | `{ x?: number; y?: number }` | `{ x: 20, y: 5 }` | Skew angles applied along X and Y axes.                  |
| **`sizeEm`**    | `number`                     | `2.5`             | Height of each tile (in em).                             |
| **`theme`**     | `Partial<ThemeVars>`         | —                 | Customize tile colors, edges, and shadows.               |
| **`className`** | `string`                     | —                 | Adds an extra CSS class to the container.                |
| **`glass`**     | `boolean`                    | `false`           | Enables iOS-style blur and translucency (glassmorphism). |

## 📜 License

**MIT License**  
Copyright © 2025 [Vikram Kumar (V-Bytes)](https://v-bytes.cloud)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 💬 Feedback & Support

- 🐞 **Report issues:** [GitHub Issues](https://github.com/brutalvik/skewnav/issues)
- 💡 **Request features:** [LinkedIn](https://www.linkedin.com/in/vikram-kumar-vbytes)
- ⭐ **Star the repo if you like it!**

> Built with ❤️ by **V-Bytes (Vikram Kumar)**  
> 🌐 [v-bytes.cloud](https://v-bytes.cloud)
