# Naksh Jewel E‑commerce Next.js Project

A responsive jewellery e‑commerce frontend built with Next.js and Tailwind CSS, showcasing a product listing page and product detail page. Designed for luxury jewellery brands, with hero banner, filter chips, masonry grid, cart integration, and more.

---

## 🚀 Getting Started

### Prerequisites

* **Node.js** v14 or higher
* **npm** v6+ or **yarn** v1.22+

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/jeweluxe-nextjs.git
   cd jeweluxe-nextjs
   ```

2. **Install dependencies**
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. The page auto‑reloads when you make changes.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

This will create an optimized build in the `.next` folder and start the production server on port 3000.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** JavaScript / TypeScript (optional)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React (or Heroicons / React Icons)
* **Image Optimization:** Next.js `next/image`
* **Routing:** Next.js Dynamic Routes
* **API:** Built‑in Next.js API routes (mock data)

---

## 📋 Project Structure

```
app/
├─ components/
|   ├─ Navbar.tsx
|   └─ Footer.tsx
├─ products/
|   ├─ page.tsx         ← Product listing
|   └─ [id]/page.tsx    ← Product detail
pages/ (if using pages router)
public/                ← Static assets (e.g. `jewelry-hero.jpg`)
api/
├─ products/
|   ├─ route.js        
|   └─[id]/ 
|       ├─ route.js    

.next/                 ← Auto‑generated build files
node_modules/
package.json
README.md
```

---

## ⚙️ Notes & Assumptions

* **Mock API:** `/api/products` returns a JSON array of products. Replace with real backend as needed.
* **Images:** Expect product images at provided `imageUrl`; fallback to placeholder if missing.
* **Icons:** If using Lucide, ensure `lucide-react` and `lucide` are installed. Alternatively, swap to `@heroicons/react` or `react-icons`.
* **TypeScript:** The code samples use `.tsx` with generic types (e.g., `useState<any[]>`). If you prefer JS, rename files to `.js` and remove type annotations.
* **Styling:** Tailwind config can be customized for brand colors (e.g., adjust `tailwind.config.js`).
* **Cart & State:** Basic "Add to Cart" button is UI‑only; integrate global state or backend cart logic as needed.

---

