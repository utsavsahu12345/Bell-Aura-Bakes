import React, { useState, useEffect } from "react";
import logo from "./assets/logo.jpg";
import hero from "./assets/hero-cake.jpg";
import img1 from "./assets/assorted-mini-cupcakes-tray.jpg";
import img2 from "./assets/chocolate-layer-cake-slice.jpg";
import img3 from "./assets/dark-chocolate-rose-cake.jpg";
import img4 from "./assets/pink-birthday-cake-cupcakes-combo-box.jpg";
import img5 from "./assets/pink-cupcakes-box-pack.jpg";
import img6 from "./assets/two-tier-pink-floral-birthday-cake.jpg";
import img7 from "./assets/vanilla-sheet-cake-slice.jpg";

/**
 * Bell-Aura Bakes — Modern Interactive Single-Page React App
 */

const WHATSAPP_NUMBER = "919871085218";
const WHATSAPP_MSG = "Hi Bell-Aura Bakes! I'd like to place a custom cake order.";
const INSTAGRAM_HANDLE = "bellaura_bakes";
const MAPS_LINK = "https://share.google/d2DFl2SsyNV5iNKXg";
const GOOGLE_SEARCH = "https://www.google.com/search?q=Bell-Aura+Bakes";

const GALLERY = [
  {
    id: 1,
    file: img6,
    title: "Two-Tier Floral Birthday Cake",
    tag: "Custom Cakes",
    desc: "Elegant 2-tier vanilla & strawberry sponge decorated with handcrafted fresh cream flowers.",
    tall: true,
  },
  {
    id: 2,
    file: img4,
    title: "Birthday Cake & Cupcake Combo",
    tag: "Gifting Boxes",
    desc: "Matching mini birthday cake paired with 6 gourmet decorated cupcakes.",
  },
  {
    id: 3,
    file: img3,
    title: "Dark Chocolate Rose Cake",
    tag: "Custom Cakes",
    desc: "Rich Belgian dark chocolate ganache cake topped with edible chocolate roses.",
    tall: true,
  },
  {
    id: 4,
    file: img1,
    title: "Assorted Mini Cupcakes",
    tag: "Cupcakes",
    desc: "Box of 12 bite-sized cupcakes featuring red velvet, chocolate fudge, and salted caramel.",
  },
  {
    id: 5,
    file: img2,
    title: "Chocolate Layer Cake",
    tag: "Custom Cakes",
    desc: "Moist chocolate layers stuffed with dark chocolate mousse and chocolate shavings.",
  },
  {
    id: 6,
    file: img5,
    title: "Pink Princess Cupcake Box",
    tag: "Cupcakes",
    desc: "6 pieces of fluffy vanilla cupcakes frosted with strawberry buttercream.",
  },
  {
    id: 7,
    file: img7,
    title: "Vanilla Celebration Sheet Cake",
    tag: "Custom Cakes",
    desc: "Classic vanilla sheet cake with whipped cream frosting, perfect for corporate events.",
  },
];

const FLAVOURS = [
  "Belgian Dark Chocolate Fudge",
  "Red Velvet Cream Cheese",
  "Classic Vanilla Berry",
  "Nutella Rocher Crunch",
  "Biscoff Salted Caramel",
  "Fresh Mango & Cream (Seasonal)",
];

const FAQS = [
  {
    q: "Do you offer 100% Eggless cakes?",
    a: "Yes! All our custom cakes, cupcakes, and bakes can be prepared 100% eggless without compromising on soft texture or taste.",
  },
  {
    q: "How far in advance should I order custom cakes?",
    a: "For custom birthday or wedding designs, we recommend ordering 24 to 48 hours in advance. Same-day delivery is available for select signature cakes!",
  },
  {
    q: "Do you deliver to my location in New Delhi?",
    a: "We deliver across Uttam Nagar, Janakpuri, Dwarka, and surrounding West Delhi areas via direct temperature-controlled transport.",
  },
  {
    q: "Can I send a reference photo from Pinterest or Instagram?",
    a: "Absolutely! Simply click 'Order on WhatsApp' and share your reference image, preferred flavor, and date.",
  },
];

function Icon({ name, size = 24, ...props }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
  };
  switch (name) {
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M20 14.2A8.3 8.3 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2Z" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2.8l2.7 5.8 6.3.6-4.7 4.3 1.3 6.3L12 16.8 6.4 19.8l1.3-6.3-4.7-4.3 6.3-.6L12 2.8Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 22s7-6.4 7-12.6A7 7 0 0 0 5 9.4C5 15.6 12 22 12 22Z" />
          <circle cx="12" cy="9.4" r="2.4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.6" />
          <path d="M12 7.4V12l3.2 2" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6.6 3.8h3l1.4 4.4-2.2 1.6a12 12 0 0 0 5.4 5.4l1.6-2.2 4.4 1.4v3a1.6 1.6 0 0 1-1.7 1.6A16.4 16.4 0 0 1 4.9 5.5a1.6 1.6 0 0 1 1.7-1.7Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} strokeWidth={1.5}>
          <path d="M7 18.6 4.2 20l1.4-3.5a8.4 8.4 0 1 1 3 2.6L7 18.6Z" />
          <path d="M9 9.6c.2 2.6 2.6 5 5.2 5.2.9.1 1-.5.9-1l-.4-1.1c-.1-.4-.6-.6-1-.4l-.7.3a5.3 5.3 0 0 1-2.6-2.6l.3-.7c.2-.4 0-.9-.4-1L9.2 8c-.5-.1-1.1 0-1 .9Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeImg, setActiveImg] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Custom Builder State
  const [builderOccasion, setBuilderOccasion] = useState("Birthday");
  const [builderWeight, setBuilderWeight] = useState("1.0 kg");
  const [builderFlavor, setBuilderFlavor] = useState(FLAVOURS[0]);
  const [isEggless, setIsEggless] = useState(true);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  // Filter Gallery Items
  const filteredGallery = filter === "All" ? GALLERY : GALLERY.filter((g) => g.tag === filter);

  // Generate Custom WhatsApp Order Text
  const getCustomOrderLink = () => {
    const text = `Hi Bell-Aura Bakes! 👋\nI would like to place an order:\n\n🎂 *Occasion:* ${builderOccasion}\n🍰 *Flavour:* ${builderFlavor}\n⚖️ *Weight:* ${builderWeight}\n🌱 *Eggless:* ${isEggless ? "Yes (100% Eggless)" : "No (With Egg)"}\n\nPlease share price details and delivery availability!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getSpecificCakeLink = (title) => {
    const text = `Hi Bell-Aura Bakes! 👋\nI loved this design from your website gallery: *${title}*.\nCan you share availability & pricing for this?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const waDefaultLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  const igLink = `https://instagram.com/${INSTAGRAM_HANDLE}`;

  return (
    <div className={`ba-root ${isDark ? "dark" : "light"} ${loaded ? "loaded" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .ba-root {
          --bg: #FCF8F4;
          --bg-soft: #F5EAE0;
          --surface: #FFFFFF;
          --surface-glass: rgba(255, 255, 255, 0.85);
          --text: #321F17;
          --text-muted: #7E6555;
          --accent: #B82851;
          --accent-hover: #961D3F;
          --accent-soft: #FDE8ED;
          --gold: #C08A27;
          --gold-soft: #FAF2E3;
          --border: #E8D8CA;
          --shadow-sm: 0 4px 14px rgba(50, 31, 23, 0.06);
          --shadow-lg: 0 20px 40px -15px rgba(50, 31, 23, 0.18);
          --radius-card: 22px;
          color-scheme: light;
        }

        .ba-root.dark {
          --bg: #18100C;
          --bg-soft: #231813;
          --surface: #271C17;
          --surface-glass: rgba(39, 28, 23, 0.85);
          --text: #F8EFEA;
          --text-muted: #BD9F8D;
          --accent: #FF658B;
          --accent-hover: #FF4070;
          --accent-soft: #421A23;
          --gold: #E5B252;
          --gold-soft: #382C17;
          --border: #423028;
          --shadow-sm: 0 4px 14px rgba(0, 0, 0, 0.3);
          --shadow-lg: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
          color-scheme: dark;
        }

        .ba-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          width: 100%;
          transition: background 0.4s ease, color 0.4s ease;
          opacity: 0;
          scroll-behavior: smooth;
        }
        .ba-root.loaded { opacity: 1; transition: opacity 0.5s ease; }

        .ba-root * { box-sizing: border-box; }
        .ba-display { font-family: 'Fraunces', serif; }

        .ba-wrap { max-width: 1140px; margin: 0 auto; padding: 0 24px; }

        /* Floating Header */
        .ba-header-sticky {
          position: sticky; top: 0; z-index: 100;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .ba-header-sticky.scrolled {
          background: var(--surface-glass);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        }

        .ba-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 0;
        }
        .ba-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit; }
        .ba-brand-mark {
          width: 48px; height: 48px; border-radius: 50%;
          object-fit: cover; border: 2px solid var(--gold);
          box-shadow: 0 0 12px rgba(192, 138, 39, 0.25);
          flex-shrink: 0;
        }
        .ba-brand-name { font-size: 14px; letter-spacing: 0.01em; }
        .ba-brand-name b { display:block; font-family: 'Fraunces', serif; font-size: 20px; font-weight: 700; line-height: 1.1; }
        .ba-brand-name span { color: var(--text-muted); font-size: 12px; font-weight: 500; }

        .ba-nav-links { display: flex; align-items: center; gap: 24px; }
        .ba-nav-links a {
          color: var(--text); text-decoration: none; font-size: 14.5px; font-weight: 600;
          transition: color 0.2s;
        }
        .ba-nav-links a:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .ba-nav-links { display: none; }
        }

        .ba-theme-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid var(--border); background: var(--surface);
          color: var(--text); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.25s ease;
        }
        .ba-theme-btn:hover { transform: rotate(18deg) scale(1.05); color: var(--accent); }

        /* Hero */
        .ba-hero { padding: 48px 0 64px; position: relative; }
        .ba-hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
        .ba-hero-media { position: relative; }
        
        .ba-hero-img-wrap {
          position: relative; border-radius: 32px; overflow: hidden;
          box-shadow: var(--shadow-lg); border: 1px solid var(--border);
          transform: perspective(1000px) rotateY(-4deg);
          transition: transform 0.5s ease;
        }
        .ba-hero-img-wrap:hover { transform: perspective(1000px) rotateY(0deg) scale(1.01); }

        .ba-hero-media img {
          width: 100%; aspect-ratio: 4/4.8; object-fit: cover; display: block;
        }

        .ba-hero-badge {
          position: absolute; bottom: 20px; left: -16px; z-index: 2;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 20px; padding: 12px 20px; box-shadow: var(--shadow-lg);
          display: flex; align-items: center; gap: 10px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .ba-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border-radius: 999px;
          background: var(--accent-soft); color: var(--accent);
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
          margin-bottom: 20px;
        }

        .ba-h1 {
          font-family: 'Fraunces', serif; font-weight: 700;
          font-size: clamp(42px, 6vw, 64px); line-height: 1.05;
          margin: 0 0 20px; letter-spacing: -0.02em;
        }
        .ba-h1 em { font-style: italic; font-weight: 500; color: var(--accent); }

        .ba-lede {
          font-size: 17.5px; line-height: 1.65; color: var(--text-muted);
          max-width: 500px; margin: 0 0 32px;
        }

        .ba-meta-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
        .ba-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 16px; border-radius: 999px;
          border: 1px solid var(--border); background: var(--surface);
          font-size: 13px; font-weight: 600; color: var(--text);
          box-shadow: var(--shadow-sm);
        }
        .ba-chip.rating { color: var(--gold); border-color: color-mix(in srgb, var(--gold) 40%, var(--border)); }
        .ba-chip.open { color: #2E7D32; background: #E8F5E9; border-color: #A5D6A7; }
        .ba-root.dark .ba-chip.open { color: #81C784; background: #1B381E; border-color: #2E7D32; }

        .ba-cta-row { display: flex; flex-wrap: wrap; gap: 14px; }
        
        /* Buttons */
        .ba-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 15px 26px; border-radius: 16px; font-weight: 700; font-size: 15px;
          text-decoration: none; cursor: pointer; border: 1px solid transparent;
          transition: all 0.25s ease;
        }
        .ba-btn:hover { transform: translateY(-3px); }
        .ba-btn.primary {
          background: var(--accent); color: #fff;
          box-shadow: 0 8px 20px rgba(184, 40, 81, 0.3);
        }
        .ba-btn.primary:hover { background: var(--accent-hover); box-shadow: 0 12px 24px rgba(184, 40, 81, 0.4); }
        .ba-btn.ghost { background: var(--surface); color: var(--text); border-color: var(--border); box-shadow: var(--shadow-sm); }
        .ba-btn.ghost:hover { border-color: var(--accent); color: var(--accent); }

        /* Custom Order Builder Section */
        .ba-builder-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-card); padding: 36px;
          box-shadow: var(--shadow-lg); margin-top: 20px;
        }
        .ba-builder-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 24px 0; }
        .ba-builder-field { display: flex; flex-direction: column; gap: 8px; }
        .ba-builder-field label { font-size: 13px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; }
        .ba-select, .ba-input {
          padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border);
          background: var(--bg); color: var(--text); font-family: inherit; font-size: 14.5px;
          font-weight: 600; outline: none; transition: border-color 0.2s;
        }
        .ba-select:focus, .ba-input:focus { border-color: var(--accent); }

        .ba-toggle-eggless {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px; border-radius: 14px; background: var(--gold-soft);
          border: 1px solid color-mix(in srgb, var(--gold) 30%, transparent);
          margin-bottom: 24px; cursor: pointer;
        }

        /* Section Shell */
        .ba-section { padding: 80px 0; }
        .ba-section.soft { background: var(--bg-soft); }
        .ba-section-header { text-align: center; max-width: 600px; margin: 0 auto 48px; }
        .ba-label {
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent); font-weight: 800; margin-bottom: 10px; display: block;
        }
        .ba-h2 {
          font-family: 'Fraunces', serif; font-weight: 700; font-size: clamp(28px, 4vw, 42px);
          margin: 0; letter-spacing: -0.01em;
        }

        /* Gallery & Filter Tabs */
        .ba-filter-tabs { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 36px; }
        .ba-tab-btn {
          padding: 10px 20px; border-radius: 999px; border: 1px solid var(--border);
          background: var(--surface); color: var(--text); font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.2s ease;
        }
        .ba-tab-btn.active, .ba-tab-btn:hover { background: var(--accent); color: #fff; border-color: var(--accent); }

        .ba-gallery {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px; grid-auto-flow: dense;
        }
        .ba-gallery-item {
          position: relative; border-radius: 20px; overflow: hidden;
          border: 1px solid var(--border); background: var(--surface);
          cursor: pointer; height: 280px; box-shadow: var(--shadow-sm);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .ba-gallery-item.tall { height: 420px; }
        .ba-gallery-item:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
        .ba-gallery-item img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.5s ease;
        }
        .ba-gallery-item:hover img { transform: scale(1.08); }
        
        .ba-gallery-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(20,10,6,0.85) 0%, rgba(20,10,6,0.2) 60%, transparent 100%);
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 20px; color: #fff; opacity: 0.9; transition: opacity 0.3s;
        }
        .ba-gallery-overlay .tag { font-size: 11px; text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em; color: var(--gold); }
        .ba-gallery-overlay h4 { font-family: 'Fraunces', serif; font-size: 18px; margin: 4px 0 0; font-weight: 600; }

        /* Lightbox Modal */
        .ba-modal-backdrop {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(0,0,0,0.75); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center; padding: 24px;
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .ba-modal {
          background: var(--surface); border-radius: 24px; max-width: 800px; width: 100%;
          overflow: hidden; border: 1px solid var(--border); box-shadow: var(--shadow-lg);
          display: grid; grid-template-columns: 1fr 1fr; position: relative;
        }
        .ba-modal-img { width: 100%; height: 100%; min-height: 320px; object-fit: cover; display: block; }
        .ba-modal-body { padding: 32px; display: flex; flex-direction: column; justify-content: center; }
        .ba-modal-close {
          position: absolute; top: 16px; right: 16px; width: 36px; height: 36px;
          border-radius: 50%; background: var(--surface); border: 1px solid var(--border);
          color: var(--text); display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10;
        }

        /* FAQ Accordion */
        .ba-faq-grid { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; }
        .ba-faq-item {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; transition: border-color 0.2s;
        }
        .ba-faq-item.open { border-color: var(--accent); }
        .ba-faq-q {
          padding: 20px 24px; display: flex; align-items: center; justify-content: space-between;
          font-weight: 700; font-size: 16px; cursor: pointer; user-select: none;
        }
        .ba-faq-a { padding: 0 24px 20px; color: var(--text-muted); line-height: 1.65; font-size: 15px; }

        /* Mobile FAB WhatsApp */
        .ba-fab-wa {
          position: fixed; bottom: 24px; right: 24px; z-index: 90;
          width: 58px; height: 58px; border-radius: 50%;
          background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4); text-decoration: none;
          transition: transform 0.25s ease; animation: pulseGlow 3s infinite;
        }
        .ba-fab-wa:hover { transform: scale(1.1); }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
        }

        /* Footer */
        .ba-footer {
          padding: 40px 0; border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; font-size: 14px; color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .ba-hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .ba-hero-media { order: -1; max-width: 380px; margin: 0 auto; }
          .ba-modal { grid-template-columns: 1fr; max-height: 90vh; overflow-y: auto; }
          .ba-modal-img { height: 240px; }
        }
      `}</style>

      {/* Floating Header */}
      <div className={`ba-header-sticky ${scrolled ? "scrolled" : ""}`}>
        <div className="ba-wrap">
          <header className="ba-header">
            <a href="#" className="ba-brand">
              <img className="ba-brand-mark" src={logo} alt="Bell-Aura Bakes Logo" />
              <div className="ba-brand-name">
                <b>Bell-Aura Bakes</b>
                <span>Bakery &amp; Cake Shop · Uttam Nagar</span>
              </div>
            </a>

            <nav className="ba-nav-links">
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
              <a href="#builder">Custom Order</a>
              <a href="#faq">FAQs</a>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                className="ba-theme-btn"
                aria-label="Toggle light/dark theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
              >
                <Icon name={isDark ? "sun" : "moon"} size={20} />
              </button>
              <a
                className="ba-btn primary"
                style={{ padding: "10px 18px", fontSize: "13.5px" }}
                href={waDefaultLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={16} /> Quick Order
              </a>
            </div>
          </header>
        </div>
      </div>

      {/* Hero Section */}
      <section className="ba-hero">
        <div className="ba-wrap">
          <div className="ba-hero-grid">
            <div>
              <span className="ba-eyebrow">
                <Icon name="sparkles" size={14} /> Freshly Baked Daily · Uttam Nagar
              </span>
              <h1 className="ba-h1">
                Handcrafted cakes for <em>your</em> finest moments.
              </h1>
              <p className="ba-lede">
                Delhi’s cozy bakehouse crafting artisanal custom cakes, cupcakes, and dessert boxes using premium chocolates and rich butter.
              </p>

              <div className="ba-meta-row">
                <a
                  href={GOOGLE_SEARCH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ba-chip rating"
                  style={{ textDecoration: "none" }}
                >
                  <Icon name="star" size={14} /> 4.9 Rating (60+ Google Reviews)
                </a>
                <span className="ba-chip open">
                  <Icon name="clock" size={14} /> Open Now · Closes 10 PM
                </span>
                <span className="ba-chip">🌱 100% Eggless Available</span>
              </div>

              <div className="ba-cta-row">
                <a className="ba-btn primary" href={waDefaultLink} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={18} /> Order on WhatsApp
                </a>
                <a className="ba-btn ghost" href="#builder">
                  Design Your Cake <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>

            <div className="ba-hero-media">
              <div className="ba-hero-img-wrap">
                <img src={hero} alt="Bell-Aura Bakes Signature Celebration Cake" />
              </div>
              <div className="ba-hero-badge">
                <span style={{ fontSize: "22px" }}>🎂</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "14px" }}>Made Fresh to Order</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>Same-day delivery available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Custom Order Builder */}
      <section id="builder" className="ba-section soft">
        <div className="ba-wrap">
          <div className="ba-section-header">
            <span className="ba-label">Instant Cake Estimator</span>
            <h2 className="ba-h2">Design &amp; Customise Your Order</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "10px" }}>
              Select your preferences below to generate a pre-filled WhatsApp message for instant booking!
            </p>
          </div>

          <div className="ba-builder-card">
            <div className="ba-builder-grid">
              <div className="ba-builder-field">
                <label>1. Occasion</label>
                <select className="ba-select" value={builderOccasion} onChange={(e) => setBuilderOccasion(e.target.value)}>
                  <option>Birthday Party</option>
                  <option>Anniversary</option>
                  <option>Baby Shower / Gender Reveal</option>
                  <option>Wedding / Engagement</option>
                  <option>Corporate Event / Festival</option>
                </select>
              </div>

              <div className="ba-builder-field">
                <label>2. Preferred Flavour</label>
                <select className="ba-select" value={builderFlavor} onChange={(e) => setBuilderFlavor(e.target.value)}>
                  {FLAVOURS.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </div>

              <div className="ba-builder-field">
                <label>3. Approx Weight / Size</label>
                <select className="ba-select" value={builderWeight} onChange={(e) => setBuilderWeight(e.target.value)}>
                  <option>0.5 kg (4-6 Servings)</option>
                  <option>1.0 kg (8-10 Servings)</option>
                  <option>1.5 kg (12-15 Servings)</option>
                  <option>2.0 kg+ Two Tier</option>
                </select>
              </div>
            </div>

            <div className="ba-toggle-eggless" onClick={() => setIsEggless(!isEggless)}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "4px", border: "2px solid #2E7D32", display: "flex", alignItems: "center", justifyCenter: "center" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2E7D32", margin: "auto" }} />
                </div>
                <div>
                  <strong style={{ fontSize: "14.5px" }}>Make it 100% Eggless</strong>
                  <div style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>We use pure vegetarian baking techniques</div>
                </div>
              </div>
              <Icon name={isEggless ? "check" : "chevron-down"} size={20} color="var(--accent)" />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyBetween: "space-between", flexWrap: "wrap", gap: "16px", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
              <div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", uppercase: "true" }}>Estimated Price Range</div>
                <div style={{ fontSize: "24px", fontFamily: "Fraunces, serif", fontWeight: 700, color: "var(--gold)" }}>
                  ₹450 – ₹1,800 <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-muted)" }}>(depending on design complexity)</span>
                </div>
              </div>

              <a className="ba-btn primary" href={getCustomOrderLink()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> Send Order Request on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="ba-section">
        <div className="ba-wrap">
          <div className="ba-section-header">
            <span className="ba-label">Our Fresh Creations</span>
            <h2 className="ba-h2">Explore Previous Designs</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>Click on any image to view details and order that specific design.</p>
          </div>

          <div className="ba-filter-tabs">
            {["All", "Custom Cakes", "Cupcakes", "Gifting Boxes"].map((cat) => (
              <button
                key={cat}
                className={`ba-tab-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="ba-gallery">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className={`ba-gallery-item ${item.tall ? "tall" : ""}`}
                onClick={() => setActiveImg(item)}
              >
                <img src={item.file} alt={item.title} loading="lazy" />
                <div className="ba-gallery-overlay">
                  <span className="tag">{item.tag}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImg && (
        <div className="ba-modal-backdrop" onClick={() => setActiveImg(null)}>
          <div className="ba-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ba-modal-close" onClick={() => setActiveImg(null)}>
              <Icon name="close" size={18} />
            </button>
            <img className="ba-modal-img" src={activeImg.file} alt={activeImg.title} />
            <div className="ba-modal-body">
              <span className="ba-label">{activeImg.tag}</span>
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "24px", margin: "4px 0 12px" }}>{activeImg.title}</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "24px" }}>{activeImg.desc}</p>
              
              <a
                className="ba-btn primary"
                href={getSpecificCakeLink(activeImg.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} /> Order This Design
              </a>
            </div>
          </div>
        </div>
      )}

      {/* About & Info Section */}
      <section id="about" className="ba-section soft">
        <div className="ba-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
            <div>
              <span className="ba-label">Bakery Story</span>
              <h2 className="ba-h2" style={{ marginBottom: "18px" }}>Baked with passion on Scoops Road</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: "15.5px" }}>
                At Bell-Aura Bakes, we believe every birthday, milestone, and sweet craving deserves a memorable dessert. Located at Bal Udhyan Road in Uttam Nagar, we bake small-batch cakes, cupcakes, and pastries tailored to your taste.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
                <span className="ba-chip">✨ Fresh Ingredients</span>
                <span className="ba-chip">🛵 Fast Local Delivery</span>
                <span className="ba-chip">🎨 Custom Sugar Art</span>
              </div>
            </div>

            <div style={{ background: "var(--surface)", padding: "32px", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}>
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "20px", marginBottom: "20px" }}>Visit Our Shop</h3>
              
              <div style={{ display: "flex", gap: "14px", marginBottom: "16px" }}>
                <Icon name="pin" size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ fontSize: "14px" }}>Address</strong>
                  <p style={{ margin: "2px 0 0", fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Scoops Road, E-10, Bal Udhyan Rd, Block C, Uttam Nagar, New Delhi, 110059
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                <Icon name="phone" size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ fontSize: "14px" }}>Phone / Direct WhatsApp</strong>
                  <p style={{ margin: "2px 0 0", fontSize: "13.5px", color: "var(--text-muted)" }}>098710 85218</p>
                </div>
              </div>

              <a
                className="ba-btn ghost"
                style={{ width: "100%", justifyContent: "center" }}
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions on Google Maps <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="ba-section">
        <div className="ba-wrap">
          <div className="ba-section-header">
            <span className="ba-label">Got Questions?</span>
            <h2 className="ba-h2">Frequently Asked Questions</h2>
          </div>

          <div className="ba-faq-grid">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`ba-faq-item ${isOpen ? "open" : ""}`}>
                  <div className="ba-faq-q" onClick={() => setOpenFaq(isOpen ? null : idx)}>
                    <span>{faq.q}</span>
                    <Icon name="chevron-down" size={18} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                  </div>
                  {isOpen && <div className="ba-faq-a">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="ba-wrap">
        <footer className="ba-footer">
          <div>
            © {new Date().getFullYear()} <strong>Bell-Aura Bakes</strong> · Scoops Road, Uttam Nagar, New Delhi
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href={waDefaultLink} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} aria-label="WhatsApp">
              <Icon name="whatsapp" size={20} />
            </a>
            <a href={igLink} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }} aria-label="Instagram">
              <Icon name="instagram" size={20} />
            </a>
          </div>
        </footer>
      </div>

      {/* Mobile Sticky WhatsApp FAB */}
      <a
        href={waDefaultLink}
        className="ba-fab-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </div>
  );
}