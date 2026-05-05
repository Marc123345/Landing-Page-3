"use client";

import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    s1.onload = () => {
      const s2 = document.createElement("script");
      s2.innerHTML = `window.jotformEmbedHandler("iframe[id='JotFormIFrame-261243265404147']", "https://form.jotform.com/")`;
      document.body.appendChild(s2);
    };
    document.body.appendChild(s1);
    return () => s1.remove();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-eyebrow">Free Roof Assessment</span>
          <h1>
            Restore Your Roof for <span className="accent">75% Less</span>{" "}
            with a Roof Coating.
          </h1>

          <div className="form-embed">
            <iframe
              id="JotFormIFrame-261243265404147"
              title="Roof Coating Deal Request"
              onLoad={() => window.parent.scrollTo(0, 0)}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/261243265404147"
              frameBorder={0}
              style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
              scrolling="no"
            />
          </div>
        </div>

        <div className="footer-strip">
          © 2026 All Rights Reserved &nbsp;·&nbsp;
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </section>
    </>
  );
}
