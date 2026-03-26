import React, { useState } from "react";
import { C, HF, BF } from "../theme";
import Icon, { IconName } from "./Icon";

const BASIN_FORM_ENDPOINT = process.env.REACT_APP_BASIN_FORM_ENDPOINT ?? "https://usebasin.com/f/1ab767d0e80a";

const contactItems = [
  { icon: "phone", label: "Landline", value: "0464099187" },
  { icon: "pin", label: "Location", value: "Philippines" },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please complete all fields before sending.");
      return;
    }

    if (!BASIN_FORM_ENDPOINT) {
      setError("Missing Basin form endpoint. Set REACT_APP_BASIN_FORM_ENDPOINT in your environment.");
      return;
    }

    setSubmitting(true);
    setError("");

    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("message", form.message);

    try {
      const response = await fetch(BASIN_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Submission failed.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Your message could not be sent right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="section">
      <p className="sec-tag">Get in Touch</p>
      <h2 className="sec-title">Ready to Take Me On?</h2>
      <div className="sec-divider" />
      <p style={{ fontSize: "0.93rem", lineHeight: 1.85, color: C.textMuted, fontFamily: BF, marginBottom: "2.5rem" }}>
        I'm just a click away! Fill out the form or reach out directly.
      </p>

      <div className="two-col">
        <div>
          {sent ? (
            <div style={{ background: C.tealLight, border: `1px solid ${C.teal}`, borderRadius: 12, padding: 32, textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                <Icon name="check" size={42} />
              </div>
              <div style={{ fontFamily: HF, fontWeight: 700, fontSize: "1.4rem", color: C.text, marginBottom: 8 }}>Message Sent!</div>
              <div style={{ fontSize: "0.85rem", color: C.textMuted, fontFamily: BF }}>Thank you for reaching out. I'll get back to you soon.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {([
                { label: "Your Name", key: "name", type: "text", ph: "Juan dela Cruz" },
                { label: "Your Email", key: "email", type: "email", ph: "you@company.com" },
              ] as const).map((f) => (
                <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1rem" }}>
                  <label htmlFor={f.key} style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, fontWeight: 600, fontFamily: BF }}>{f.label}</label>
                  <input
                    id={f.key}
                    name={f.key}
                    className="form-input"
                    type={f.type}
                    placeholder={f.ph}
                    value={form[f.key]}
                    required
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  />
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1rem" }}>
                <label htmlFor="message" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMuted, fontWeight: 600, fontFamily: BF }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="I'd like to connect about..."
                  value={form.message}
                  required
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {error ? (
                <div style={{ marginBottom: "1rem", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255, 118, 118, 0.35)", background: "rgba(255, 118, 118, 0.08)", color: "#ffb0b0", fontSize: "0.82rem", fontFamily: BF }}>
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                className="btn-primary"
                disabled={submitting}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: submitting ? 0.7 : 1, cursor: submitting ? "wait" : "pointer" }}
              >
                {submitting ? "Sending..." : "Send Message"}
                <Icon name="chevron-right" size={14} color="#0a0f0f" />
              </button>
            </form>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {contactItems.map((c) => (
            <div key={c.label} className="card" style={{ padding: 18, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ minWidth: 32, display: "flex", justifyContent: "center" }}>
                <Icon name={c.icon as IconName} size={24} />
              </span>
              <div>
                <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: C.textDim, marginBottom: 2, fontWeight: 600, fontFamily: BF }}>{c.label}</div>
                <div style={{ fontSize: "0.9rem", color: C.text, fontWeight: 600, fontFamily: BF }}>{c.value}</div>
              </div>
            </div>
          ))}
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontSize: "0.7rem", color: C.teal, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, fontFamily: BF }}>Thank You</div>
            <p style={{ fontSize: "0.85rem", color: C.textMuted, lineHeight: 1.75, fontFamily: BF }}>
              Thank you for taking the time to visit my portfolio. I look forward to the opportunity of working with you and contributing to your team's success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
