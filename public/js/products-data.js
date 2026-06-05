// Kalaa Print & Pack Mock Product Database

const CATEGORIES = [
  {
    "id": "visiting-cards",
    "name": "📇 Visiting Cards",
    "image": "https://images.unsplash.com/photo-1596495578065-6e0763fa1141?q=80&w=150"
  },
  {
    "id": "stationery",
    "name": "📝 Stationery",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=150",
    "subCategories": [
      { "id": "paper-products", "name": "Paper Products" },
      { "id": "business-essentials", "name": "Business Essentials" }
    ]
  },
  {
    "id": "posters",
    "name": "🖼️ Posters",
    "image": "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=150",
    "subCategories": [
      { "id": "posters-cars", "name": "Cars" },
      { "id": "posters-bikes", "name": "Bikes" },
      { "id": "posters-sports", "name": "Sports" },
      { "id": "posters-pop", "name": "Pop Culture" },
      { "id": "posters-split", "name": "Split Frames" },
      { "id": "posters-custom", "name": "Custom Prints" },
      { "id": "posters-backlit", "name": "Backlit Board" }
    ]
  },
  {
    "id": "stickers-labels",
    "name": "🏷️ Stickers & Labels",
    "image": "https://images.unsplash.com/photo-1572375995501-4b0894dbe0d1?q=80&w=150"
  },
  {
    "id": "gifting",
    "name": "🎁 Custom Gifting",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=150"
  },
  {
    "id": "event-marketing",
    "name": "🎟️ Event & Marketing",
    "image": "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=150"
  }
];

const PRODUCTS = [
  // --- VISITING CARDS ---
  {
    "id": "business-cards",
    "name": "Business Cards",
    "category": "visiting-cards",
    "price": 199,
    "badge": "Best Seller",
    "image": "https://images.unsplash.com/photo-1596495578065-6e0763fa1141?q=80&w=300",
    "description": "Professional business cards to network with confidence. Matte or glossy options.",
    "specifications": { "Size": "89 x 54 mm", "Material": "350 GSM Art Card", "Print": "Double Sided" },
    "options": {
      "quantity": [ { "label": "100 units", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 units", "value": 500, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Matte", "value": "standard-matte", "extraCost": 0 }, { "label": "Premium Matte", "value": "premium-matte", "extraCost": 50 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "premium-visiting-cards",
    "name": "Premium Business Cards",
    "category": "visiting-cards",
    "price": 299,
    "badge": "Premium 💎",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=300",
    "description": "Executive-grade cards with premium textured finishes and thick card stocks.",
    "specifications": { "Size": "89 x 54 mm", "Material": "400 GSM Royal Fine Paper", "Print": "Double Sided" },
    "options": {
      "quantity": [ { "label": "100 units", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 units", "value": 500, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Velvet Touch", "value": "velvet-touch", "extraCost": 0 }, { "label": "Linen Textured", "value": "linen-textured", "extraCost": 80 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "nfc-cards",
    "name": "NFC Cards",
    "category": "visiting-cards",
    "price": 999,
    "badge": "Smart Technology",
    "image": "https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=300",
    "description": "Tap and share contact details instantly. Embedded NFC chip with custom print on surface.",
    "specifications": { "Size": "Standard Credit Card", "Material": "Premium Matte PVC / Wood", "Technology": "NFC Chip NTAG213" },
    "options": {
      "quantity": [ { "label": "1 Card", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Cards", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Matte Black PVC", "value": "matte-black-pvc", "extraCost": 0 }, { "label": "Eco Wood Finish", "value": "eco-wood-finish", "extraCost": 200 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "qr-cards",
    "name": "QR Cards",
    "category": "visiting-cards",
    "price": 249,
    "badge": "Quick Connect",
    "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=300",
    "description": "Modern cards featuring a prominent custom QR code linked to your digital bio/portfolio.",
    "specifications": { "Size": "89 x 54 mm", "Material": "350 GSM Matte", "Print": "QR Code Print included" },
    "options": {
      "quantity": [ { "label": "100 units", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 units", "value": 500, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Matte", "value": "standard-matte", "extraCost": 0 }, { "label": "Recycled Kraft", "value": "recycled-kraft", "extraCost": 60 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "thank-you-cards",
    "name": "Thank You Cards",
    "category": "visiting-cards",
    "price": 199,
    "badge": "Handwritten Vibe",
    "image": "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=300",
    "description": "Express gratitude in style. Beautifully custom printed mini-cards for customer orders.",
    "specifications": { "Size": "3.5\" x 2\" Mini", "Material": "300 GSM Natural Matte", "Print": "Double Sided" },
    "options": {
      "quantity": [ { "label": "50 units", "value": 50, "priceMultiplier": 1.0 }, { "label": "200 units", "value": 200, "priceMultiplier": 3.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },

  // --- STATIONERY - PAPER PRODUCTS ---
  {
    "id": "menu-cards",
    "name": "Menu Cards",
    "category": "stationery",
    "subCategory": "paper-products",
    "price": 399,
    "badge": "Food & Dine",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300",
    "description": "Vibrant menus for restaurants, hotels, and banquets. Clean and splash-resistant.",
    "specifications": { "Size": "A4 Folded or DL Sheet", "Material": "350 GSM Gloss with Coating", "Print": "High Resolution Offset" },
    "options": {
      "quantity": [ { "label": "20 units", "value": 20, "priceMultiplier": 1.0 }, { "label": "100 units", "value": 100, "priceMultiplier": 3.8 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "flyers",
    "name": "Flyers",
    "category": "stationery",
    "subCategory": "paper-products",
    "price": 120,
    "badge": "Mass Marketing",
    "image": "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=300",
    "description": "Promote deals and local events with affordable, lightweight single sheet flyers.",
    "specifications": { "Size": "A5 Sheet", "Material": "130 GSM Gloss Art Paper", "Print": "Single/Double Sided" },
    "options": {
      "quantity": [ { "label": "100 units", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 units", "value": 500, "priceMultiplier": 4.0 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Single-Sided Print", "value": "single-sided-print", "extraCost": 0 }, { "label": "Double-Sided Print", "value": "double-sided-print", "extraCost": 30 } ]
    }
  },
  {
    "id": "brochures",
    "name": "Brouchers",
    "category": "stationery",
    "subCategory": "paper-products",
    "price": 350,
    "badge": "Classy Folds",
    "image": "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=300",
    "description": "Custom bi-fold and tri-fold brochures to showcase your business offerings.",
    "specifications": { "Size": "A4 Folded to DL / A5", "Material": "170 GSM Premium Paper", "Folds": "Bi-fold / Tri-fold" },
    "options": {
      "quantity": [ { "label": "50 units", "value": 50, "priceMultiplier": 1.0 }, { "label": "200 units", "value": 200, "priceMultiplier": 3.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "certificates",
    "name": "Certificates",
    "category": "stationery",
    "subCategory": "paper-products",
    "price": 250,
    "badge": "Awards & Degrees",
    "image": "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=300",
    "description": "Print elegant achievement and course certificates with rich textured patterns.",
    "specifications": { "Size": "A4 Landscape", "Material": "300 GSM Heavy Card Stock", "Texture": "Laid / Linen" },
    "options": {
      "quantity": [ { "label": "10 units", "value": 10, "priceMultiplier": 1.0 }, { "label": "50 units", "value": 50, "priceMultiplier": 4.0 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Print", "value": "standard-print", "extraCost": 0 }, { "label": "Gold Foil Accent", "value": "gold-foil-accent", "extraCost": 150 } ]
    }
  },

  // --- STATIONERY - BUSINESS ESSENTIALS ---
  {
    "id": "letterheads",
    "name": "Letterheads",
    "category": "stationery",
    "subCategory": "business-essentials",
    "price": 450,
    "badge": "Corporate Bond",
    "image": "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=300",
    "description": "Print official corporate correspondence on professional alabaster bond letterheads.",
    "specifications": { "Size": "A4 Size", "Material": "100 GSM Executive Alabaster Bond", "Compatibility": "Inkjet & Laser friendly" },
    "options": {
      "quantity": [ { "label": "50 units", "value": 50, "priceMultiplier": 1.0 }, { "label": "200 units", "value": 200, "priceMultiplier": 3.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "notepads",
    "name": "Notepads",
    "category": "stationery",
    "subCategory": "business-essentials",
    "price": 149,
    "badge": "Desk Pad",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=300",
    "description": "Glue-bound custom printed notepads with tear-away pages. Perfect for daily notes.",
    "specifications": { "Size": "A5 Size", "Pages": "50 Tear-off Sheets (80 GSM)", "Binding": "Padding Glue (Top)" },
    "options": {
      "quantity": [ { "label": "5 units", "value": 5, "priceMultiplier": 1.0 }, { "label": "25 units", "value": 25, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "envelopes",
    "name": "Envelops",
    "category": "stationery",
    "subCategory": "business-essentials",
    "price": 150,
    "badge": "Office Mailer",
    "image": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=300",
    "description": "Premium customized mailer envelopes. Peel-and-seal strip closure.",
    "specifications": { "Size": "9.5\" x 4.5\" Standard", "Material": "120 GSM Royal laid paper", "Closure": "Peel & Seal Strip" },
    "options": {
      "quantity": [ { "label": "50 units", "value": 50, "priceMultiplier": 1.0 }, { "label": "200 units", "value": 200, "priceMultiplier": 3.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "invoice-books",
    "name": "Bills / Invoice Books",
    "category": "stationery",
    "subCategory": "business-essentials",
    "price": 299,
    "badge": "Accounting",
    "image": "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=300",
    "description": "Duplicate NCR (carbonless) bill books. Sequentially numbered for bookkeeping.",
    "specifications": { "Size": "A5 Book", "Sheets": "50 sets (100 leaves: White original + Pink copy)", "Binding": "Perforated Book" },
    "options": {
      "quantity": [ { "label": "5 books", "value": 5, "priceMultiplier": 1.0 }, { "label": "20 books", "value": 20, "priceMultiplier": 3.8 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },


  // --- STAMPS AND INK ---
  {
    "id": "self-inking-stamps",
    "name": "Rubber Stamps",
    "category": "stamps-ink",
    "price": 299,
    "badge": "Pre-Inked",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=300",
    "description": "High-quality self-inking stamps. Ditch the external ink pad. Crisp seals.",
    "specifications": { "Stamp Type": "Self-Inking Pre-Inked Stamp", "Base": "Durable Plastic Mechanism", "Ink color": "Blue / Black / Red" },
    "options": {
      "quantity": [ { "label": "1 Stamp", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Stamps", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Medium Rectangular", "value": "medium-rectangular", "extraCost": 0 }, { "label": "Large Rectangular", "value": "large-rectangular", "extraCost": 80 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "stamp-pads",
    "name": "Stamp Pads",
    "category": "stamps-ink",
    "price": 99,
    "badge": "Ink Pad",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=300",
    "description": "Replacement stamp ink pads. Pre-saturated with rich oil-based stamp ink.",
    "specifications": { "Size": "90 x 50 mm", "Ink Base": "Vibrant water-based dye", "Casing": "Snap-close metal case" },
    "options": {
      "quantity": [ { "label": "1 Pad", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Pads", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "ink-refills",
    "name": "Ink Refills",
    "category": "stamps-ink",
    "price": 149,
    "badge": "Stamp Refill",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=300",
    "description": "Refill bottles for self-inking stamps and traditional pads. Dropper cap nozzle.",
    "specifications": { "Volume": "25 ml", "Ink Type": "Premium quick-dry stamp ink", "Dropper": "Precision dropper tip" },
    "options": {
      "quantity": [ { "label": "1 Bottle", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Bottles", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },

  // --- POSTERS ---
  {
    "id": "posters-cars",
    "name": "Cars",
    "category": "posters",
    "subCategory": "posters-cars",
    "price": 299,
    "badge": "Turbo Motorsport",
    "image": "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?q=80&w=300",
    "description": "Premium high-definition posters of exotic cars, classic supercars, and F1 racers.",
    "specifications": { "Size": "12\" x 18\" (A3)", "Material": "300 GSM Art Card", "Finish": "High Gloss Lamination" },
    "options": {
      "quantity": [ { "label": "1 Poster", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Posters", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "posters-bikes",
    "name": "Bikes",
    "category": "posters",
    "subCategory": "posters-bikes",
    "price": 299,
    "badge": "Superbike Racing",
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=300",
    "description": "Catchy superbike and custom cafe racer wall art posters. Perfect for garages and dens.",
    "specifications": { "Size": "12\" x 18\" (A3)", "Material": "300 GSM Art Card", "Finish": "High Gloss" },
    "options": {
      "quantity": [ { "label": "1 Poster", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Posters", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "posters-sports",
    "name": "Sports",
    "category": "posters",
    "subCategory": "posters-sports",
    "price": 299,
    "badge": "Athletic Hub",
    "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=300",
    "description": "High intensity sports action posters. UFC champions, football icons, cricket moments.",
    "specifications": { "Size": "12\" x 18\" (A3)", "Material": "300 GSM Art Card", "Finish": "Matte Anti-Glare" },
    "options": {
      "quantity": [ { "label": "1 Poster", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Posters", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "posters-pop",
    "name": "Pop Culture",
    "category": "posters",
    "subCategory": "posters-pop",
    "price": 299,
    "badge": "Multiverse Pop",
    "image": "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=300",
    "description": "Pop culture fandom posters. Marvel, DC superheroes, trending movies, TV shows, and games.",
    "specifications": { "Size": "12\" x 18\" (A3)", "Material": "300 GSM Art Card", "Finish": "Gloss Finish" },
    "options": {
      "quantity": [ { "label": "1 Poster", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Posters", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "posters-split",
    "name": "Split Frames",
    "category": "posters",
    "subCategory": "posters-split",
    "price": 599,
    "badge": "Split Framing",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=300",
    "description": "Multi-piece split wall posters (2-piece and 3-piece sets) that form a single panoramic layout.",
    "specifications": { "Layout": "2-Piece or 3-Piece Split", "Material": "300 GSM Matte Card", "Total Area": "24\" x 36\" extended" },
    "options": {
      "quantity": [ { "label": "1 Set (2-Piece)", "value": 1, "priceMultiplier": 1.0 }, { "label": "1 Set (3-Piece)", "value": 1.4, "priceMultiplier": 1.4 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "posters-custom",
    "name": "Custom Prints",
    "category": "posters",
    "subCategory": "posters-custom",
    "price": 349,
    "badge": "DIY Custom",
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=300",
    "description": "Upload your own photography, designs, or collages. Customized wall posters.",
    "specifications": { "Size": "12\" x 18\" (A3)", "Material": "300 GSM Matte / Gloss", "Upload format": "JPG, PNG, PDF high-res" },
    "options": {
      "quantity": [ { "label": "1 Poster", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Posters", "value": 5, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "backlit-transline",
    "name": "Backlit Board",
    "category": "posters",
    "subCategory": "posters-backlit",
    "price": 1450,
    "badge": "Glow Board",
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=300",
    "description": "Translucent prints for backlit display boxes. High glow color output.",
    "specifications": { "Material": "Premium Polyester Transline Film", "Thickness": "220 Micron", "Light Diffuser": "Yes, built-in" },
    "options": {
      "quantity": [ { "label": "1 Print", "value": 1, "priceMultiplier": 1.0 }, { "label": "5 Prints", "value": 5, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },

  // --- STICKERS & LABELS ---
  {
    "id": "sheet-stickers",
    "name": "Die Cut Stickers",
    "category": "stickers-labels",
    "price": 149,
    "badge": "Waterproof 💧",
    "image": "https://images.unsplash.com/photo-1572375995501-4b0894dbe0d1?q=80&w=300",
    "description": "Individually die-cut stickers. Cut to your custom shapes with white background cards.",
    "specifications": { "Material": "Waterproof White Vinyl", "Shape": "Custom outline cut", "Adhesive": "Removable non-residue" },
    "options": {
      "quantity": [ { "label": "20 Stickers", "value": 20, "priceMultiplier": 1.0 }, { "label": "100 Stickers", "value": 100, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "vinyl-stickers",
    "name": "Vinyl Stickers",
    "category": "stickers-labels",
    "price": 179,
    "badge": "Heavy Duty",
    "image": "https://images.unsplash.com/photo-1572375995501-4b0894dbe0d1?q=80&w=300",
    "description": "Extra durable weather-resistant thick vinyl stickers for laptops, cars, and gear.",
    "specifications": { "Material": "100% Weatherproof Heavy Duty Vinyl", "UV Protection": "Yes, matte coat", "Adhesive": "Strong permanent" },
    "options": {
      "quantity": [ { "label": "20 Stickers", "value": 20, "priceMultiplier": 1.0 }, { "label": "100 Stickers", "value": 100, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "product-labels",
    "name": "Product Labels",
    "category": "stickers-labels",
    "price": 249,
    "badge": "Packaging Labels",
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=300",
    "description": "Pre-cut product labels on sheets. Ideal for jars, bottles, soaps, boxes, and retail bags.",
    "specifications": { "Size": "2\" Round / Rectangular", "Material": "Semi-Gloss Paper Sticker", "Sheet style": "Kiss-cut sheet" },
    "options": {
      "quantity": [ { "label": "100 Labels", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 Labels", "value": 500, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "packaging-labels",
    "name": "Packaging Labels",
    "category": "stickers-labels",
    "price": 269,
    "badge": "Shipping Labels",
    "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=300",
    "description": "Vibrant custom labels for shipping boxes, envelope seals, and mailers.",
    "specifications": { "Size": "3\" x 4\" Rectangular", "Material": "Writable Matte Sticker Paper", "Adhesive": "Permanent high tack" },
    "options": {
      "quantity": [ { "label": "100 Labels", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 Labels", "value": 500, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "waterproof-stickers",
    "name": "Waterproof Stickers",
    "category": "stickers-labels",
    "price": 189,
    "badge": "Splash Proof",
    "image": "https://images.unsplash.com/photo-1572375995501-4b0894dbe0d1?q=80&w=300",
    "description": "Dishwasher-safe, rainproof custom vinyl stickers. Perfect for bottles and phones.",
    "specifications": { "Material": "Premium PET waterproof vinyl", "Ink": "UV-cured waterproof inks", "Finish": "Matte protective coating" },
    "options": {
      "quantity": [ { "label": "20 Stickers", "value": 20, "priceMultiplier": 1.0 }, { "label": "100 Stickers", "value": 100, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },

  // --- CUSTOM GIFTING ---
  {
    "id": "retro-prints",
    "name": "Retro Photos Prints",
    "category": "gifting",
    "price": 199,
    "badge": "Vintage Vibe",
    "image": "images/retro_print_phone.png",
    "description": "Classic vintage polaroid style prints. Add your own custom captions on the bottom margin.",
    "specifications": { "Size": "3.5\" x 4.2\" Polaroid size", "Paper": "300 GSM Fuji Film Photo Paper", "Finish": "Satin Semi-Gloss" },
    "options": {
      "quantity": [ { "label": "10 Prints", "value": 10, "priceMultiplier": 1.0 }, { "label": "30 Prints", "value": 30, "priceMultiplier": 2.5 }, { "label": "100 Prints", "value": 100, "priceMultiplier": 7.0 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "custom-mug",
    "name": "Custom Mugs",
    "category": "gifting",
    "price": 149,
    "badge": "Tea & Coffee",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=300",
    "description": "Personalized ceramic coffee mugs. Full color sublimation wraps.",
    "specifications": { "Material": "Premium Ceramic (11 oz)", "Microwave Safe": "Yes, fully compatible", "Print area": "Wrap print" },
    "options": {
      "quantity": [ { "label": "1 Mug", "value": 1, "priceMultiplier": 1.0 }, { "label": "10 Mugs", "value": 10, "priceMultiplier": 9.5 } ],
      "paper": [ { "label": "White Mug", "value": "white-mug", "extraCost": 0 }, { "label": "Magic Mug", "value": "magic-mug", "extraCost": 100 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "photo-frames",
    "name": "Photo Frames",
    "category": "gifting",
    "price": 399,
    "badge": "Home Decor",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=300",
    "description": "Custom photo framing with premium black/wood borders and glass screen fronts.",
    "specifications": { "Size": "8\" x 10\" Frame", "Material": "Engineered Wood casing", "Front": "High clarity display glass" },
    "options": {
      "quantity": [ { "label": "1 Frame", "value": 1, "priceMultiplier": 1.0 }, { "label": "3 Frames", "value": 3, "priceMultiplier": 2.8 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "gift-boxes",
    "name": "Gift Boxes",
    "category": "gifting",
    "price": 499,
    "badge": "Corporate Gift",
    "image": "https://images.unsplash.com/photo-1513885018693-47599262157c?q=80&w=300",
    "description": "Custom printed rigid cardboard boxes for premium gifting presentations.",
    "specifications": { "Size": "8\" x 8\" x 3\" Box", "Material": "Rigid Cardboard with Matte Paper Wrap", "Closure": "Magnetic flip top" },
    "options": {
      "quantity": [ { "label": "5 Boxes", "value": 5, "priceMultiplier": 1.0 }, { "label": "20 Boxes", "value": 20, "priceMultiplier": 3.8 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "keychains",
    "name": "Keychains",
    "category": "gifting",
    "price": 99,
    "badge": "Pocket Tag",
    "image": "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=300",
    "description": "Acrylic and wooden custom printed double-sided keychains.",
    "specifications": { "Size": "2\" Custom Shape", "Material": "Double sided thick acrylic", "Ring": "Stainless steel key loop" },
    "options": {
      "quantity": [ { "label": "5 Keychains", "value": 5, "priceMultiplier": 1.0 }, { "label": "20 Keychains", "value": 20, "priceMultiplier": 3.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "personalized-gifts",
    "name": "Personalized Gifts",
    "category": "gifting",
    "price": 299,
    "badge": "Unique Gift",
    "image": "https://images.unsplash.com/photo-1513885018693-47599262157c?q=80&w=300",
    "description": "Bespoke personalized items (notebook sets, pen combos, and accessories).",
    "specifications": { "Contents": "Varies by bundle pack", "Laser Engrave": "Yes, customized name engraving included", "Packaging": "Eco Kraft Box" },
    "options": {
      "quantity": [ { "label": "1 Set", "value": 1, "priceMultiplier": 1.0 }, { "label": "10 Sets", "value": 10, "priceMultiplier": 9.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "corporate-gifts",
    "name": "Corporate Gifts",
    "category": "gifting",
    "price": 499,
    "badge": "Bulk Corporate",
    "image": "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=300",
    "description": "Onboarding hampers, leather planner folders, and thermos cups with metallic brand prints.",
    "specifications": { "Hampers": "Custom corporate curation available", "Branding": "Metallic foil stamp or screen print", "Min Order": "10 hampers" },
    "options": {
      "quantity": [ { "label": "10 Hampers", "value": 10, "priceMultiplier": 1.0 }, { "label": "50 Hampers", "value": 50, "priceMultiplier": 4.8 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },

  // --- EVENT & MARKETING ---
  {
    "id": "event-tickets",
    "name": "Event Tickets",
    "category": "event-marketing",
    "price": 249,
    "badge": "Perforated Pass",
    "image": "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=300",
    "description": "Numbered tickets with tear-off stubs. Perforated for easy separation.",
    "specifications": { "Size": "6.5\" x 2.5\" Standard", "Material": "250 GSM Matte Card", "Perforation": "Tear-off stub stub" },
    "options": {
      "quantity": [ { "label": "100 Tickets", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 Tickets", "value": 500, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "entry-passes",
    "name": "Entry Passes",
    "category": "event-marketing",
    "price": 299,
    "badge": "Event Pass",
    "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=300",
    "description": "Sturdy lanyard entry badges for festivals, concerts, conferences, and exhibitions.",
    "specifications": { "Size": "4\" x 6\"", "Material": "350 GSM Gloss Card", "Hole": "Slot punch for clip" },
    "options": {
      "quantity": [ { "label": "50 Passes", "value": 50, "priceMultiplier": 1.0 }, { "label": "200 Passes", "value": 200, "priceMultiplier": 3.6 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "id-cards",
    "name": "ID Cards",
    "category": "event-marketing",
    "price": 99,
    "badge": "Employee ID",
    "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300",
    "description": "Employee and staff plastic identity cards. Single or double sided prints.",
    "specifications": { "Size": "Standard CR80 size", "Material": "30 Mil Premium PVC", "Finish": "High Gloss" },
    "options": {
      "quantity": [ { "label": "5 ID Cards", "value": 5, "priceMultiplier": 1.0 }, { "label": "25 ID Cards", "value": 25, "priceMultiplier": 4.5 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },

  {
    "id": "coupons",
    "name": "Coupons",
    "category": "event-marketing",
    "price": 199,
    "badge": "Voucher Coupon",
    "image": "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=300",
    "description": "Discount and deal coupons. Perfect for customer order parcel enclosures.",
    "specifications": { "Size": "3\" x 5\"", "Material": "250 GSM Art Card", "Print": "Double Sided" },
    "options": {
      "quantity": [ { "label": "100 Coupons", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 Coupons", "value": 500, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "vouchers",
    "name": "Vouchers",
    "category": "event-marketing",
    "price": 219,
    "badge": "Gift Voucher",
    "image": "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=300",
    "description": "Custom gift vouchers for seasonal store promotions. Smooth matte writing backing.",
    "specifications": { "Size": "8\" x 3.5\" Landscape", "Material": "300 GSM Luxury laid stock", "Envelopes": "Optional" },
    "options": {
      "quantity": [ { "label": "50 Vouchers", "value": 50, "priceMultiplier": 1.0 }, { "label": "200 Vouchers", "value": 200, "priceMultiplier": 3.6 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  },
  {
    "id": "raffle-tickets",
    "name": "Raffle Tickets",
    "category": "event-marketing",
    "price": 239,
    "badge": "Lucky Draw",
    "image": "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=300",
    "description": "Numbered raffle books. Dual perforation stamps for lottery drawings.",
    "specifications": { "Size": "7\" x 3\"", "Material": "170 GSM Uncoated Bond", "Booklets": "Stitch bound in 50s" },
    "options": {
      "quantity": [ { "label": "100 Tickets", "value": 100, "priceMultiplier": 1.0 }, { "label": "500 Tickets", "value": 500, "priceMultiplier": 4.2 } ],
      "paper": [ { "label": "Standard Stock", "value": "standard", "extraCost": 0 } ],
      "finish": [ { "label": "Standard Matte Finish", "value": "standard", "extraCost": 0 } ]
    }
  }
];

// Helper to find a product by ID
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

// Helper to get products in a category
function getProductsByCategory(catId) {
  return PRODUCTS.filter(p => p.category === catId);
}

// Helper to search products
function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

// Export for browser scripts
if (typeof window !== 'undefined') {
  window.KalaaData = {
    CATEGORIES,
    PRODUCTS,
    getProductById,
    getProductsByCategory,
    searchProducts
  };
}
