export const SITE_CONTENT = {
  brand: {
    name: "Manjeet Boutique",
    tagline: "Premium tailoring services with expert craftsmanship and attention to detail.",
    logoText: "Manjeet Boutique",
    headerCTA: "Book Now",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: "Premium Tailoring Services",
    description: "At Manjeet Boutique, we bring your fashion vision to life with expert craftsmanship and attention to detail. From custom suits to alterations, we've got you covered.",
    primaryCTA: "Our Services",
    secondaryCTA: "Contact Us",
    // Backend image simulation: images will be fetched in component
    // image: null, 
  },
  about: {
    title: "About Manjeet Boutique",
    subtitle: "A tradition of excellence in tailoring, serving our community with passion and dedication.",
    image: "https://images.unsplash.com/photo-1551524344-93ad9199d30c?auto=format&fit=crop&q=80&w=1200",
    paragraphs: [
      "Welcome to Manjeet Boutique, where tradition meets modern fashion. For over a decade, we've been crafting custom garments that reflect your unique style and personality.",
      "Our team of skilled tailors brings years of experience and expertise to every project. Whether you need a custom suit for a special occasion or simple alterations to your favorite garment, we handle each piece with the utmost care and professionalism.",
      "We believe that everyone deserves to look and feel their best. That's why we take the time to understand your needs and deliver results that exceed your expectations.",
    ],
  },
  features: [
    {
      title: "Quality Craftsmanship",
      description: "Every stitch is made with precision and care to ensure the highest quality.",
      icon: "quality",
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work closely with you to exceed expectations.",
      icon: "customer",
    },
    {
      title: "Attention to Detail",
      description: "From measurements to final touches, we ensure perfection in every detail.",
      icon: "detail",
    },
  ],
  services: {
    title: "Our Services",
    description: "We offer a comprehensive range of tailoring services to meet all your fashion needs.",
    items: [
      {
        title: "Custom Suits & Dresses",
        description: "Bespoke tailoring for suits, dresses, and formal wear designed to fit you perfectly.",
        icon: "clothing",
      },
      {
        title: "Alterations & Repairs",
        description: "Expert alterations for all types of garments, from hemming to resizing.",
        icon: "repairs",
      },
      {
        title: "Measurements & Fitting",
        description: "Precise measurements and fittings to ensure a perfect fit every time.",
        icon: "ruler",
      },
      {
        title: "Wedding & Special Events",
        description: "Specialized services for weddings, proms, and other special occasions.",
        icon: "wedding",
      },
    ],
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Expert craftsmen with years of experience",
        "High-quality materials and premium fabrics",
        "Fast turnaround times without compromising quality",
        "Competitive pricing and transparent quotes",
      ],
    },
    process: {
      title: "Our Process",
      items: [
        "Consultation & Measurement",
        "Fabric Selection & Design",
        "Expert Tailoring & Crafting",
        "Final Fitting",
      ],
    },
  },
  gallery: {
    title: "Our Work",
    description: "Explore some of our finest creations and see the quality of our craftsmanship.",
    // Backend image simulation: images will be fetched in component
    images: [],
    cta: {
      title: "Ready to Create Your Perfect Outfit?",
      description: "Schedule a consultation with our expert tailors and bring your vision to life.",
      buttonText: "Get Started",
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Have a question or ready to start your next project? We'd love to hear from you!",
    infoTitle: "Contact Information",
    details: [
      {
        label: "Visit Us",
        value: "Manjeet Boutique, Bilaspur Park, Haryana, India",
        icon: "location",
      },
      {
        label: "Call Us",
        value: "9728820566",
        icon: "phone",
      },
      {
        label: "Email Us",
        value: "Manjeetboutique566@gmail.com",
        icon: "email",
      },
      {
        label: "Business Hours",
        value: "Mon-Sat: 9:00 AM - 8:00 PM",
        icon: "clock",
      },
    ],
    mapUrl: "https://www.google.com/maps?q=30.3024549,77.301474&output=embed",
  },
  footer: {
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", href: "#home" },
          { label: "About Us", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Gallery", href: "#gallery" },
        ],
      },
      {
        title: "Services",
        items: [
          "Custom Suits",
          "Dress Making",
          "Alterations",
          "Special Events",
        ],
      },
      {
        title: "Connect With Us",
        socials: [
          { icon: "facebook", href: "#" },
          { icon: "instagram", href: "#" },
          { icon: "email", href: "#" },
        ],
        followText: "Follow us for style tips and updates!",
      },
    ],
    copyright: "© 2025 Manjeet Boutique. All rights reserved.",
    designer: {
      text: "Design by Jasleen Singh",
      url: "https://jasleen-singh.vercel.app/"
    }
  },
};

// MOCK BACKEND DATA
export const MOCK_BACKEND_DATA = {
    heroImage: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200",
    workGallery: [
      "https://images.unsplash.com/photo-1598460593792-75ca443ac6d0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1594932224534-11a511394f7a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1539106602913-d0d64875390a?auto=format&fit=crop&q=80&w=800",
    ]
};
