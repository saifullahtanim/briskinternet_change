import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/package/" },
  { label: "About", href: "/about/" },
  { label: "Offers", href: "/offer/" },
  { label: "Bill pay", href: "/bill-pay/" },
  { label: "Contact", href: "/contact/" },
];

const plans = [
  { name: "Bronze", speed: 30, price: 525 },
  { name: "Opal", speed: 40, price: 630 },
  { name: "Pearl", speed: 50, price: 735 },
  { name: "Platinum", speed: 60, price: 840 },
  { name: "Gold", speed: 100, price: 1050 },
  { name: "Diamond", speed: 120, price: 1260 },
  { name: "Spinal", speed: 160, price: 1680 },
  { name: "Spinal+", speed: 220, price: 2100 },
  { name: "Star", speed: 250, price: 2625 },
  { name: "Moon", speed: 300, price: 3150 },
];

const partners = [
  { name: "APNIC", image: "partner-apnic.png" },
  { name: "Cisco", image: "partner-cisco.png" },
  { name: "Facebook", image: "partner-facebook.png" },
  { name: "Google", image: "partner-google.png" },
  { name: "MikroTik", image: "partner-mikrotik.png" },
];

function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topline">
        <div className="site-width topline-inner">
          <span>Internet for home and business</span>
          <a href="tel:09666762626">Support <strong>09666-762626</strong></a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-width header-inner">
          <a className="brand" href="/" aria-label="Brisk Internet home">
            <img src="/assets/brand.png" alt="" />
            <span><strong>Brisk</strong><small>INTERNET</small></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map((item) => {
              const active = item.href === "/"
                ? page === "home"
                : window.location.pathname.replace(/\/$/, "") === item.href.replace(/\/$/, "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a className="header-phone" href="tel:01795094570">Call us <span>↗</span></a>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-main">
        <div className="footer-about">
          <a className="brand brand-light" href="/">
            <img src="/assets/brand.png" alt="" />
            <span><strong>Brisk</strong><small>INTERNET</small></span>
          </a>
          <p>Reliable fiber internet for homes, teams, and growing businesses.</p>
        </div>
        <div className="footer-links">
          <h2>Explore</h2>
          <a href="/package/">Packages</a>
          <a href="/about/">About Brisk</a>
          <a href="/offer/">Offers</a>
        </div>
        <div className="footer-links">
          <h2>Support</h2>
          <a href="/bill-pay/">How to pay</a>
          <a href="/contact/">Contact</a>
          <a href="/package/package-form/">Request a connection</a>
        </div>
        <div className="footer-links">
          <h2>Get in touch</h2>
          <a href="tel:09666762626">09666-762626</a>
          <a href="mailto:info@briskinternet.net">info@briskinternet.net</a>
          <span>Dhaka Division, Bangladesh</span>
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>© {new Date().getFullYear()} Brisk Internet</span>
        <div><a href="/privacy-policy/">Privacy</a><a href="/terms-conditions/">Terms</a></div>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <div className="site-width">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="intro-copy">{description}</p>}
      </div>
    </section>
  );
}

function PlanGrid({ compact = false }) {
  const shownPlans = compact ? plans.slice(0, 4) : plans;
  return (
    <div className={compact ? "plan-grid plan-grid-compact" : "plan-grid"}>
      {shownPlans.map((plan, index) => (
        <article className={index === 2 ? "plan-card plan-featured" : "plan-card"} key={plan.name}>
          <div className="plan-topline"><span>{plan.name}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
          <p className="plan-speed">{plan.speed}<span> Mbps</span></p>
          <p className="plan-price">Tk {plan.price}<span> / month</span></p>
          <p className="plan-vat">Including 5% VAT</p>
          <a className="plan-link" href={`/package/package-form/?plan=${encodeURIComponent(plan.name)}`}>
            Choose {plan.name}<span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="site-width hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Fiber internet, made dependable</p>
            <h1>Your world moves.<br /><em>Your internet should too.</em></h1>
            <p>Fast, reliable connections for the things you do at home and the work you do every day.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="/package/">Find your package <span>↗</span></a>
              <a className="text-link" href="/about/">Get to know Brisk</a>
            </div>
            <div className="hero-note"><span>01</span><span>Connecting Dhaka since 2002</span></div>
          </div>
          <div className="hero-visual">
            <img src="/assets/home-internet.jpg" alt="A connected home with high-speed internet" />
            <div className="hero-caption"><span className="signal-mark">Wi</span><span><strong>Made for real life</strong><small>Home internet that keeps up</small></span></div>
            <span className="hero-index">BRISK / 01</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Network partners">
        <div className="site-width trust-inner">
          <p>Connected to the<br /><strong>world's network</strong></p>
          <div className="partner-row">{partners.map((partner) => <img key={partner.name} src={`/assets/${partner.image}`} alt={partner.name} />)}</div>
        </div>
      </section>

      <section className="section-pad services-section">
        <div className="site-width">
          <div className="section-heading"><div><p className="eyebrow">One network, more possibility</p><h2>Internet built around<br />how you <em>live and work.</em></h2></div><a className="text-link" href="/contact/">Talk to our team ↗</a></div>
          <div className="service-grid">
            <article className="service-item">
              <img src="/assets/home-internet.jpg" alt="High-speed internet for a connected home" loading="lazy" />
              <div><span className="service-number">01 / HOME</span><h3>Room for every routine.</h3><p>Stream, study, work and stay in touch on a connection made for the whole household.</p><a href="/package/">See home packages <span>↗</span></a></div>
            </article>
            <article className="service-item">
              <img src="/assets/business-internet.jpg" alt="Reliable connectivity for a growing business" loading="lazy" />
              <div><span className="service-number">02 / BUSINESS</span><h3>Built to keep business moving.</h3><p>Dependable connectivity for teams, offices and the work that cannot wait.</p><a href="/contact/">Plan a business connection <span>↗</span></a></div>
            </article>
          </div>
        </div>
      </section>

      <section className="plans-preview section-pad">
        <div className="site-width">
          <div className="section-heading"><div><p className="eyebrow">Straightforward monthly plans</p><h2>Find your <em>speed.</em></h2></div><a className="text-link" href="/package/">Compare all 10 packages ↗</a></div>
          <PlanGrid compact />
        </div>
      </section>

      <section className="home-cta"><div className="site-width cta-inner"><p className="eyebrow">A better connection starts here</p><h2>Let's get you<br /><em>connected.</em></h2><a className="button button-light" href="/package/package-form/">Request a connection <span>↗</span></a></div></section>
    </>
  );
}

function PackagePage() {
  return <><PageIntro eyebrow="Plans for every kind of day" title="Choose your speed." description="Clear monthly plans for home and business. Pick the connection that feels right for you." /><section className="section-pad package-section"><div className="site-width"><div className="package-meta"><span>10 available plans</span><span>All prices include 5% VAT</span></div><PlanGrid /><p className="fine-print">Need a plan for a larger team or a specific location? <a href="/contact/">Talk with our team.</a></p></div></section></>;
}

function AboutPage() {
  return <>
    <PageIntro eyebrow="A little about us" title="Local roots. A wider connection." description="Brisk Systems has been connecting homes and businesses across Dhaka Division since 2002." />
    <section className="section-pad about-story"><div className="site-width story-layout"><div className="story-aside"><span className="big-year">2002</span><p>Independent roots.<br />A connected future.</p></div><div className="story-copy"><p className="eyebrow">Brisk Systems / Our story</p><h2>Good internet should make everyday life <em>easier.</em></h2><p>Brisk Systems is an internet service provider serving communities across Dhaka Division. Since 2002, our focus has been consistent connectivity, helpful support, and making quality internet more accessible.</p><p>Our network is delivered over fiber-optic connections, with major routes connected through the nationwide transmission network (NTTN). Our technical team supports homes, offices, educational institutions, and workplaces.</p><div className="story-values"><div><strong>01</strong><span>Fiber-first network</span></div><div><strong>02</strong><span>People-led support</span></div><div><strong>03</strong><span>Serving Dhaka Division</span></div></div></div></div></section>
    <section className="partner-section"><div className="site-width"><p className="eyebrow">The technology behind the connection</p><h2>Built on a connected ecosystem.</h2><div className="partner-row partner-row-large">{partners.map((partner) => <img key={partner.name} src={`/assets/${partner.image}`} alt={partner.name} loading="lazy" />)}</div></div></section>
  </>;
}

function OfferPage() {
  return <>
    <PageIntro eyebrow="Offers and campaigns" title="A little more in every connection." description="Ask our team about current offers, referral rewards, and fiber connection availability in your area." />
    <section className="section-pad offer-section"><div className="site-width offer-grid"><article className="offer-feature"><span className="offer-tag">01 / REFER & EARN</span><div><p className="eyebrow">Good connections travel</p><h2>Know someone who needs better internet?</h2><p>Ask us about the current referral reward and eligibility before you sign up.</p><a className="button button-dark" href="/contact/">Ask about referrals <span>↗</span></a></div></article><article className="offer-secondary"><span className="offer-tag">02 / NEW CONNECTION</span><h2>Fiber, right to your door.</h2><p>Connection availability and installation offers depend on your location. We can check your address and share current terms.</p><a className="text-link" href="/package/package-form/">Check availability ↗</a></article></div></section>
  </>;
}

function BillPayPage() {
  const steps = [
    "Open bKash or Nagad and sign in to your account.",
    "Choose the Pay Bill option and search for Brisk Systems. The listing may appear as Breze Online in some menus.",
    "Select the billing period and enter your customer account number.",
    "Check the account and amount carefully before confirming payment in the app.",
  ];
  return <>
    <PageIntro eyebrow="Customer support" title="Pay your bill, simply." description="Use your mobile financial service app to pay your Brisk Systems internet bill." />
    <section className="section-pad bill-section"><div className="site-width bill-layout"><div><p className="eyebrow">Mobile bill payment</p><h2>From sign-in to confirmation.</h2><p className="bill-caution">Payment is completed in your bKash or Nagad app. This website does not collect payment details.</p><ol className="steps-list">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol><a className="text-link" href="/contact/">Need help? Contact support ↗</a></div><aside className="bill-aside"><span className="bill-mark">PAY<br />BILL</span><p>Before you confirm</p><h3>Make sure the account number and billing period are correct.</h3><a href="tel:09666762626">Support: 09666-762626 ↗</a></aside></div></section>
  </>;
}

function ContactPage() {
  return <>
    <PageIntro eyebrow="We're here to help" title="Let's talk about getting connected." description="Ask about your address, a home package, or a business connection. Our team is ready to help." />
    <section className="section-pad contact-section"><div className="site-width contact-layout"><div className="contact-details"><p className="eyebrow">Brisk Systems / Contact</p><h2>Real people.<br /><em>Ready to help.</em></h2><div className="contact-method"><span>PHONE</span><a href="tel:01795094570">+880 1795-094570</a></div><div className="contact-method"><span>SUPPORT</span><a href="tel:09666762626">09666-762626</a></div><div className="contact-method"><span>EMAIL</span><a href="mailto:info@briskinternet.net">info@briskinternet.net</a></div><div className="contact-method"><span>AREA</span><p>Dhaka Division, Bangladesh</p></div><p className="support-note">Technical support is available 24/7.</p></div><form className="contact-form" action="mailto:info@briskinternet.net" method="post" encType="text/plain">
      <p className="eyebrow">Send an enquiry</p><h2>What can we help with?</h2>
      <label>Your name<input name="Name" autoComplete="name" required /></label>
      <label>Phone number<input name="Phone" type="tel" autoComplete="tel" required /></label>
      <label>Email address<input name="Email" type="email" autoComplete="email" /></label>
      <label>I'm interested in<select name="Enquiry"><option>Home internet</option><option>Business internet</option><option>Billing support</option><option>Something else</option></select></label>
      <label>Your message<textarea name="Message" rows="4" required /></label>
      <button className="button button-dark" type="submit">Prepare email enquiry <span>↗</span></button>
      <p className="form-note">Your email app will open with the enquiry. This form does not send data to a server.</p>
    </form></div></section>
  </>;
}

function RequestPage() {
  const requestedPlan = new URLSearchParams(window.location.search).get("plan");
  return <>
    <PageIntro eyebrow="New connection" title="Let's find your fit." description="Share a few details and our team can help check availability and arrange your connection." />
    <section className="section-pad request-section"><div className="site-width request-layout"><aside className="request-aside"><p className="eyebrow">Your next step</p><h2>Start with the details. We'll take it from there.</h2><p>We'll use your enquiry to follow up about the plan and service availability at your address.</p><a href="tel:09666762626">Prefer to call? 09666-762626 ↗</a></aside><form className="contact-form" action="mailto:info@briskinternet.net" method="post" encType="text/plain"><p className="eyebrow">Connection enquiry</p><h2>Tell us where to reach you.</h2><label>Your name<input name="Name" autoComplete="name" required /></label><label>Phone number<input name="Phone" type="tel" autoComplete="tel" required /></label><label>Email address<input name="Email" type="email" autoComplete="email" /></label><label>Choose a package<select name="Package" defaultValue={plans.some((plan) => plan.name === requestedPlan) ? requestedPlan : ""} required><option value="" disabled>Select a speed</option>{plans.map((plan) => <option key={plan.name} value={plan.name}>{plan.name} - {plan.speed} Mbps - Tk {plan.price}/month</option>)}</select></label><label>Installation address<textarea name="Address" rows="3" autoComplete="street-address" required /></label><button className="button button-dark" type="submit">Prepare connection enquiry <span>↗</span></button><p className="form-note">This opens your email app. No account or payment data is collected here.</p></form></div></section>
  </>;
}

function LegalPage({ privacy = false }) {
  const terms = [
    "Brisk Systems provides broadband internet service over fiber-optic cable. Customers are responsible for paying the monthly internet bill.",
    "Brisk Systems is not responsible for illegal or fraudulent use of the connection and may terminate service where appropriate.",
    "Customers wishing to disconnect should inform Brisk Systems at least five days before the month in which service should end.",
    "Service may be interrupted by technical issues, weather, electrical problems, or transmission network faults. Customers are asked to allow time for restoration.",
    "Devices and equipment supplied for the connection remain the property of Brisk Systems and may be recovered when service ends.",
  ];
  return <><PageIntro eyebrow="Brisk Systems" title={privacy ? "Privacy" : "Terms of service"} description={privacy ? "How to ask us about information related to your service." : "A few straightforward conditions for using Brisk Systems broadband service."} /><section className="section-pad legal-section"><div className="site-width legal-copy">{privacy ? <><p>This website is an informational frontend. It does not process payments or store customer account details. Enquiry forms open your email application and do not submit information to a website server.</p><p>For questions about information associated with your internet service, contact <a href="mailto:info@briskinternet.net">info@briskinternet.net</a> or call <a href="tel:09666762626">09666-762626</a>.</p><p>A complete service privacy policy should be confirmed directly with Brisk Systems.</p></> : <ol>{terms.map((term) => <li key={term}>{term}</li>)}</ol>}</div></section></>;
}

function NotFoundPage() {
  return <PageIntro eyebrow="404 / Page not found" title="This page isn't here." description="Head back to the homepage or find a package that fits." />;
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const pages = {
    "/": ["home", <HomePage />],
    "/package": ["package", <PackagePage />],
    "/about": ["about", <AboutPage />],
    "/offer": ["offer", <OfferPage />],
    "/bill-pay": ["bill-pay", <BillPayPage />],
    "/contact": ["contact", <ContactPage />],
    "/contact-page": ["contact", <ContactPage />],
    "/package/package-form": ["package-form", <RequestPage />],
    "/privacy-policy": ["privacy-policy", <LegalPage privacy />],
    "/terms-conditions": ["terms-conditions", <LegalPage />],
  };
  const [page, content] = pages[pathname] ?? ["not-found", <NotFoundPage />];

  return <><Header page={page} /><main>{content}</main><Footer /></>;
}

createRoot(document.getElementById("root")).render(<App />);