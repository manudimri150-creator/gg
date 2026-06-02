// Kalaa Print & Pack Mock Product Database

const CATEGORIES = [
  { id: "visiting-cards", name: "Visiting Cards", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1141?q=80&w=150" },
  { id: "stationery-letterheads-notebooks", name: "Stationery, Letterheads & Notebooks", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=150" },
  { id: "stamps-ink", name: "Stamps and Ink", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=150" },
  { id: "posters-signs", name: "Signs & Posters", image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=150" },
  { id: "stickers-labels", name: "Stickers & Labels", image: "https://images.unsplash.com/photo-1572375995501-4b0894dbe0d1?q=80&w=150" },
  { id: "packaging", name: "Packaging", image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=150" },
  { id: "marketing-materials", name: "Marketing Materials", image: "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=150" },
  { id: "gifting", name: "Custom Gifting", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=150" }
];

const PRODUCTS = [
  // --- VISITING CARDS ---
  {
    id: "std-visiting-cards",
    name: "Standard Visiting Cards",
    category: "visiting-cards",
    subCategory: "shapes",
    price: 200,
    badge: "BUY 100 @ ₹200",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1141?q=80&w=300",
    description: "Make a strong first impression with high-quality standard visiting cards. Choose from matte or glossy finishes on durable paper stocks.",
    rating: 4.6,
    ratingCount: 1362,
    deliveryText: "Same Day Delivery - Mumbai, Bengaluru & Hyderabad",
    subpriceText: "₹2.00 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "350 GSM Premium Matte/Gloss Paper",
      "Print Quality": "HD Offset & Digital Printing",
      "Production Time": "2-3 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.2 },
        { label: "500 units", value: 500, priceMultiplier: 4.0 },
        { label: "1000 units", value: 1000, priceMultiplier: 7.2 }
      ],
      paper: [
        { label: "Standard Matte (300 GSM)", value: "std-matte", extraCost: 0 },
        { label: "Premium Matte (350 GSM)", value: "prem-matte", extraCost: 50 },
        { label: "Premium Glossy (350 GSM)", value: "prem-glossy", extraCost: 60 }
      ],
      finish: [
        { label: "No Extra Coating", value: "none", extraCost: 0 },
        { label: "Spot UV Coat (Front)", value: "spot-uv", extraCost: 100 }
      ]
    }
  },
  {
    id: "classic-visiting-cards",
    name: "Classic Visiting Cards",
    category: "visiting-cards",
    subCategory: "shapes",
    price: 230,
    badge: "100 @ ₹230",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=300",
    description: "The time-tested networking essential. Light, clean, and professional classic visiting cards.",
    rating: 4.6,
    ratingCount: 209,
    deliveryText: "Same Day Delivery - Mumbai, Hyderabad, Kolkata & Bengaluru",
    subpriceText: "₹2.30 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "300 GSM Art Card",
      "Print Quality": "Standard Digital Print",
      "Production Time": "1-2 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "500 units", value: 500, priceMultiplier: 4.2 }
      ],
      paper: [
        { label: "300 GSM Art Card", value: "art-300", extraCost: 0 }
      ],
      finish: [
        { label: "No Extra Coating", value: "none", extraCost: 0 }
      ]
    }
  },
  {
    id: "round-visiting-cards",
    name: "Rounded Corner Visiting Cards",
    category: "visiting-cards",
    subCategory: "shapes",
    price: 250,
    badge: "BUY 100 @ ₹250",
    image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=300",
    description: "Add a modern touch to your corporate network. Rounded corners offer a premium look and resist bending.",
    rating: 4.5,
    ratingCount: 478,
    deliveryText: "Same Day Delivery - Mumbai",
    subpriceText: "₹2.50 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm (6mm corner radius)",
      "Material": "350 GSM Soft Touch paper",
      "Print Quality": "Double-sided digital print",
      "Production Time": "3 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.1 },
        { label: "500 units", value: 500, priceMultiplier: 3.8 }
      ],
      paper: [
        { label: "Premium Matte (350 GSM)", value: "prem-matte", extraCost: 0 },
        { label: "Premium Glossy (350 GSM)", value: "prem-glossy", extraCost: 10 }
      ],
      finish: [
        { label: "Standard Gloss", value: "gloss", extraCost: 0 },
        { label: "Spot UV Highlight", value: "spot-uv", extraCost: 80 }
      ]
    }
  },
  {
    id: "glossy-visiting-cards",
    name: "Glossy",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 200,
    badge: "BUY 100 @ ₹200",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=300",
    description: "Premium glossy finish visiting cards that highlight colors and graphics with a shiny, reflective surface.",
    rating: 4.7,
    ratingCount: 123,
    deliveryText: "Same Day Delivery - Mumbai, Bengaluru & Hyderabad",
    subpriceText: "₹2.00 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "350 GSM Glossy Coated Art Paper",
      "Print Quality": "High Definition Digital Offset",
      "Production Time": "2-3 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.2 },
        { label: "500 units", value: 500, priceMultiplier: 4.0 }
      ],
      paper: [
        { label: "Glossy Cardstock (350 GSM)", value: "glossy-350", extraCost: 0 }
      ],
      finish: [
        { label: "Gloss Varnish", value: "none", extraCost: 0 }
      ]
    }
  },
  {
    id: "matte-visiting-cards",
    name: "Matte",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 200,
    badge: "BUY 100 @ ₹200",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300",
    description: "Classic matte finish visiting cards with a smooth, non-reflective texture that feels elegant to touch.",
    rating: 4.4,
    ratingCount: 174,
    deliveryText: "Same Day Delivery - Mumbai, Bengaluru & Hyderabad",
    subpriceText: "₹2.00 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "350 GSM Premium Matte Paper",
      "Print Quality": "Offset & Laser Digital Printing",
      "Production Time": "2-3 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.2 },
        { label: "500 units", value: 500, priceMultiplier: 4.0 }
      ],
      paper: [
        { label: "Matte Cardstock (350 GSM)", value: "matte-350", extraCost: 0 }
      ],
      finish: [
        { label: "Matte Coating", value: "none", extraCost: 0 }
      ]
    }
  },
  {
    id: "non-tearable-visiting-cards",
    name: "Non-Tearable",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 370,
    badge: "NEW OPTIONS",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=300",
    description: "Waterproof and tear-resistant visiting cards designed to survive rough handling while maintaining clarity.",
    rating: 4.4,
    ratingCount: 46,
    deliveryText: "",
    subpriceText: "₹3.70 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "Non-Tearable Synthetic Polymer",
      "Features": "Waterproof, Stainproof, Tear-resistant",
      "Production Time": "3-4 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.1 },
        { label: "500 units", value: 500, priceMultiplier: 3.8 }
      ],
      paper: [
        { label: "Premium Synthetic Polymer (250 Microns)", value: "synthetic", extraCost: 0 }
      ],
      finish: [
        { label: "Standard Finish", value: "none", extraCost: 0 }
      ]
    }
  },
  {
    id: "spot-uv-visiting-cards",
    name: "Spot UV",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 590,
    badge: "BUY 100 @ ₹590",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=300",
    description: "Draw eyes to your logo with spot UV varnishing that creates an elegant raised glossy finish on selected card sections.",
    rating: 4.2,
    ratingCount: 95,
    deliveryText: "",
    subpriceText: "₹5.90 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "350 GSM Matte Board with Spot Gloss",
      "Feel": "Contrast tactile texture",
      "Production Time": "4 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.2 }
      ],
      paper: [
        { label: "350 GSM Luxury Board", value: "luxury-350", extraCost: 0 }
      ],
      finish: [
        { label: "Spot UV Coating (1 Side)", value: "uv-1s", extraCost: 0 },
        { label: "Spot UV Coating (Both Sides)", value: "uv-2s", extraCost: 120 }
      ]
    }
  },
  {
    id: "raised-foil-visiting-cards",
    name: "Raised Foil Visiting Cards",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 900,
    badge: "BUY 100 @ ₹900",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=300",
    description: "Stunning metallic foil accents lifted above the surface of the card for a luxury touch you can feel.",
    rating: 4.8,
    ratingCount: 12,
    deliveryText: "",
    subpriceText: "₹9.00 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "350 GSM Velvet Matte Cardstock",
      "Finish": "Metallic Foil (Gold/Silver) in Raised Layer",
      "Production Time": "5 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.2 }
      ],
      paper: [
        { label: "Premium Velvet Board (350 GSM)", value: "velvet-350", extraCost: 0 }
      ],
      finish: [
        { label: "Raised Gold Foil", value: "gold-foil", extraCost: 0 },
        { label: "Raised Silver Foil", value: "silver-foil", extraCost: 0 }
      ]
    }
  },
  {
    id: "prem-plus-glossy-visiting-cards",
    name: "Premium Plus Glossy",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 290,
    badge: "BUY 100 @ ₹290",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=300",
    description: "Extra thick cards featuring a glossy finish that emphasizes depth of color and provides maximum stiffness.",
    rating: 4.2,
    ratingCount: 108,
    deliveryText: "",
    subpriceText: "₹2.90 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "400 GSM Ultra-Thick Glossy Board",
      "Print Quality": "Superior High Gloss & Vibrant Inks",
      "Production Time": "3 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.2 },
        { label: "500 units", value: 500, priceMultiplier: 4.0 }
      ],
      paper: [
        { label: "Premium Plus Gloss Cardstock (400 GSM)", value: "plus-gloss", extraCost: 0 }
      ],
      finish: [
        { label: "High Shine Coating", value: "none", extraCost: 0 }
      ]
    }
  },
  {
    id: "transparent-visiting-cards",
    name: "Transparent",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 1000,
    badge: "BUY 100 @ ₹1000",
    image: "https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?q=80&w=300",
    description: "Stand out with semi-frost or clear transparent polymer cards. Sleek, innovative, and memorable.",
    rating: 3.4,
    ratingCount: 20,
    deliveryText: "",
    subpriceText: "₹10.00 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "0.3mm Clear/Frosted PVC Polymer",
      "Print style": "Single sided, transparent friendly overlay",
      "Production Time": "5-6 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.2 }
      ],
      paper: [
        { label: "Clear Transparent PVC", value: "clear-pvc", extraCost: 0 },
        { label: "Frosted Translucent PVC", value: "frosted-pvc", extraCost: 0 }
      ],
      finish: [
        { label: "Standard Translucent Inks", value: "cmyk", extraCost: 0 },
        { label: "White Ink Underlay (Opaque sections)", value: "white-ink", extraCost: 150 }
      ]
    }
  },
  {
    id: "bulk-visiting-cards",
    name: "Bulk Visiting Cards",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 1500,
    badge: "BUY 1500 @ ₹1500",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=300",
    description: "High-volume visiting cards printed on standard cardstock, perfect for large offices and events.",
    rating: 4.5,
    ratingCount: 82,
    deliveryText: "Same Day Delivery - Mumbai",
    subpriceText: "₹1.00 each / 1500 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "280 GSM Standard Art Card",
      "Best For": "Large corporate rollouts, conference hand outs",
      "Production Time": "3-4 business days"
    },
    options: {
      quantity: [
        { label: "1500 units", value: 1500, priceMultiplier: 1.0 },
        { label: "3000 units", value: 3000, priceMultiplier: 1.9 },
        { label: "5000 units", value: 5000, priceMultiplier: 3.0 }
      ],
      paper: [
        { label: "Standard Art Card (280 GSM)", value: "std-art", extraCost: 0 }
      ],
      finish: [
        { label: "Uncoated Finish", value: "none", extraCost: 0 }
      ]
    }
  },
  {
    id: "velvet-touch-visiting-cards",
    name: "Velvet Touch",
    category: "visiting-cards",
    subCategory: "papers-textures",
    price: 300,
    badge: "BUY 100 @ ₹300",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=300",
    description: "Suede-like soft touch lamination that gives your card an incredibly smooth, velvet-like premium feel.",
    rating: 4.3,
    ratingCount: 126,
    deliveryText: "",
    subpriceText: "₹3.00 each / 100 units",
    specifications: {
      "Dimensions": "89 mm x 54 mm",
      "Material": "350 GSM Art Board",
      "Lamination": "Premium Double-Sided Velvet/Soft-Touch Matte",
      "Production Time": "3-4 business days"
    },
    options: {
      quantity: [
        { label: "100 units", value: 100, priceMultiplier: 1.0 },
        { label: "250 units", value: 250, priceMultiplier: 2.2 },
        { label: "500 units", value: 500, priceMultiplier: 4.0 }
      ],
      paper: [
        { label: "Premium Art Board (350 GSM)", value: "art-350", extraCost: 0 }
      ],
      finish: [
        { label: "Velvet Lamination", value: "velvet-lam", extraCost: 0 }
      ]
    }
  },

  // --- STATIONERY, LETTERHEADS & NOTEBOOKS ---
  {
    id: "letterheads",
    name: "Corporate Letterheads",
    category: "stationery-letterheads-notebooks",
    price: 450,
    badge: "BUY 50 @ ₹450",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=300",
    description: "Print official company communications on executive-grade letterheads. Standard A4 size compatible with office printers.",
    specifications: {
      "Dimensions": "A4 Standard (210 x 297 mm)",
      "Material": "100 GSM Alabaster Bond / 120 GSM Royal Executive",
      "Laser Friendly": "Yes, print-ready",
      "Production Time": "2-3 business days"
    },
    options: {
      quantity: [
        { label: "50 units", value: 50, priceMultiplier: 1.0 },
        { label: "100 units", value: 100, priceMultiplier: 1.8 },
        { label: "500 units", value: 500, priceMultiplier: 7.0 }
      ],
      paper: [
        { label: "100 GSM Bond Paper", value: "bond-100", extraCost: 0 },
        { label: "120 GSM Luxury Laid Paper", value: "laid-120", extraCost: 100 }
      ],
      finish: [
        { label: "Uncoated (Writeable)", value: "none", extraCost: 0 }
      ]
    }
  },
  {
    id: "premium-notebooks",
    name: "Premium Softcover & Hardcover Notebooks",
    category: "stationery-letterheads-notebooks",
    price: 150,
    badge: "Starting at ₹150",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=300",
    description: "Custom corporate notebooks and diaries with your company logo embossed or printed. Perfect for employee onboarding and client gifts.",
    specifications: {
      "Size": "A5 (148 x 210 mm)",
      "Pages": "160 Ruled Pages (80 GSM)",
      "Cover": "Hard Bound or Soft Matte PU Leather",
      "Production Time": "3-4 business days"
    },
    options: {
      quantity: [
        { label: "1 unit", value: 1, priceMultiplier: 1.0 },
        { label: "10 units", value: 10, priceMultiplier: 9.0 },
        { label: "50 units", value: 50, priceMultiplier: 42.0 },
        { label: "100 units", value: 100, priceMultiplier: 80.0 }
      ],
      paper: [
        { label: "Ruled White Pages (80 GSM)", value: "ruled", extraCost: 0 },
        { label: "Unruled Ivory Pages (90 GSM)", value: "unruled", extraCost: 30 }
      ],
      finish: [
        { label: "Logo Screen Print (1 Color)", value: "print", extraCost: 0 },
        { label: "Logo Debossing / Foil Stamp", value: "deboss", extraCost: 50 }
      ]
    }
  },
  {
    id: "booklets",
    name: "Custom Multi-Page Booklets",
    category: "stationery-letterheads-notebooks",
    price: 650,
    badge: "Starting at ₹650",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=300",
    description: "Product user guides, company profiles, and brochures bound professionally. Stapled or wire-bound bindings.",
    specifications: {
      "Binding": "Saddle-stitch (Stapled)",
      "Page Count": "8 to 32 pages",
      "Paper Cover": "250 GSM Gloss Cover",
      "Production Time": "5 business days"
    },
    options: {
      quantity: [
        { label: "10 Booklets", value: 10, priceMultiplier: 1.0 },
        { label: "50 Booklets", value: 50, priceMultiplier: 4.5 }
      ],
      paper: [
        { label: "8 Pages (130 GSM inner)", value: "8p", extraCost: 0 },
        { label: "16 Pages (130 GSM inner)", value: "16p", extraCost: 150 },
        { label: "24 Pages (130 GSM inner)", value: "24p", extraCost: 300 }
      ],
      finish: [
        { label: "Standard Staple Bound", value: "staple", extraCost: 0 },
        { label: "Spiral Coil Bound", value: "spiral", extraCost: 50 }
      ]
    }
  },

  // --- STAMPS AND INK ---
  {
    id: "self-inking-stamps",
    name: "Custom Self-Inking Stamps",
    category: "stamps-ink",
    price: 299,
    badge: "Starting at ₹299",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=300",
    description: "High-durability custom self-inking rubber stamps. Choose from round, rectangular, or pocket sizes with blue, black, or red ink.",
    specifications: {
      "Stamp Type": "Self-Inking Rubber Stamp",
      "Ink Colors": "Black, Blue, Red",
      "Durability": "Up to 10,000 impressions before refill",
      "Production Time": "1-2 business days"
    },
    options: {
      quantity: [
        { label: "1 unit", value: 1, priceMultiplier: 1.0 },
        { label: "5 units", value: 5, priceMultiplier: 4.5 }
      ],
      paper: [
        { label: "Rectangular (47 x 18 mm)", value: "rect-medium", extraCost: 0 },
        { label: "Rectangular Large (58 x 22 mm)", value: "rect-large", extraCost: 100 },
        { label: "Circular (40 mm Diameter)", value: "circular-medium", extraCost: 150 }
      ],
      finish: [
        { label: "Blue Ink", value: "blue", extraCost: 0 },
        { label: "Black Ink", value: "black", extraCost: 0 },
        { label: "Red Ink", value: "red", extraCost: 0 }
      ]
    }
  },
  {
    id: "custom-qr-stand",
    name: "Customised QR Code Stand",
    category: "stamps-ink",
    price: 249,
    badge: "NEW ✨ Starting at ₹249",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=300",
    description: "Acrylic table standees customized with your UPI QR codes (GPay, PhonePe, Paytm). Perfect for billing desks.",
    specifications: {
      "Dimensions": "4\" x 6\" Tabletop",
      "Material": "3mm Premium Acrylic",
      "Base": "Wooden slot base or Acrylic stand",
      "Production Time": "2 business days"
    },
    options: {
      quantity: [
        { label: "1 Stand", value: 1, priceMultiplier: 1.0 },
        { label: "5 Stands", value: 5, priceMultiplier: 4.5 },
        { label: "20 Stands", value: 20, priceMultiplier: 16.0 }
      ],
      paper: [
        { label: "Standard Flat Acrylic Stand", value: "acrylic-flat", extraCost: 0 },
        { label: "Eco Beechwood Wooden Base Stand", value: "wooden-base", extraCost: 100 }
      ],
      finish: [
        { label: "UPI QR Print Only", value: "qr-only", extraCost: 0 },
        { label: "QR Code + Social Handles Custom Graphics", value: "qr-social", extraCost: 50 }
      ]
    }
  },

  // --- SIGNS & POSTERS ---
  {
    id: "posters",
    name: "High-Gloss Custom Posters",
    category: "posters-signs",
    price: 120,
    badge: "Starting at ₹120",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=300",
    description: "Vibrant high-resolution wall posters for promotional campaigns, store displays, or interior decor.",
    specifications: {
      "Sizes": "A3 or A2 Portrait/Landscape",
      "Material": "220 GSM High Gloss Photo Paper",
      "Inks": "Vance 8-Color Pigment (Fade resistant)",
      "Production Time": "2 business days"
    },
    options: {
      quantity: [
        { label: "1 Poster", value: 1, priceMultiplier: 1.0 },
        { label: "5 Posters", value: 5, priceMultiplier: 4.2 },
        { label: "20 Posters", value: 20, priceMultiplier: 15.0 }
      ],
      paper: [
        { label: "A3 Size (297 x 420 mm)", value: "a3", extraCost: 0 },
        { label: "A2 Size (420 x 594 mm)", value: "a2", extraCost: 80 }
      ],
      finish: [
        { label: "High Gloss finish", value: "gloss", extraCost: 0 },
        { label: "Satin Matte finish", value: "matte", extraCost: 10 }
      ]
    }
  },
  {
    id: "transline-board",
    name: "Backlit Transline Board",
    category: "posters-signs",
    price: 1500,
    badge: "NEW ✨ Starting at ₹1,500",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=300",
    description: "Translucent film prints customized for LED light boxes in showrooms, restaurants, and clinic menu panels.",
    specifications: {
      "Thickness": "220 Microns",
      "Transparency": "Diffused backlit friendly",
      "Inks": "UV cured print (Non-fade under LED)",
      "Production Time": "3 business days"
    },
    options: {
      quantity: [
        { label: "1 Board Print", value: 1, priceMultiplier: 1.0 },
        { label: "2 Board Prints", value: 2, priceMultiplier: 1.9 }
      ],
      paper: [
        { label: "Standard Translite Film", value: "translite", extraCost: 0 }
      ],
      finish: [
        { label: "Gloss Translucent", value: "gloss", extraCost: 0 }
      ]
    }
  },
  {
    id: "lollipop-board",
    name: "Circular Lollipop Sign Board",
    category: "posters-signs",
    price: 3200,
    badge: "NEW ✨ Starting at ₹3,200",
    image: "https://images.unsplash.com/photo-1572248525483-db821941655b?q=80&w=300",
    description: "Double-sided LED projection lollipop signs for street side store fronts. Includes rotating options and wall mounts.",
    specifications: {
      "Diameter": "24 Inches (60 cm) circular",
      "Frame": "Aluminium extrusion body with iron wall bracket",
      "LED": "IP65 Waterproof LED modules",
      "Production Time": "5-6 business days"
    },
    options: {
      quantity: [
        { label: "1 Lollipop Sign", value: 1, priceMultiplier: 1.0 },
        { label: "2 Lollipop Signs", value: 2, priceMultiplier: 1.95 }
      ],
      paper: [
        { label: "LED Backlit Circular Board", value: "led-circular", extraCost: 0 }
      ],
      finish: [
        { label: "Standard Static LED", value: "static", extraCost: 0 },
        { label: "Rotating LED Mechanism", value: "rotate", extraCost: 1500 }
      ]
    }
  },
  {
    id: "acrylic-signs",
    name: "Custom Acrylic Wall Signs",
    category: "posters-signs",
    price: 1800,
    badge: "NEW ✨ Starting at ₹1,800",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=300",
    description: "Elevate your reception lobby with custom acrylic signboards. Features metallic standoffs and laser-cut branding overlays.",
    specifications: {
      "Thickness": "5mm Acrylic glass sheet",
      "Mounts": "4 Corner Stainless Steel Standoffs",
      "Print": "Reverse UV Direct printing (HD detail)",
      "Production Time": "4-5 business days"
    },
    options: {
      quantity: [
        { label: "1 Signboard (12\" x 18\")", value: 1, priceMultiplier: 1.0 },
        { label: "1 Signboard (24\" x 36\")", value: 1.5, priceMultiplier: 2.8 }
      ],
      paper: [
        { label: "Clear Glass-look Acrylic", value: "clear", extraCost: 0 },
        { label: "Frosted Acrylic Sheet", value: "frosted", extraCost: 150 },
        { label: "Solid Jet Black Acrylic", value: "black", extraCost: 150 }
      ],
      finish: [
        { label: "Standard Wall Stud Standoffs", value: "standoff", extraCost: 0 }
      ]
    }
  },

  // --- STICKERS & LABELS ---
  {
    id: "stickers",
    name: "Custom Die-Cut Stickers",
    category: "stickers-labels",
    price: 150,
    badge: "BUY 50 @ ₹150",
    image: "https://images.unsplash.com/photo-1572375995501-4b0894dbe0d1?q=80&w=300",
    description: "Promote your brand on laptops, notebooks, water bottles, and cars. Waterproof, scratch-resistant die-cut vinyl stickers.",
    specifications: {
      "Dimensions": "3\" x 3\" Custom Shapes",
      "Material": "Thick, durable vinyl with strong adhesive",
      "Weather Resistant": "Yes (UV and Waterproof)",
      "Production Time": "3 business days"
    },
    options: {
      quantity: [
        { label: "50 stickers", value: 50, priceMultiplier: 1.0 },
        { label: "100 stickers", value: 100, priceMultiplier: 1.8 },
        { label: "500 stickers", value: 500, priceMultiplier: 7.5 }
      ],
      paper: [
        { label: "White Glossy Vinyl", value: "white-vinyl", extraCost: 0 },
        { label: "Transparent Vinyl", value: "trans-vinyl", extraCost: 40 },
        { label: "Holographic Vinyl", value: "holo-vinyl", extraCost: 100 }
      ],
      finish: [
        { label: "Glossy Finish", value: "glossy", extraCost: 0 },
        { label: "Matte Finish", value: "matte", extraCost: 10 }
      ]
    }
  },
  {
    id: "sheet-stickers",
    name: "Custom Sheet Stickers",
    category: "stickers-labels",
    price: 180,
    badge: "Starting at ₹180",
    image: "https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?q=80&w=300",
    description: "Print dozens of stickers on a single sheet. Ideal for labels, event badges, and quick branding applications.",
    specifications: {
      "Sheet Size": "A4 Paper Size",
      "Sticker Shapes": "Circle, Square, Rectangular",
      "Quantity per sheet": "12 to 48 stickers (varies by size)",
      "Production Time": "2 business days"
    },
    options: {
      quantity: [
        { label: "5 Sheets", value: 5, priceMultiplier: 1.0 },
        { label: "10 Sheets", value: 10, priceMultiplier: 1.8 },
        { label: "50 Sheets", value: 50, priceMultiplier: 7.2 }
      ],
      paper: [
        { label: "Paper Sticker (Gloss)", value: "paper-gloss", extraCost: 0 },
        { label: "Vinyl Waterproof Sheet", value: "vinyl", extraCost: 100 }
      ],
      finish: [
        { label: "Gloss Varnish", value: "gloss", extraCost: 0 },
        { label: "Matte Laminate", value: "matte", extraCost: 20 }
      ]
    }
  },
  {
    id: "custom-shape-stickers",
    name: "Custom Shape Stickers",
    category: "stickers-labels",
    price: 220,
    badge: "Starting at ₹220",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=300",
    description: "Precision-cut stickers that follow the exact outline of your logo or custom illustration. Stands out instantly.",
    specifications: {
      "Die-cut type": "Laser Cut Contour",
      "Material": "4 mil Premium Vinyl",
      "Resistant": "Water, scratch, and fade proof",
      "Production Time": "3 business days"
    },
    options: {
      quantity: [
        { label: "50 units", value: 50, priceMultiplier: 1.0 },
        { label: "100 units", value: 100, priceMultiplier: 1.8 }
      ],
      paper: [
        { label: "Glossy White Vinyl", value: "white-vinyl", extraCost: 0 },
        { label: "Metallic Foil Vinyl", value: "foil", extraCost: 80 }
      ],
      finish: [
        { label: "Gloss Finish", value: "gloss", extraCost: 0 },
        { label: "Matte Finish", value: "matte", extraCost: 10 }
      ]
    }
  },
  {
    id: "sticker-singles",
    name: "Sticker Singles (Individual)",
    category: "stickers-labels",
    price: 99,
    badge: "Starting at ₹99",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=300",
    description: "Individually cut vinyl stickers with paper backs, perfect for handing out at events or packing inside customer shipments.",
    specifications: {
      "Size": "2\" x 2\" or 3\" x 3\"",
      "Packaging": "Bundled in packs with easy peel backs",
      "Material": "Vinyl Gloss",
      "Production Time": "2-3 business days"
    },
    options: {
      quantity: [
        { label: "50 Singles", value: 50, priceMultiplier: 1.0 },
        { label: "200 Singles", value: 200, priceMultiplier: 3.5 }
      ],
      paper: [
        { label: "Vinyl Gloss (3\")", value: "vinyl-gloss-3", extraCost: 0 }
      ],
      finish: [
        { label: "Glossy", value: "glossy", extraCost: 0 }
      ]
    }
  },
  {
    id: "packaging-labels",
    name: "Product & Packaging Labels",
    category: "stickers-labels",
    price: 250,
    badge: "Starting at ₹250",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=300",
    description: "High-adhesion labels customized for boxes, plastic jars, bottles, and cardboard mailers.",
    specifications: {
      "Material": "Industrial-grade Vinyl or Kraft paper",
      "Adhesive": "Strong permanent adhesive",
      "Roll Option": "Available for 1000+ units",
      "Production Time": "3-4 business days"
    },
    options: {
      quantity: [
        { label: "100 labels", value: 100, priceMultiplier: 1.0 },
        { label: "500 labels", value: 500, priceMultiplier: 4.0 },
        { label: "1000 labels", value: 1000, priceMultiplier: 7.0 }
      ],
      paper: [
        { label: "White Polypropylene (PP)", value: "pp-white", extraCost: 0 },
        { label: "Brown Kraft Paper (Eco)", value: "kraft", extraCost: 10 },
        { label: "Clear Synthetic", value: "clear", extraCost: 50 }
      ],
      finish: [
        { label: "Gloss Lamination", value: "gloss", extraCost: 0 },
        { label: "Matte Tactile Lamination", value: "matte", extraCost: 30 }
      ]
    }
  },
  {
    id: "transparent-labels",
    name: "Transparent Product Labels",
    category: "stickers-labels",
    price: 280,
    badge: "Starting at ₹280",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=300",
    description: "Get a seamless 'no-label' look on glass jars and cosmetics containers with clear synthetic transparent labels.",
    specifications: {
      "Transparency": "100% Optically Clear",
      "Waterproof": "Yes, grease & oil resistant",
      "Print Colors": "Full color + White Ink backing option",
      "Production Time": "4 business days"
    },
    options: {
      quantity: [
        { label: "100 labels", value: 100, priceMultiplier: 1.0 },
        { label: "500 labels", value: 500, priceMultiplier: 4.2 }
      ],
      paper: [
        { label: "Clear PET Synthetic", value: "clear-pet", extraCost: 0 }
      ],
      finish: [
        { label: "Standard CMYK Colors", value: "cmyk", extraCost: 0 },
        { label: "White Ink Underprint (Vibrant)", value: "white-ink", extraCost: 80 }
      ]
    }
  },

  // --- PACKAGING ---
  {
    id: "self-adhesive-tapes",
    name: "Self Adhesive Custom Tapes",
    category: "packaging",
    price: 399,
    badge: "Starting at ₹399",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=300",
    description: "Secure your shipping boxes with custom-branded packing tape. Water-activated or heavy-duty plastic adhesive options.",
    specifications: {
      "Width": "2 Inches (50mm) standard",
      "Roll Length": "50 Meters",
      "Material": "Adhesive Kraft Paper or Reinforced BOPP plastic",
      "Production Time": "6-8 business days"
    },
    options: {
      quantity: [
        { label: "2 Rolls", value: 2, priceMultiplier: 1.0 },
        { label: "10 Rolls", value: 10, priceMultiplier: 4.2 },
        { label: "50 Rolls", value: 50, priceMultiplier: 18.0 }
      ],
      paper: [
        { label: "Standard Brown Kraft Tape", value: "kraft-brown", extraCost: 0 },
        { label: "Reinforced White Paper Tape", value: "paper-white", extraCost: 80 },
        { label: "BOPP Clear Plastic Tape", value: "bopp-clear", extraCost: 50 }
      ],
      finish: [
        { label: "Single Color Print", value: "1color", extraCost: 0 },
        { label: "Two Color Branding Print", value: "2color", extraCost: 100 }
      ]
    }
  },
  {
    id: "packaging-boxes",
    name: "Custom Corrugated Packaging Boxes",
    category: "packaging",
    price: 499,
    badge: "Starting at ₹499",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=300",
    description: "High-strength custom corrugated boxes printed with your logo. Perfect for product shipping and luxury subscription boxes.",
    specifications: {
      "Material": "3-ply/5-ply Corrugated Board",
      "Sizes": "Custom sizes available",
      "Print": "Flexographic or HD Digital Printing",
      "Production Time": "6-8 business days"
    },
    options: {
      quantity: [
        { label: "50 boxes", value: 50, priceMultiplier: 1.0 },
        { label: "200 boxes", value: 200, priceMultiplier: 3.6 }
      ],
      paper: [
        { label: "Kraft Brown Corrugated", value: "kraft-brown", extraCost: 0 },
        { label: "White Coated Premium", value: "white-premium", extraCost: 100 }
      ],
      finish: [
        { label: "Single color print", value: "1color", extraCost: 0 },
        { label: "Full CMYK digital wrap", value: "full-color", extraCost: 200 }
      ]
    }
  },

  // --- MARKETING MATERIALS ---
  {
    id: "roll-banners",
    name: "Standee Banner Screens",
    category: "marketing-materials",
    price: 890,
    badge: "Starting at ₹890",
    image: "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=300",
    description: "Retractable roll-up banners for store entrances, trade shows, and event staging. Sturdy aluminium stand included.",
    specifications: {
      "Size": "2.5 x 6 Feet banner area",
      "Stand": "Aluminium Base with supporting rods",
      "Material": "Flex Non-Tear Star media banner",
      "Production Time": "2-3 business days"
    },
    options: {
      quantity: [
        { label: "1 Standee", value: 1, priceMultiplier: 1.0 },
        { label: "3 Standees", value: 3, priceMultiplier: 2.8 },
        { label: "10 Standees", value: 10, priceMultiplier: 8.5 }
      ],
      paper: [
        { label: "Flex Normal Print", value: "flex-normal", extraCost: 0 },
        { label: "Star Non-Tear Flex (Rich Colors)", value: "star-non-tear", extraCost: 300 }
      ],
      finish: [
        { label: "Aluminium Standee Roll-up Base", value: "base-stand", extraCost: 0 }
      ]
    }
  },
  {
    id: "standees",
    name: "Promotional Rigid Standees",
    category: "marketing-materials",
    price: 1200,
    badge: "Starting at ₹1,200",
    image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=300",
    description: "Sturdy MDF or Sunboard cutouts on iron frames. Perfect for indoor mall lobbies or outdoor showroom spaces.",
    specifications: {
      "Height": "5 Feet or 6 Feet",
      "Material": "5mm Sunboard pasted on Iron easel stand",
      "Weight": "4.5 Kg approx",
      "Production Time": "3-4 business days"
    },
    options: {
      quantity: [
        { label: "1 Standee", value: 1, priceMultiplier: 1.0 },
        { label: "5 Standees", value: 5, priceMultiplier: 4.6 }
      ],
      paper: [
        { label: "5mm Sunboard on Frame", value: "sunboard-5mm", extraCost: 0 }
      ],
      finish: [
        { label: "Standard Rectangular Cut", value: "rect", extraCost: 0 },
        { label: "Custom Silhouette Shape Cut", value: "custom-cut", extraCost: 250 }
      ]
    }
  },
  {
    id: "canopy-tents",
    name: "Promotional Canopy Tents",
    category: "marketing-materials",
    price: 4999,
    badge: "NEW ✨ Starting at ₹4,999",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=300",
    description: "Custom printed 4-sided fold-up canopy tents for outdoor advertising, checkposts, and event branding setups.",
    specifications: {
      "Dimensions": "4 x 4 x 7 Feet or 6 x 6 x 7 Feet",
      "Structure": "Powder-coated collapsible iron pipes",
      "Fabric": "Heavy-duty waterproof PVC flex canvas",
      "Production Time": "6-8 business days"
    },
    options: {
      quantity: [
        { label: "1 Full Canopy Tent", value: 1, priceMultiplier: 1.0 },
        { label: "3 Full Canopy Tents", value: 3, priceMultiplier: 2.85 }
      ],
      paper: [
        { label: "4x4 Collapsible Iron Stand", value: "iron-4x4", extraCost: 0 },
        { label: "6x6 Premium Heavy Iron Stand", value: "iron-6x6", extraCost: 1200 }
      ],
      finish: [
        { label: "Solid Roof Print Only", value: "roof", extraCost: 0 },
        { label: "Roof + 3 Side Backdrops Printed panels", value: "full-print", extraCost: 1800 }
      ]
    }
  },

  // --- CUSTOM GIFTING ---
  {
    id: "photo-albums",
    name: "Premium Photo Albums",
    category: "gifting",
    price: 850,
    badge: "Starting at ₹850",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=300",
    description: "Compile and preserve your weddings, travels, and milestones in high-fidelity layflat custom photobooks.",
    specifications: {
      "Dimensions": "8\" x 8\" or 12\" x 8\" Landscape",
      "Pages": "20 Standard Pages (Expandable)",
      "Binding": "Hardcover Layflat Binding",
      "Production Time": "4-5 business days"
    },
    options: {
      quantity: [
        { label: "1 Album", value: 1, priceMultiplier: 1.0 },
        { label: "2 Albums", value: 2, priceMultiplier: 1.95 },
        { label: "5 Albums", value: 5, priceMultiplier: 4.5 }
      ],
      paper: [
        { label: "Lustre Photographic Paper", value: "lustre", extraCost: 0 },
        { label: "Metallic High-Gloss Paper", value: "metallic", extraCost: 200 }
      ],
      finish: [
        { label: "Standard Hardcover", value: "hardcover", extraCost: 0 },
        { label: "Padded Leatherette Cover", value: "leatherette", extraCost: 350 }
      ]
    }
  },
  {
    id: "custom-mugs",
    name: "Custom Photo Ceramic Mugs",
    category: "gifting",
    price: 199,
    badge: "BUY 1 @ ₹199",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=300",
    description: "Personalized ceramic coffee mugs printed with your favorite photos, text, or company logo. Microwave & dishwasher safe.",
    specifications: {
      "Capacity": "325 ml (11 Oz)",
      "Material": "Premium Ceramic",
      "Print Type": "Sublimation Heat Transfer",
      "Production Time": "1-2 business days"
    },
    options: {
      quantity: [
        { label: "1 Mug", value: 1, priceMultiplier: 1.0 },
        { label: "5 Mugs", value: 5, priceMultiplier: 4.5 },
        { label: "20 Mugs", value: 20, priceMultiplier: 16.0 }
      ],
      paper: [
        { label: "Standard White Mug", value: "white", extraCost: 0 },
        { label: "Black Inner/Handle Mug", value: "black-trim", extraCost: 30 },
        { label: "Magic Color Changing Mug", value: "magic", extraCost: 100 }
      ],
      finish: [
        { label: "Glossy Finish", value: "glossy", extraCost: 0 }
      ]
    }
  },
  {
    id: "embroidered-bags",
    name: "Embroidered Laptop Bags",
    category: "gifting",
    price: 950,
    badge: "Starting at ₹950",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300",
    description: "Durable polyester laptop backpacks customized with your organization's embroidered emblem on the front pocket.",
    specifications: {
      "Capacity": "24 Litres (Up to 15.6\" Laptops)",
      "Material": "Waterproof Ballistic Nylon",
      "Pockets": "3 main compartments, water bottle mesh",
      "Production Time": "6-7 business days"
    },
    options: {
      quantity: [
        { label: "1 Bag", value: 1, priceMultiplier: 1.0 },
        { label: "5 Bags", value: 5, priceMultiplier: 4.8 },
        { label: "20 Bags", value: 20, priceMultiplier: 18.0 }
      ],
      paper: [
        { label: "Standard Office Backpack", value: "std-backpack", extraCost: 0 }
      ],
      finish: [
        { label: "Single Logo Stitching", value: "logo-stitch", extraCost: 0 },
        { label: "Dual Location Stitching", value: "dual-stitch", extraCost: 120 }
      ]
    }
  },
  {
    id: "american-tourister-bag",
    name: "American Tourister Laptop Bag with Rain Cover",
    category: "gifting",
    price: 1850,
    badge: "Starting at ₹1,850",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=300",
    description: "Premium American Tourister backpacks with embedded rain covers. Customized with custom brand prints or embroidery logo.",
    specifications: {
      "Brand": "American Tourister",
      "Volume": "32 Litres",
      "Rain Cover": "Yes, included in bottom zip",
      "Warranty": "1 Year International",
      "Production Time": "7-9 business days"
    },
    options: {
      quantity: [
        { label: "1 Bag", value: 1, priceMultiplier: 1.0 },
        { label: "10 Bags", value: 10, priceMultiplier: 9.8 },
        { label: "50 Bags", value: 50, priceMultiplier: 46.0 }
      ],
      paper: [
        { label: "AT Signature Black Bag", value: "at-black", extraCost: 0 },
        { label: "AT Signature Navy Bag", value: "at-navy", extraCost: 0 }
      ],
      finish: [
        { label: "Laser Heat Transfer Brand Print", value: "laser-print", extraCost: 0 },
        { label: "Premium Silken Embroidery", value: "premium-stitch", extraCost: 150 }
      ]
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
