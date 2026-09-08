import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  CloudRain,
  CloudSun,
  Droplets,
  ExternalLink,
  FlaskConical,
  ImageUp,
  Leaf,
  Lightbulb,
  Menu,
  Mic,
  Navigation,
  Phone,
  RotateCcw,
  ScanLine,
  Search,
  ShieldCheck,
  Sprout,
  Sun,
  ThermometerSun,
  UploadCloud,
  Wind,
  X,
} from "lucide-react";

import { advisoryCards, crops, weatherDays } from "../data/siteContent.js";

function pageFromPath(path) {
  if (path.startsWith("/detect")) return "detect";
  if (path.startsWith("/guides")) return "guides";
  if (path.startsWith("/weather")) return "weather";
  if (path.startsWith("/advisory")) return "advisory";
  if (path.startsWith("/about")) return "about";
  return "home";
}

function Logo({ compact = false }) {
  return (
    <Link
      href="/"
      className={`brand ${compact ? "brand-compact" : ""}`}
      aria-label="AGRO SATHI home"
    >
      <span className="brand-mark">
        <Leaf size={18} strokeWidth={2.2} />
      </span>
      <span>
        <strong>AGRO SATHI</strong>
        {!compact && <small>Practical help for every field</small>}
      </span>
    </Link>
  );
}

function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["Home", "/", "home"],
    ["Detect", "/detect", "detect"],
    ["Crop guides", "/guides", "guides"],
    ["Weather", "/weather", "weather"],
    ["Advisories", "/advisory", "advisory"],
  ];
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map(([label, href, key]) => (
            <Link
              key={key}
              href={href}
              className={page === key ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/about"
            className={page === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </nav>
        <div className="nav-actions">
          <span
            className="language-button"
            aria-label="Current language: English"
          >
            <span>EN</span>
            <ChevronDown size={14} />
          </span>
          <Link href="/detect" className="nav-cta">
            Scan a leaf <ArrowRight size={15} />
          </Link>
          <button
            className="menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Logo compact />
        <p>
          Simple crop checks, weather context and safer next steps — written for
          the way farmers actually work.
        </p>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/advisory">Advisories</Link>
          <a
            href="https://mausam.imd.gov.in/responsive/agromet_adv_ser_state_current.php"
            target="_blank"
            rel="noreferrer"
          >
            IMD weather <ExternalLink size={12} />
          </a>
          <a
            href="https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/"
            target="_blank"
            rel="noreferrer"
          >
            FAO IPM <ExternalLink size={12} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AGRO SATHI</span>
        <span>
          For guidance, not a replacement for local agricultural advice.
        </span>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, body, children }) {
  return (
    <section className="page-intro">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      {children}
    </section>
  );
}

function QuickScan() {
  const [, navigate] = useLocation();

  return (
    <button className="quick-scan" onClick={() => navigate("/detect")}>
      <span className="quick-scan-icon">
        <ScanLine size={19} />
      </span>
      <span>
        <b>Check a leaf</b>
        <small>Camera or gallery</small>
      </span>
      <ArrowRight size={16} />
    </button>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero-section page-width">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> A calmer way to care for crops
          </span>
          <h1>Know what your crop is telling you.</h1>
          <p className="hero-lede">
            Take a quick photo, check the weather, and get clear next steps
            before a small problem becomes a field-wide one.
          </p>
          <div className="hero-actions">
            <Link href="/detect" className="button button-primary">
              <Camera size={17} /> Scan a crop <ArrowRight size={16} />
            </Link>
            <Link href="/guides" className="text-link">
              Browse crop guides <ChevronRight size={16} />
            </Link>
          </div>
          <div className="trust-row">
            <span>
              <CheckCircle2 size={15} /> No complicated setup
            </span>
            <span>
              <CheckCircle2 size={15} /> Built for phone screens
            </span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-image">
            <img
              src="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=85"
              alt="Green crop rows in a field"
            />
            <div className="art-overlay" />
          </div>
          <div className="hero-note note-weather">
            <span className="mini-icon sky">
              <Sun size={14} />
            </span>
            <div>
              <small>Today in Karimnagar</small>
              <b>31° · Clear skies</b>
            </div>
          </div>
          <div className="hero-note note-health">
            <span className="mini-icon lime">
              <ShieldCheck size={14} />
            </span>
            <div>
              <small>Field check</small>
              <b>Low disease pressure</b>
            </div>
          </div>
          <div className="hero-stamp">
            <Sprout size={18} />
            <span>
              Observe
              <br />
              before you act
            </span>
          </div>
        </div>
      </section>

      <section className="home-grid page-width section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Start with what you see</span>
            <h2>Useful on a busy day in the field.</h2>
          </div>
          <Link href="/about" className="text-link">
            How AGRO SATHI works <ChevronRight size={16} />
          </Link>
        </div>
        <div className="feature-grid">
          <Link href="/detect" className="feature-card feature-card-dark">
            <span className="feature-number">01</span>
            <span className="feature-icon">
              <Camera size={20} />
            </span>
            <h3>Scan a leaf</h3>
            <p>
              Use your phone camera or upload a close, well-lit photo of the
              affected part.
            </p>
            <span className="feature-link">
              Start a check <ArrowRight size={15} />
            </span>
          </Link>
          <Link href="/weather" className="feature-card feature-card-lime">
            <span className="feature-number">02</span>
            <span className="feature-icon">
              <CloudSun size={21} />
            </span>
            <h3>Read the sky</h3>
            <p>
              See a simple five-day view and match field tasks to the weather
              ahead.
            </p>
            <span className="feature-link">
              View weather <ArrowRight size={15} />
            </span>
          </Link>
          <Link href="/advisory" className="feature-card feature-card-paper">
            <span className="feature-number">03</span>
            <span className="feature-icon">
              <BookOpen size={20} />
            </span>
            <h3>Take the next step</h3>
            <p>
              Get practical, low-risk actions — from scouting to when to ask for
              local help.
            </p>
            <span className="feature-link">
              Read advisories <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </section>

      <section className="weather-band">
        <div className="page-width weather-band-inner">
          <div className="weather-band-intro">
            <span className="eyebrow">Field weather</span>
            <h2>Plan today’s work around the sky.</h2>
            <p>
              Weather affects disease pressure, spraying windows and irrigation.
              Keep the forecast close to the field decision.
            </p>
            <Link href="/weather" className="button button-light">
              See five-day view <ArrowRight size={16} />
            </Link>
          </div>
          <div className="weather-dashboard">
            <div className="weather-dashboard-top">
              <div>
                <span className="muted-label">KARIMNAGAR, TELANGANA</span>
                <strong>31°</strong>
                <span className="weather-condition">
                  <Sun size={16} /> Clear skies
                </span>
              </div>
              <div className="weather-dashboard-meta">
                <span>
                  <Droplets size={14} /> 58% humidity
                </span>
                <span>
                  <Wind size={14} /> 12 km/h wind
                </span>
              </div>
            </div>
            <div className="forecast-strip">
              {weatherDays
                .slice(0, 4)
                .map(({ day, icon: Icon, high, low, rain, label }) => (
                  <div className="forecast-day" key={day}>
                    <span>{day}</span>
                    <Icon size={22} />
                    <b>
                      {high}
                      <small>{low}</small>
                    </b>
                    <em>
                      <Droplets size={11} /> {rain}
                    </em>
                    <small className="forecast-label">{label}</small>
                  </div>
                ))}
            </div>
            <a
              className="source-link"
              href="https://mausam.imd.gov.in/responsive/agromet_adv_ser_state_current.php"
              target="_blank"
              rel="noreferrer"
            >
              Forecast context from India Meteorological Department{" "}
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      <section className="crop-watch page-width section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Crop watch</span>
            <h2>Start with the crops you grow.</h2>
          </div>
          <Link href="/guides" className="text-link">
            View all guides <ChevronRight size={16} />
          </Link>
        </div>
        <div className="crop-grid">
          {crops.slice(0, 3).map(crop => (
            <CropCard crop={crop} key={crop.name} />
          ))}
        </div>
      </section>

      <section className="quote-section page-width">
        <div className="quote-card">
          <span className="quote-mark">“</span>
          <blockquote>
            Good advice does not begin with a spray bottle. It begins with
            looking closely.
          </blockquote>
          <div className="quote-caption">
            <span className="line" />
            <span>A field note from the AGRO SATHI team</span>
          </div>
        </div>
        <div className="quote-aside">
          <Lightbulb size={20} />
          <p>
            Not sure what you’re seeing? Take two photos: one of the whole plant
            and one close-up of the leaf or fruit.
          </p>
          <Link href="/detect" className="text-link">
            See photo tips <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function CropCard({ crop }) {
  return (
    <Link
      href={`/guides?crop=${crop.name.toLowerCase()}`}
      className="crop-card"
    >
      <div className="crop-card-image">
        <img src={crop.image} alt={`${crop.name} crop`} />
        <span
          className={`status-tag ${crop.status === "Watch" ? "watch" : "healthy"}`}
        >
          <span /> {crop.status}
        </span>
      </div>
      <div className="crop-card-body">
        <div>
          <span className="crop-local">{crop.local}</span>
          <h3>{crop.name}</h3>
        </div>
        <ChevronRight size={17} />
        <p>{crop.note}</p>
        <div className="crop-card-foot">
          <span>{crop.season}</span>
          <span>
            Guide <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function DetectPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [crop, setCrop] = useState("Chilli");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(false);
  const fileRef = useRef(null);
  const cameraRef = useRef(null);

  const handleFile = nextFile => {
    if (!nextFile) return;
    setFile(nextFile);
    setResult(false);
    const reader = new FileReader();
    reader.onload = () => setPreview(String(reader.result));
    reader.readAsDataURL(nextFile);
  };
  const analyze = () => {
    if (!file) return;
    setBusy(true);
    window.setTimeout(() => {
      setBusy(false);
      setResult(true);
    }, 1100);
  };
  return (
    <main className="page-width page-shell">
      <PageIntro
        eyebrow="Crop check"
        title="Look closely. Decide calmly."
        body="Upload a clear photo of the affected leaf, fruit or stem. AGRO SATHI will organise what to observe next — it is a first check, not a final diagnosis."
      >
        <div className="intro-side-note">
          <ShieldCheck size={18} />
          <span>
            <b>Private by default</b>
            <small>Your photo stays in this browser demo.</small>
          </span>
        </div>
      </PageIntro>
      <div className="detect-layout">
        <section className="scan-panel">
          <div className="panel-top">
            <div>
              <span className="muted-label">STEP 1 OF 2</span>
              <h2>Choose a crop and photo</h2>
            </div>
            <span className="step-chip">Photo check</span>
          </div>
          <label className="field-label" htmlFor="crop-select">
            What are you checking?
          </label>
          <div className="select-wrap">
            <select
              id="crop-select"
              value={crop}
              onChange={e => setCrop(e.target.value)}
            >
              {crops.map(item => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
            <ChevronDown size={16} />
          </div>
          {preview ? (
            <div className="preview-box">
              <img src={preview} alt="Selected crop preview" />
              <div className="preview-overlay">
                <span>
                  <CheckCircle2 size={15} /> Photo ready
                </span>
                <button
                  onClick={() => {
                    setFile(null);
                    setPreview("");
                    setResult(false);
                  }}
                >
                  <RotateCcw size={14} /> Replace
                </button>
              </div>
            </div>
          ) : (
            <div className="upload-box">
              <UploadCloud size={28} />
              <h3>Bring a crop photo here</h3>
              <p>
                Use a close-up with good daylight. Avoid a blurry or wet leaf.
              </p>
              <div className="upload-actions">
                <button
                  className="button button-primary"
                  onClick={() => cameraRef.current?.click()}
                >
                  <Camera size={16} /> Camera
                </button>
                <button
                  className="button button-outline"
                  onClick={() => fileRef.current?.click()}
                >
                  <ImageUp size={16} /> Gallery
                </button>
              </div>
              <input
                ref={cameraRef}
                type="file"
                accept="image/*"
                capture="environment"
                hidden
                onChange={e => handleFile(e.target.files?.[0])}
              />
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                onChange={e => handleFile(e.target.files?.[0])}
              />
            </div>
          )}
          <button
            className="analyze-button"
            disabled={!file || busy}
            onClick={analyze}
          >
            {busy ? (
              <>
                <span className="spinner" /> Checking the photo…
              </>
            ) : (
              <>
                <ScanLine size={17} /> Check this photo <ArrowRight size={16} />
              </>
            )}
          </button>
          <p className="small-disclaimer">
            <CircleHelp size={13} /> A photo can suggest possibilities. Confirm
            important decisions with a local expert.
          </p>
        </section>
        <aside className="scan-aside">
          <div className="aside-card green-wash">
            <span className="aside-icon">
              <Lightbulb size={19} />
            </span>
            <h3>Make the photo useful</h3>
            <ul>
              <li>Photograph the whole plant first.</li>
              <li>Then move close to one clear symptom.</li>
              <li>Keep fingers and shadows off the leaf.</li>
            </ul>
          </div>
          <div className="aside-card">
            <span className="muted-label">AFTER YOUR CHECK</span>
            <div className="aside-row">
              <span className="round-number">1</span>
              <span>
                <b>Compare the signs</b>
                <small>Open a crop guide and see what matches.</small>
              </span>
            </div>
            <div className="aside-row">
              <span className="round-number">2</span>
              <span>
                <b>Check the weather</b>
                <small>Humidity and rain can change the risk.</small>
              </span>
            </div>
          </div>
        </aside>
      </div>
      {result && (
        <div className="result-panel">
          <div className="result-badge">
            <CheckCircle2 size={17} /> First check complete
          </div>
          <div>
            <span className="eyebrow">For {crop}</span>
            <h2>Possible leaf stress — inspect before treating</h2>
            <p>
              The image suggests a symptom that can have more than one cause,
              including moisture stress or a sucking pest. Walk the field and
              compare both sides of the leaf.
            </p>
          </div>
          <div className="result-actions">
            <Link
              href={`/guides?crop=${crop.toLowerCase()}`}
              className="button button-primary"
            >
              Open {crop} guide <ArrowRight size={16} />
            </Link>
            <Link href="/advisory" className="text-link">
              Read safe next steps <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

function GuidesPage() {
  const [query, setQuery] = useState("");
  const [season, setSeason] = useState("All");
  const filtered = useMemo(
    () =>
      crops.filter(crop => {
        const matchesSearch = `${crop.name} ${crop.local}`
          .toLowerCase()
          .includes(query.toLowerCase());
        const matchesSeason =
          season === "All" || crop.season.startsWith(season);
        return matchesSearch && matchesSeason;
      }),
    [query, season]
  );
  return (
    <main className="page-width page-shell">
      <PageIntro
        eyebrow="Crop guides"
        title="A field guide that speaks plainly."
        body="Start with the crop, then match what you see. These short guides focus on observation, field hygiene and knowing when to ask for local help."
      >
        <div className="guide-count">
          <span className="guide-count-number">{crops.length}</span>
          <span>
            starter guides
            <br />
            <small>More being added</small>
          </span>
        </div>
      </PageIntro>
      <div className="guide-toolbar">
        <div className="search-box">
          <Search size={17} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search a crop…"
            aria-label="Search crops"
          />
        </div>
        <div className="guide-filters">
          {["All", "Kharif", "Rabi"].map(filter => (
            <button
              key={filter}
              className={`filter-button ${season === filter ? "active" : ""}`}
              onClick={() => setSeason(filter)}
              aria-pressed={season === filter}
            >
              {filter === "All" ? "All crops" : filter}
            </button>
          ))}
        </div>
      </div>
      <div className="guides-grid">
        {filtered.map(crop => (
          <CropCard crop={crop} key={crop.name} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <Search size={22} />
          <h3>No guide yet</h3>
          <p>Try another crop name or send us a suggestion.</p>
        </div>
      )}
      <div className="guide-notice">
        <div>
          <ShieldCheck size={20} />
          <div>
            <b>Use the guide as a conversation starter.</b>
            <p>
              Symptoms can overlap. Take the photo, note where it appears in the
              field, and share those details with a local extension officer.
            </p>
          </div>
        </div>
        <Link href="/about" className="text-link">
          Why this matters <ChevronRight size={16} />
        </Link>
      </div>
    </main>
  );
}

function WeatherPage() {
  const [state, setState] = useState("Telangana");
  return (
    <main className="page-width page-shell">
      <PageIntro
        eyebrow="Weather desk"
        title="The next five days, in field language."
        body="Use the forecast to decide when to irrigate, scout, weed or wait. The numbers below are a clear demo view; always check your local IMD bulletin before a high-stakes decision."
      >
        <div className="location-picker">
          <MapPinIcon />
          <span>
            <small>YOUR REGION</small>
            <b>Karimnagar, {state}</b>
          </span>
          <ChevronDown size={15} />
        </div>
      </PageIntro>
      <div className="weather-controls">
        <label>
          State{" "}
          <select value={state} onChange={e => setState(e.target.value)}>
            <option>Telangana</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
            <option>Andhra Pradesh</option>
          </select>
        </label>
        <a
          className="source-link dark"
          href="https://mausam.imd.gov.in/responsive/agromet_adv_ser_state_current.php"
          target="_blank"
          rel="noreferrer"
        >
          Open IMD agromet bulletins <ExternalLink size={12} />
        </a>
      </div>
      <section className="weather-hero-card">
        <div className="current-weather">
          <span className="muted-label">TUESDAY, 08 SEPTEMBER</span>
          <div className="temperature-row">
            <Sun size={45} strokeWidth={1.5} />
            <strong>31°</strong>
            <span>
              Feels like 33°
              <br />
              <small>Mostly clear</small>
            </span>
          </div>
          <div className="current-weather-stats">
            <span>
              <Droplets size={15} /> 58% humidity
            </span>
            <span>
              <Wind size={15} /> 12 km/h wind
            </span>
            <span>
              <ThermometerSun size={15} /> UV moderate
            </span>
          </div>
        </div>
        <div className="field-callout">
          <span className="callout-tag">
            <Lightbulb size={13} /> TODAY'S FIELD NOTE
          </span>
          <h3>Good window for scouting and weeding.</h3>
          <p>
            Keep foliar sprays for a dry, calm period. If rain arrives early,
            protect freshly worked soil from runoff.
          </p>
          <Link href="/advisory" className="text-link">
            See weather-linked advice <ChevronRight size={16} />
          </Link>
        </div>
      </section>
      <section className="forecast-section">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">Forecast</span>
            <h2>Plan the week</h2>
          </div>
          <span className="updated-label">
            <span /> Updated a few minutes ago
          </span>
        </div>
        <div className="forecast-large">
          {weatherDays.map(
            ({ day, icon: Icon, high, low, rain, label }, index) => (
              <div
                className={`forecast-large-day ${index === 0 ? "today" : ""}`}
                key={day}
              >
                <span className="forecast-large-day-name">{day}</span>
                <Icon size={30} strokeWidth={1.6} />
                <strong>
                  {high}
                  <small>{low}</small>
                </strong>
                <span className="rain-prob">
                  <Droplets size={12} /> {rain}
                </span>
                <small>{label}</small>
                {index === 2 && <span className="rain-note">Rain likely</span>}
              </div>
            )
          )}
        </div>
      </section>
      <section className="weather-tasks">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">Match the work</span>
            <h2>Simple timing helps</h2>
          </div>
        </div>
        <div className="task-grid">
          <TaskCard
            icon={Sprout}
            title="Scout"
            when="Today · morning"
            text="Walk the edges and lower leaves first. Note whether symptoms are in patches or spread evenly."
            good
          />
          <TaskCard
            icon={CloudRain}
            title="Hold off spraying"
            when="Wednesday"
            text="Rain is more likely. Wait for a dry window and read the label before any treatment."
          />
          <TaskCard
            icon={Droplets}
            title="Irrigate thoughtfully"
            when="Friday"
            text="Check soil moisture with your hand before adding water. Avoid standing water around roots."
          />
        </div>
      </section>
    </main>
  );
}

function MapPinIcon() {
  return (
    <span className="location-icon">
      <Navigation size={16} />
    </span>
  );
}
function TaskCard({ icon: Icon, title, when, text, good = false }) {
  return (
    <div className="task-card">
      <span className={`task-icon ${good ? "good" : ""}`}>
        <Icon size={18} />
      </span>
      <span className="task-when">{when}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function AdvisoryPage() {
  const [active, setActive] = useState("All");
  const filters = ["All", "Crop care", "Weather", "Safer use"];
  const cards =
    active === "All"
      ? advisoryCards
      : advisoryCards.filter(card =>
          active === "Weather"
            ? card.tag === "WEATHER"
            : active === "Crop care"
              ? card.tag === "CHILLI"
              : card.tag === "ALL CROPS"
        );
  return (
    <main className="page-width page-shell">
      <PageIntro
        eyebrow="Advisory desk"
        title="Small notes for big decisions."
        body="Practical reminders for crop care, weather windows and safer pest management. Save what is useful and share it with the person who works your field."
      >
        <Link href="/detect" className="intro-button">
          <Mic size={17} />
          <span>
            <b>Ask with a photo</b>
            <small>Start from what you see</small>
          </span>
          <ArrowRight size={16} />
        </Link>
      </PageIntro>
      <div className="advisory-layout">
        <section>
          <div className="filter-tabs" role="tablist">
            {filters.map(filter => (
              <button
                key={filter}
                className={active === filter ? "active" : ""}
                onClick={() => setActive(filter)}
                role="tab"
                aria-selected={active === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="advisory-list">
            {cards.map(card => (
              <article className="advisory-card" key={card.title}>
                <div className={`advisory-card-visual ${card.color}`}>
                  <span>{card.tag}</span>
                  <div className="visual-scribble">
                    {card.color === "green" ? (
                      <Leaf size={52} />
                    ) : card.color === "blue" ? (
                      <CloudRain size={54} />
                    ) : (
                      <ShieldCheck size={52} />
                    )}
                  </div>
                </div>
                <div className="advisory-card-copy">
                  <span className="read-time">{card.time}</span>
                  <h2>{card.title}</h2>
                  <p>{card.body}</p>
                  <span className="text-link">
                    Read note <ArrowRight size={15} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <aside className="ipm-card">
          <span className="aside-icon">
            <FlaskConical size={18} />
          </span>
          <span className="eyebrow">A better order of operations</span>
          <h2>Scout → identify → act</h2>
          <p>
            Integrated Pest Management means combining crop, physical,
            biological and chemical options — with the least disruption needed.
          </p>
          <div className="ipm-steps">
            <div>
              <span>01</span>
              <b>Scout</b>
              <small>Look for patterns and the pest itself.</small>
            </div>
            <div>
              <span>02</span>
              <b>Identify</b>
              <small>Compare symptoms before choosing a response.</small>
            </div>
            <div>
              <span>03</span>
              <b>Act</b>
              <small>Start with the safest effective step.</small>
            </div>
          </div>
          <a
            href="https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/"
            target="_blank"
            rel="noreferrer"
            className="source-link dark"
          >
            Read FAO’s IPM principles <ExternalLink size={12} />
          </a>
        </aside>
      </div>
      <section className="help-banner">
        <div className="help-banner-icon">
          <Phone size={20} />
        </div>
        <div>
          <span className="eyebrow">Need a second opinion?</span>
          <h2>Take your notes to a local agriculture office.</h2>
          <p>
            A photo plus the crop stage, recent weather and where the problem
            appears is more useful than a product name alone.
          </p>
        </div>
        <Link href="/about" className="button button-outline">
          What to share <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-width page-shell">
      <PageIntro
        eyebrow="About AGRO SATHI"
        title="Technology should make field decisions feel lighter."
        body="AGRO SATHI is a small, practical web companion for farmers and field teams. It brings a crop photo, local weather context and simple guidance into one calm place."
      >
        <div className="about-mark">
          <Leaf size={25} />
          <span>
            Detect
            <br />
            Guide
            <br />
            Grow
          </span>
        </div>
      </PageIntro>
      <div className="about-story">
        <div className="story-lead">
          <span className="eyebrow">Our approach</span>
          <h2>Useful beats impressive.</h2>
          <p>
            We designed AGRO SATHI around three moments: noticing something
            different in a crop, deciding what to do today, and knowing when a
            local expert should join the decision.
          </p>
          <p>
            The result is intentionally quiet. No jargon wall. No pressure to
            buy a product. Just a starting point that helps a farmer ask a
            better question.
          </p>
        </div>
        <div className="principle-list">
          <div>
            <span className="principle-number">01</span>
            <div>
              <h3>Start from observation</h3>
              <p>
                A photo is a starting point, not a verdict. Crop guides help
                compare what you see.
              </p>
            </div>
          </div>
          <div>
            <span className="principle-number">02</span>
            <div>
              <h3>Respect local context</h3>
              <p>
                Weather, soil, variety and crop stage change the answer. We keep
                those questions visible.
              </p>
            </div>
          </div>
          <div>
            <span className="principle-number">03</span>
            <div>
              <h3>Choose the least risky next step</h3>
              <p>
                Field hygiene and monitoring often belong before a chemical
                response.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="source-section">
        <div>
          <span className="eyebrow">Sources we point toward</span>
          <h2>Good advice deserves a trail.</h2>
        </div>
        <div className="source-cards">
          <a
            href="https://mausam.imd.gov.in/responsive/agromet_adv_ser_state_current.php"
            target="_blank"
            rel="noreferrer"
          >
            <CloudSun size={20} />
            <span>
              <b>India Meteorological Department</b>
              <small>Agromet bulletins and forecast context</small>
            </span>
            <ExternalLink size={14} />
          </a>
          <a
            href="https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/"
            target="_blank"
            rel="noreferrer"
          >
            <ShieldCheck size={20} />
            <span>
              <b>FAO Integrated Pest Management</b>
              <small>Principles for sustainable pest control</small>
            </span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
      <section className="contact-strip">
        <div>
          <span className="eyebrow">Have a suggestion?</span>
          <h2>Tell us which crop should come next.</h2>
        </div>
        <a
          href="mailto:hello@agrosathi.example"
          className="button button-primary"
        >
          Send a note <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}

export default function Home() {
  const [location] = useLocation();
  const page = pageFromPath(location);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  let content;
  if (page === "detect") content = <DetectPage />;
  else if (page === "guides") content = <GuidesPage />;
  else if (page === "weather") content = <WeatherPage />;
  else if (page === "advisory") content = <AdvisoryPage />;
  else if (page === "about") content = <AboutPage />;
  else content = <HomePage />;
  return (
    <div className="app-shell">
      <Header page={page} />
      {content}
      <Footer />
      <QuickScan />
    </div>
  );
}
