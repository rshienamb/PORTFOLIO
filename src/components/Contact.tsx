import React, { useState } from "react";
import { C, HF, BF } from "../theme";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="Contact" className="section">
      <p className="sec-tag">Get in Touch</p>
      <h2 className="sec-title">Ready to Take Me On?</h2>
      <div className="sec-divider" />
      <p style={{ fontSize: "0.93rem", lineHeight: 1.85, color: C.textMuted, fontFamily: BF, marginBottom: "2.5rem" }}>
        I'm just a click away! Fill out the form or reach out directly.
      </p>

      <div className="two-col">
        {/* Form */}
        <div>
          {sent ? (
            <div style={{ background: C.tealLight, border: `1px solid ${C.teal}`, borderRadius: 12, padding: 32, textAlign: "center" }}>
              <div style={{ fontFamily: HF, fontSize: "2.5rem", color: C.teal, marginBottom: 12 }}>✓</div>
              <div style={{ fontFamily: HF, fontWeight: 700, fontSize: "1.4rem", color: C.text, marginBottom: 8 }}>Message Sent!</div>
              <div style={{ fontSize: "0.85rem", color: C.textMuted, fontFamily: BF }}>Thank you for reaching out. I'll get back to you soon.</div>
            </div>
          ) : (
            <>
              {([
                { label: "Your Name", key: "name", type: "text", ph: "Juan dela Cruz" },
                { label: "Your Email", key: "email", type: "email", ph: "you@company.com" },
              ] as const).map((f) => (
                <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1rem" }}>
                  <label style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, fontWeight: 600, fontFamily: BF }}>{f.label}</label>
                  <input
                    className="form-input"
                    type={f.type}
                    placeholder={f.ph}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  />
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, fontWeight: 600, fontFamily: BF }}>Message</label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="I'd like to connect about..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                className="btn-primary"
                style={{ width: "100%" }}
                onClick={() => { if (form.name && form.email && form.message) setSent(true); }}
              >
                Send Message →
              </button>
            </>
          )}
        </div>

        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { icon: "📞", label: "Landline", value: "[To be provided]" },
            { icon: "📧", label: "Email", value: "[To be provided]" },
            { icon: "📍", label: "Location", value: "Philippines" },
          ].map((c) => (
            <div key={c.label} className="card" style={{ padding: 18, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: "1.5rem", minWidth: 32, textAlign: "center" }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: C.textDim, marginBottom: 2, fontWeight: 600, fontFamily: BF }}>{c.label}</div>
                <div style={{ fontSize: "0.9rem", color: C.text, fontWeight: 600, fontFamily: BF }}>{c.value}</div>
              </div>
            </div>
          ))}
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontSize: "0.7rem", color: C.teal, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontFamily: BF }}>Thank You</div>
            <p style={{ fontSize: "0.85rem", color: C.textMuted, lineHeight: 1.75, fontFamily: BF }}>
              Thank you for taking the time to visit my portfolio. I look forward to the opportunity of working with you and contributing to your team's success. 🌿
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
