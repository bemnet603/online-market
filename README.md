# Ethio Marketplace

A community buy-and-sell platform built for Ethiopian communities. This is the first release (UC1–UC3) using HTML, CSS, and Vanilla JavaScript — designed to evolve into a full-stack application with React, Next.js, and MongoDB.

## Design Philosophy

This project is built as the **first version of a real startup**, not a classroom demo.

- **No fake marketplace activity** — product cards use layout placeholders only
- **Scalable architecture** — folder structure ready for React components and MongoDB
- **Ethiopian context** — ETB currency, local cities, relevant categories
- **Professional UI** — inspired by marketplace simplicity without copying Facebook Marketplace

## Features (UC1–UC3)

| Stage | What's Included |
|-------|----------------|
| **UC1 — HTML** | 9 semantic pages with navigation, footer, and reusable layouts |
| **UC2 — CSS** | Modern responsive design, dark mode, professional components |
| **UC3 — JavaScript** | Search, filters, sorting, pagination, form validation, image preview |

## Project Structure

```
project/
├── assets/images/       # Product images (future use)
├── css/
│   ├── variables.css    # Theme colors and spacing
│   ├── base.css         # Reset and typography
│   ├── components.css   # Buttons, cards, nav, forms
│   ├── pages.css        # Page-specific styles
│   ├── responsive.css   # Media queries
│   └── main.css         # Imports all CSS files
├── js/
│   ├── data.js          # Categories, locations, layout templates
│   ├── utils.js         # Helper functions
│   ├── main.js          # Nav, dark mode, scroll-to-top
│   ├── home.js          # Homepage categories
│   ├── marketplace.js   # Search, filter, sort, pagination
│   ├── product-details.js
│   ├── sell-item.js
│   └── forms.js         # Login, register, contact validation
├── pages/
│   ├── marketplace.html
│   ├── product-details.html
│   ├── sell-item.html
│   ├── login.html
│   ├── register.html
│   └── 404.html
├── components/          # Reserved for future React components
├── index.html
└── README.md
```

## How to Run

1. Open `index.html` in your browser, or
2. Use a local server for best results:

```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `index.html` | Platform introduction, categories, safety tips |
| Marketplace | `pages/marketplace.html` | Searchable listing grid (layout templates) |
| Product Details | `pages/product-details.html` | Single product layout |
| Sell Item | `pages/sell-item.html` | Product submission form |
| Login | `pages/login.html` | User login |
| Register | `pages/register.html` | User registration |
| 404 | `pages/404.html` | Page not found |

## Important Notes

- **Listing templates** in `data.js` are layout-only placeholders for demonstrating search, filter, sort, and pagination. They are NOT real products.
- **Forms** validate on the client side only. No data is saved yet.
- **Real listings** will come from MongoDB in a future version.

## Future Roadmap

- React components in `components/`
- Next.js routing and server-side rendering
- MongoDB for product storage
- User authentication and dashboards
- Image uploads, messaging, favorites, notifications
- Admin panel, reviews, and ratings

## Technologies

- HTML5 · CSS3 · Vanilla JavaScript

---

Built for coursework and continued development throughout a web development course.
