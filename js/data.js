/**
 * Ethio Marketplace - Shared Data
 * Categories, locations, and layout-only listing templates.
 * Real product data will come from MongoDB in future versions.
 */

// Ethiopian cities supported on the platform
const LOCATIONS = [
  "Addis Ababa",
  "Adama",
  "Hawassa",
  "Bahir Dar",
  "Dire Dawa",
  "Jimma",
  "Gondar",
  "Mekelle"
];

// Marketplace categories
const CATEGORIES = [
  { id: "electronics", name: "Electronics", icon: "📺", description: "TVs, speakers, and gadgets" },
  { id: "phones", name: "Phones", icon: "📱", description: "Smartphones and accessories" },
  { id: "computers", name: "Computers", icon: "💻", description: "Laptops, desktops, and accessories" },
  { id: "books", name: "Books", icon: "📚", description: "Textbooks and study materials" },
  { id: "furniture", name: "Furniture", icon: "🛋️", description: "Home and office furniture" },
  { id: "fashion", name: "Fashion", icon: "👗", description: "Clothing and accessories" },
  { id: "home-appliances", name: "Home Appliances", icon: "🏠", description: "Kitchen and household appliances" },
  { id: "vehicles", name: "Vehicles", icon: "🚗", description: "Cars, motorcycles, and bicycles" },
  { id: "art-crafts", name: "Art & Crafts", icon: "🎨", description: "Handmade crafts and art supplies" },
  { id: "sports", name: "Sports", icon: "⚽", description: "Sports equipment and gear" },
  { id: "beauty", name: "Beauty & Personal Care", icon: "💄", description: "Beauty and personal care products" },
  { id: "baby-kids", name: "Baby & Kids", icon: "🧸", description: "Baby and children's items" },
  { id: "others", name: "Others", icon: "📦", description: "Everything else" }
];

// Condition options for filters and forms
const CONDITIONS = ["New", "Used - Like New", "Used - Good", "Used - Fair"];

// Number of listing cards shown per page
const LISTINGS_PER_PAGE = 8;

/**
 * Layout-only listing templates for the marketplace UI.
 * These are NOT real products — they demonstrate search, filter, sort,
 * and pagination until MongoDB is connected.
 */
const LISTING_TEMPLATES = [
  { id: 1, name: "Product Name", category: "phones", location: "Addis Ababa", condition: "New", listingOrder: 1 },
  { id: 2, name: "Product Name", category: "computers", location: "Bahir Dar", condition: "Used - Good", listingOrder: 2 },
  { id: 3, name: "Product Name", category: "books", location: "Hawassa", condition: "Used - Like New", listingOrder: 3 },
  { id: 4, name: "Product Name", category: "furniture", location: "Adama", condition: "Used - Good", listingOrder: 4 },
  { id: 5, name: "Product Name", category: "fashion", location: "Mekelle", condition: "New", listingOrder: 5 },
  { id: 6, name: "Product Name", category: "electronics", location: "Dire Dawa", condition: "Used - Fair", listingOrder: 6 },
  { id: 7, name: "Product Name", category: "vehicles", location: "Jimma", condition: "Used - Good", listingOrder: 7 },
  { id: 8, name: "Product Name", category: "home-appliances", location: "Gondar", condition: "New", listingOrder: 8 },
  { id: 9, name: "Product Name", category: "art-crafts", location: "Addis Ababa", condition: "Used - Like New", listingOrder: 9 },
  { id: 10, name: "Product Name", category: "sports", location: "Bahir Dar", condition: "Used - Good", listingOrder: 10 },
  { id: 11, name: "Product Name", category: "beauty", location: "Hawassa", condition: "New", listingOrder: 11 },
  { id: 12, name: "Product Name", category: "baby-kids", location: "Adama", condition: "Used - Good", listingOrder: 12 },
  { id: 13, name: "Product Name", category: "others", location: "Mekelle", condition: "Used - Fair", listingOrder: 13 },
  { id: 14, name: "Product Name", category: "phones", location: "Dire Dawa", condition: "Used - Good", listingOrder: 14 },
  { id: 15, name: "Product Name", category: "books", location: "Jimma", condition: "New", listingOrder: 15 },
  { id: 16, name: "Product Name", category: "furniture", location: "Gondar", condition: "Used - Like New", listingOrder: 16 }
];
