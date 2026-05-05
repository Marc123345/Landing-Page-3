"use client";

import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    let obs: MutationObserver | null = null;
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      (window as any).jotformEmbedHandler(
        "iframe[id='JotFormIFrame-261243265404147']",
        "https://form.jotform.com/"
      );
      const iframe = document.getElementById("JotFormIFrame-261243265404147") as HTMLElement | null;
      if (iframe) {
        obs = new MutationObserver(() => { if (iframe.style.height) iframe.style.height = ""; });
        obs.observe(iframe, { attributes: true, attributeFilter: ["style"] });
      }
    };
    document.body.appendChild(script);
    return () => { script.remove(); obs?.disconnect(); };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

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
            src="https://form.jotform.com/261243265404147?isIframeEmbed=1"
            frameBorder={0}
            scrolling="no"
          />
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
