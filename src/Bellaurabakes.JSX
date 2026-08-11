import React, { useState, useEffect } from "react";
import logo from "./assets/logo.jpg";
import hero from "./assets/hero-cake.jpg";
/**
 * Bell-Aura Bakes — single-file React site
 * Light/dark theme toggle, WhatsApp ordering, Instagram link.
 */

const WHATSAPP_NUMBER = "919871085218";
const WHATSAPP_MSG = "Hi Bell-Aura Bakes! I'd like to place an order.";
const INSTAGRAM_HANDLE = "bellaura_bakes";
const MAPS_LINK = "https://share.google/d2DFl2SsyNV5iNKXg";


const ASSETS = "assets";

const GALLERY = [
  {
    file: "two-tier-pink-floral-birthday-cake_jpg.jpg",
    title: "Two-Tier Floral Birthday Cake",
    tag: "Custom Cakes",
    tall: true,
  },
  {
    file: "pink-birthday-cake-cupcakes-combo-box_jpg.jpg",
    title: "Birthday Cake & Cupcake Combo",
    tag: "Gifting Boxes",
  },
  {
    file: "dark-chocolate-rose-cake_jpg.jpg",
    title: "Dark Chocolate Rose Cake",
    tag: "Custom Cakes",
    tall: true,
  },
  {
    file: "assorted-mini-cupcakes-tray.jpg",
    title: "Assorted Mini Cupcakes",
    tag: "Cupcakes",
  },
  {
    file: "chocolate-layer-cake-slice_jpg.jpg",
    title: "Chocolate Layer Cake",
    tag: "Custom Cakes",
  },
  {
    file: "pink-cupcakes-box-pack.jpg",
    title: "Pink Cupcake Box",
    tag: "Cupcakes",
  },
  {
    file: "vanilla-sheet-cake-slice.jpg",
    title: "Vanilla Sheet Cake",
    tag: "Custom Cakes",
  },
];

function Icon({ name, size = 24, ...props }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
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
        <svg {...common} strokeWidth={1.4}>
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
    case "cake":
      return (
        <svg {...common}>
          <path d="M4 21v-6.6c0-1 .8-1.8 1.8-1.8h12.4c1 0 1.8.8 1.8 1.8V21" />
          <path d="M4 21h16M4 17.4h16" />
          <path d="M8 12.6V9.4M12 12.6V9.4M16 12.6V9.4" />
          <path d="M8 9.4c0-1 .7-1.4.7-2.2C8.7 6.4 8 6 8 6M12 9.4c0-1 .7-1.4.7-2.2 0-.8-.7-1.2-.7-1.2M16 9.4c0-1 .7-1.4.7-2.2 0-.8-.7-1.2-.7-1.2" />
        </svg>
      );
    case "cupcake":
      return (
        <svg {...common}>
          <path d="M7 11.2h10l-1.2 8a1.6 1.6 0 0 1-1.6 1.4H9.8a1.6 1.6 0 0 1-1.6-1.4l-1.2-8Z" />
          <path d="M6.2 11.2a5.8 5.8 0 0 1 11.6 0" />
          <path d="M12 5.4V3" />
        </svg>
      );
    case "cookie":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.4" />
          <circle cx="9.2" cy="10.2" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="14.4" cy="9.2" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="13.4" cy="14.6" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="9.6" cy="15" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <rect x="4" y="9.6" width="16" height="10.4" rx="1.2" />
          <path d="M4 13.2h16" />
          <path d="M12 9.6V20" />
          <path d="M12 9.6c-1.4 0-3-1-3-2.6a2 2 0 0 1 3.6-1.2c.4.5.6 1.6.6 2.6M12 9.6c1.4 0 3-1 3-2.6a2 2 0 0 0-3.6-1.2c-.4.5-.6 1.6-.6 2.6" />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <path d="M6 8.4h12l-.9 11a1.6 1.6 0 0 1-1.6 1.5H8.5a1.6 1.6 0 0 1-1.6-1.5L6 8.4Z" />
          <path d="M9 8.4V7a3 3 0 0 1 6 0v1.4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const isDark = theme === "dark";
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MSG
  )}`;
  const igLink = `https://instagram.com/${INSTAGRAM_HANDLE}`;

  return (
    <div className={`ba-root ${isDark ? "dark" : "light"} ${loaded ? "loaded" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap');

        .ba-root {
          --bg: #FBF3EC;
          --bg-soft: #F3E2D3;
          --surface: #FFFFFF;
          --text: #3A2317;
          --text-muted: #8A6C57;
          --accent: #A8264A;
          --accent-soft: #F3D9DF;
          --gold: #B98A2E;
          --border: #E9D5C2;
          --shadow: 0 18px 40px -20px rgba(58,35,23,0.35);
          color-scheme: light;
        }
        .ba-root.dark {
          --bg: #221410;
          --bg-soft: #2C1B15;
          --surface: #2E1C16;
          --text: #F5E7D9;
          --text-muted: #C7A78D;
          --accent: #F2879F;
          --accent-soft: #4A2530;
          --gold: #E3B863;
          --border: #4A3327;
          --shadow: 0 18px 40px -20px rgba(0,0,0,0.6);
          color-scheme: dark;
        }

        .ba-root {
          font-family: 'Manrope', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100%;
          width: 100%;
          transition: background 0.5s ease, color 0.5s ease;
          opacity: 0;
        }
        .ba-root.loaded { opacity: 1; transition: opacity 0.6s ease, background 0.5s ease, color 0.5s ease; }

        .ba-root * { box-sizing: border-box; }
        .ba-display { font-family: 'Fraunces', serif; }

        .ba-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

        /* Header */
        .ba-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 0;
        }
        .ba-brand { display: flex; align-items: center; gap: 10px; }
        .ba-brand-mark {
          width: 44px; height: 44px; border-radius: 50%;
          object-fit: cover; border: 1px solid var(--border);
          background: var(--surface);
          flex-shrink: 0;
        }
        .ba-brand-name { font-size: 15px; letter-spacing: 0.02em; }
        .ba-brand-name b { display:block; font-family: 'Fraunces', serif; font-size: 19px; font-weight: 600; }
        .ba-brand-name span { color: var(--text-muted); font-size: 12px; }

        .ba-theme-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid var(--border); background: var(--surface);
          color: var(--text); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: transform 0.25s ease, background 0.3s ease;
        }
        .ba-theme-btn:hover { transform: rotate(15deg); }
        .ba-theme-btn:focus-visible, .ba-btn:focus-visible, .ba-chip:focus-visible, a:focus-visible {
          outline: 2px solid var(--accent); outline-offset: 3px;
        }

        /* Hero */
        .ba-hero { padding: 40px 0 56px; position: relative; }
        .ba-hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 40px; align-items: center; }
        .ba-hero-media { position: relative; }
        .ba-hero-media img {
          width: 100%; aspect-ratio: 4/5; object-fit: cover;
          border-radius: 28px; box-shadow: var(--shadow);
          position: relative; z-index: 1; border: 1px solid var(--border);
        }
        .ba-hero-blob {
          position: absolute; inset: 18px -18px -18px 18px;
          background: linear-gradient(150deg, var(--accent), var(--gold));
          border-radius: 28px; opacity: 0.9; z-index: 0;
        }
        .ba-hero-badge {
          position: absolute; bottom: -16px; left: -16px; z-index: 2;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 999px; padding: 10px 16px; box-shadow: var(--shadow);
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700; color: var(--gold);
        }
        @media (max-width: 820px) {
          .ba-hero-grid { grid-template-columns: 1fr; }
          .ba-hero-media { order: -1; max-width: 320px; margin: 0 auto 20px; }
        }
        .ba-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent); font-weight: 700; margin-bottom: 18px;
        }
        .ba-eyebrow::before { content: ""; width: 22px; height: 1.5px; background: var(--accent); display:inline-block; }

        .ba-h1 {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(40px, 7vw, 68px);
          line-height: 1.02;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }
        .ba-h1 em { font-style: italic; font-weight: 500; color: var(--accent); }

        .ba-lede {
          font-size: 17px; line-height: 1.65; color: var(--text-muted);
          max-width: 480px; margin: 0 0 28px;
        }

        .ba-meta-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px; }
        .ba-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 14px; border-radius: 999px;
          border: 1px solid var(--border); background: var(--surface);
          font-size: 13px; font-weight: 600; color: var(--text);
        }
        .ba-chip.rating { color: var(--gold); border-color: color-mix(in srgb, var(--gold) 40%, var(--border)); }
        .ba-chip.open { color: #3E8E5A; }
        .ba-root.dark .ba-chip.open { color: #7FCE9A; }

        .ba-cta-row { display: flex; flex-wrap: wrap; gap: 14px; }
        .ba-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 22px; border-radius: 14px; font-weight: 700; font-size: 14.5px;
          text-decoration: none; cursor: pointer; border: 1px solid transparent;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .ba-btn:hover { transform: translateY(-2px); }
        .ba-btn.primary { background: var(--accent); color: #fff; box-shadow: var(--shadow); }
        .ba-btn.ghost { background: transparent; color: var(--text); border-color: var(--border); }
        .ba-btn.ghost:hover { background: var(--surface); }

        /* Signature divider: piped icing scallop */
        .ba-scallop { display:block; width:100%; height:26px; color: var(--bg-soft); }

        /* Section shell */
        .ba-section { background: var(--bg-soft); padding: 64px 0; transition: background 0.5s ease; }
        .ba-section.plain { background: var(--bg); }
        .ba-label {
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent); font-weight: 700; margin-bottom: 10px;
        }
        .ba-h2 {
          font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(26px, 4vw, 36px);
          margin: 0 0 14px; letter-spacing: -0.01em;
        }

        /* About grid */
        .ba-about { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: start; }
        .ba-about p { color: var(--text-muted); line-height: 1.75; font-size: 15.5px; margin: 0 0 16px; }
        .ba-tag-row { display:flex; gap: 10px; flex-wrap: wrap; margin-top: 6px; }
        .ba-tag {
          font-size: 12.5px; font-weight: 700; padding: 6px 12px; border-radius: 8px;
          background: var(--accent-soft); color: var(--accent);
        }

        .ba-info-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 20px;
          padding: 28px; box-shadow: var(--shadow);
        }
        .ba-info-row { display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--border); }
        .ba-info-row:last-child { border-bottom: none; }
        .ba-info-row .ico { color: var(--accent); flex-shrink: 0; margin-top: 2px; }
        .ba-info-row h4 { margin: 0 0 3px; font-size: 14px; }
        .ba-info-row p { margin: 0; font-size: 13.5px; color: var(--text-muted); line-height: 1.5; }

        /* Gallery */
        .ba-gallery {
          display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 160px;
          gap: 16px;
        }
        .ba-gallery-item {
          position: relative; border-radius: 16px; overflow: hidden;
          border: 1px solid var(--border); background: var(--surface);
          grid-row: span 1;
        }
        .ba-gallery-item.tall { grid-row: span 2; }
        .ba-gallery-item img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.5s ease;
        }
        .ba-gallery-item:hover img { transform: scale(1.06); }
        .ba-gallery-caption {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 14px 14px 12px;
          background: linear-gradient(0deg, rgba(20,10,6,0.82), rgba(20,10,6,0));
          color: #fff;
        }
        .ba-gallery-caption .tag {
          font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.1em;
          font-weight: 700; opacity: 0.85;
        }
        .ba-gallery-caption h4 {
          margin: 2px 0 0; font-size: 14px; font-family: 'Fraunces', serif; font-weight: 600;
        }
        @media (max-width: 820px) {
          .ba-gallery { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 190px; }
        }
        @media (max-width: 480px) {
          .ba-gallery { grid-template-columns: 1fr; grid-auto-rows: 220px; }
          .ba-gallery-item.tall { grid-row: span 1; }
        }

        /* Rating panel */
        .ba-rating-panel {
          display: flex; align-items: center; gap: 26px; background: var(--surface);
          border: 1px solid var(--border); border-radius: 20px; padding: 28px 30px;
          box-shadow: var(--shadow); margin-top: 40px; flex-wrap: wrap;
        }
        .ba-rating-num { font-family: 'Fraunces', serif; font-size: 52px; font-weight: 600; line-height: 1; }
        .ba-stars { display:flex; gap: 3px; color: var(--gold); margin: 8px 0 6px; }
        .ba-rating-panel .divider { width: 1px; align-self: stretch; background: var(--border); }
        .ba-rating-panel .txt { color: var(--text-muted); font-size: 14px; max-width: 340px; line-height: 1.6; }

        /* Visit / contact */
        .ba-visit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
        .ba-visit-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 20px;
          padding: 30px; box-shadow: var(--shadow);
        }
        .ba-visit-card h3 { font-family: 'Fraunces', serif; font-size: 20px; margin: 0 0 8px; }
        .ba-visit-card p { color: var(--text-muted); font-size: 14px; line-height: 1.6; margin: 0 0 20px; }
        .ba-visit-card .ba-btn { width: 100%; justify-content: center; }
        .ba-visit-icon {
          width: 44px; height: 44px; border-radius: 12px; display:flex; align-items:center; justify-content:center;
          margin-bottom: 16px; color: #fff;
        }
        .ba-visit-icon.wa { background: #3E8E5A; }
        .ba-visit-icon.ig { background: linear-gradient(135deg, var(--accent), var(--gold)); }

        /* Footer */
        .ba-footer {
          padding: 34px 0; display:flex; align-items:center; justify-content: space-between;
          flex-wrap: wrap; gap: 14px; border-top: 1px solid var(--border);
        }
        .ba-footer p { margin:0; font-size: 13px; color: var(--text-muted); }
        .ba-footer .socials { display:flex; gap: 12px; }
        .ba-footer .socials a {
          width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--border);
          display:flex; align-items:center; justify-content:center; color: var(--text);
          text-decoration:none; transition: background 0.2s ease, color 0.2s ease;
        }
        .ba-footer .socials a:hover { background: var(--accent); color: #fff; border-color: var(--accent); }

        @media (max-width: 820px) {
          .ba-about { grid-template-columns: 1fr; }
          .ba-cat-grid { grid-template-columns: repeat(2, 1fr); }
          .ba-visit-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ba-cat-grid { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ba-root, .ba-btn, .ba-cat-card, .ba-theme-btn { transition: none !important; }
        }
      `}</style>

      <div className="ba-wrap">
        <header className="ba-header">
          <div className="ba-brand">
            <img className="ba-brand-mark" src={logo} alt="Bell-Aura Bakes logo" />
            <div className="ba-brand-name">
              <b>Bell-Aura Bakes</b>
              <span>Bakery &amp; Cake Shop · Uttam Nagar</span>
            </div>
          </div>
          <button
            className="ba-theme-btn"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            <Icon name={isDark ? "sun" : "moon"} size={19} />
          </button>
        </header>

        <section className="ba-hero">
          <div className="ba-hero-grid">
            <div>
              <span className="ba-eyebrow">Freshly baked, Uttam Nagar</span>
              <h1 className="ba-h1">
                Cakes made for <em>your</em> moment.
              </h1>
              <p className="ba-lede">
                A neighbourhood bakery on Scoops Road turning out custom
                cakes, cupcakes and pastries — order ahead for takeaway or
                same-day delivery.
              </p>

              <div className="ba-meta-row">
                <span className="ba-chip rating">
                  <Icon name="star" size={14} /> 4.9 · 60 reviews
                </span>
                <span className="ba-chip">₹200–800 per person</span>
                <span className="ba-chip open">
                  <Icon name="clock" size={14} /> Open · Closes 10&nbsp;pm
                </span>
              </div>

              <div className="ba-cta-row">
                <a
                  className="ba-btn primary"
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={18} /> Order on WhatsApp
                </a>
                <a
                  className="ba-btn ghost"
                  href={igLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="instagram" size={18} /> @{INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>

            <div className="ba-hero-media">
              <div className="ba-hero-blob" />
              <img src={hero} alt="Bell-Aura Bakes signature cake" />
              <div className="ba-hero-badge">
                <Icon name="star" size={13} /> 4.9 rated
              </div>
            </div>
          </div>
        </section>

        <svg className="ba-scallop" viewBox="0 0 400 20" preserveAspectRatio="none" fill="currentColor">
          <path d="M0 20V6c8-8 16-8 24 0s16 8 24 0 16-8 24 0 16 8 24 0 16-8 24 0 16 8 24 0 16-8 24 0 16 8 24 0 16-8 24 0 16 8 24 0 16-8 24 0 16 8 24 0 16-8 24 0v14Z" />
        </svg>
      </div>

      <section className="ba-section plain">
        <div className="ba-wrap">
          <div className="ba-about">
            <div>
              <span className="ba-label">About</span>
              <h2 className="ba-h2">Small-batch baking, made to order</h2>
              <p>
                Bell-Aura Bakes is a local bakery and cake shop on Scoops
                Road, Uttam Nagar — known for custom celebration cakes,
                cupcakes, cookies and gifting boxes baked fresh to order.
              </p>
              <p>
                Every order is prepared in small batches, so it's best to
                message ahead on WhatsApp with your date, flavour and size —
                especially for custom cake designs.
              </p>
              <div className="ba-tag-row">
                <span className="ba-tag">Takeaway</span>
                <span className="ba-tag">Delivery</span>
                <span className="ba-tag">Custom Orders</span>
              </div>
            </div>

            <div className="ba-info-card">
              <div className="ba-info-row">
                <span className="ico"><Icon name="pin" size={20} /></span>
                <div>
                  <h4>Address</h4>
                  <p>
                    Scoops Road, E-10, Bal Udhyan Rd, Block C, Uttam Nagar,
                    New Delhi, Delhi, 110059
                  </p>
                </div>
              </div>
              <div className="ba-info-row">
                <span className="ico"><Icon name="clock" size={20} /></span>
                <div>
                  <h4>Hours</h4>
                  <p>Open today · Closes 10 pm</p>
                </div>
              </div>
              <div className="ba-info-row">
                <span className="ico"><Icon name="phone" size={20} /></span>
                <div>
                  <h4>Phone</h4>
                  <p>098710 85218</p>
                </div>
              </div>
              <div className="ba-info-row">
                <span className="ico"><Icon name="bag" size={20} /></span>
                <div>
                  <h4>Service</h4>
                  <p>Takeaway &amp; delivery available</p>
                </div>
              </div>
              <a
                className="ba-btn ghost"
                style={{ marginTop: 18, width: "100%", justifyContent: "center" }}
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ba-section">
        <div className="ba-wrap">
          <span className="ba-label">What we bake</span>
          <h2 className="ba-h2">Made fresh, ordered ahead</h2>
          <div className="ba-gallery">
            {GALLERY.map((g) => (
              <div
                className={`ba-gallery-item ${g.tall ? "tall" : ""}`}
                key={g.file}
              >
                <img src={`${ASSETS}/${g.file}`} alt={g.title} loading="lazy" />
                <div className="ba-gallery-caption">
                  <div className="tag">{g.tag}</div>
                  <h4>{g.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="ba-rating-panel">
            <div>
              <div className="ba-rating-num">4.9</div>
              <div className="ba-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                from 60 reviews
              </div>
            </div>
            <div className="divider" />
            <p className="txt">
              Rated 4.9 out of 5 across 60 reviews for its cakes and
              customer service — reported by 12 people this month.
            </p>
          </div>
        </div>
      </section>

      <section className="ba-section plain">
        <div className="ba-wrap">
          <span className="ba-label">Visit or order in</span>
          <h2 className="ba-h2">Get in touch</h2>
          <div className="ba-visit-grid">
            <div className="ba-visit-card">
              <div className="ba-visit-icon wa">
                <Icon name="whatsapp" size={20} />
              </div>
              <h3>Order on WhatsApp</h3>
              <p>
                Send your cake date, size and flavour to 098710 85218 and
                we'll confirm availability.
              </p>
              <a
                className="ba-btn primary"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={17} /> Message 098710 85218
              </a>
            </div>
            <div className="ba-visit-card">
              <div className="ba-visit-icon ig">
                <Icon name="instagram" size={20} />
              </div>
              <h3>Follow along</h3>
              <p>
                See fresh bakes, cake designs and behind-the-scenes on
                Instagram @{INSTAGRAM_HANDLE}.
              </p>
              <a
                className="ba-btn ghost"
                href={igLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={17} /> @{INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="ba-wrap">
        <footer className="ba-footer">
          <p>© {new Date().getFullYear()} Bell-Aura Bakes · Scoops Road, Uttam Nagar, New Delhi</p>
          <div className="socials">
            <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" size={17} />
            </a>
            <a href={igLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={17} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}