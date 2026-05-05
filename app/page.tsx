"use client";

import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    const container = document.getElementById("jotform-container");
    if (!container) return;
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/261243544700045";
    script.type = "text/javascript";
    container.appendChild(script);
    return () => { script.remove(); };
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

          <div className="form-embed" id="jotform-container" />
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
