"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const contactItems = [
  { icon: Mail,   label: "Email",    value: profile.email,    href: `mailto:${profile.email}` },
  { icon: Phone,  label: "Phone",    value: profile.phone,    href: `tel:${profile.phone.replace(/\s/g,"")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: "" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: profile.social.linkedin },
  { icon: Github,   label: "GitHub",   href: profile.social.github },
  { icon: Instagram, label: "Instagram", href: profile.social.instagram },
];

function ContactItem({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href: string }) {
  const inner = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-geo-teal/[0.15] to-geo-blue/[0.15]">
        <Icon className="h-5 w-5 text-geo-teal" />
      </div>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wide text-ink-900/40 dark:text-mist-500">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </>
  );
  if (href) {
    return (
      <a href={href} className="card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
        {inner}
      </a>
    );
  }
  return (
    <div className="card flex items-center gap-4 p-5">
      {inner}
    </div>
  );
}

export function Contact() {
  const [sent, setSent]  = useState(false);
  const [busy, setBusy]  = useState(false);
  const [msg,  setMsg]   = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => { setBusy(false); setSent(true); }, 1300);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="section-container">
        <SectionHeading index="07" kicker="Contact" title="Let's connect"
          description="Open to full-time GIS roles, research collaborations, and freelance geospatial projects." />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* left — info */}
          <motion.div initial={{ opacity:0, x:-22 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.6 }} className="space-y-4">
            {contactItems.map((item) => (
              <ContactItem key={item.label} {...item} />
            ))}

            <div className="card flex items-center gap-3 p-5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                 className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 text-ink-900 transition-all hover:-translate-y-1 hover:border-geo-teal/40 hover:text-pink-500 dark:border-white/10 dark:text-mist-400">
                 <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
              <p className="ml-1 text-xs text-ink-900/45 dark:text-mist-500">Find me online</p>
            </div>
          </motion.div>

          {/* right — form */}
          <motion.div initial={{ opacity:0, x:22 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.6, delay:0.1 }}
            className="card overflow-hidden p-7 sm:p-9">
            {sent ? (
              <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-geo-green" />
                <h3 className="mt-4 font-display text-xl font-semibold">Message sent!</h3>
                <p className="mt-2 max-w-xs text-sm text-ink-900/55 dark:text-mist-400">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button onClick={() => { setSent(false); setMsg(""); }} className="btn-secondary mt-6">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    { id:"name",  label:"Name",  type:"text",  placeholder:"Your name" },
                    { id:"email", label:"Email", type:"email", placeholder:"your@email.com" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="mb-1.5 block text-xs font-medium text-ink-900/55 dark:text-mist-400">{f.label}</label>
                      <input id={f.id} name={f.id} type={f.type} required placeholder={f.placeholder}
                        className="w-full rounded-xl border border-ink-900/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-geo-teal/50 dark:border-white/10 dark:bg-white/5" />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-ink-900/55 dark:text-mist-400">Subject</label>
                  <input id="subject" name="subject" type="text" required placeholder="GIS project enquiry"
                    className="w-full rounded-xl border border-ink-900/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-geo-teal/50 dark:border-white/10 dark:bg-white/5" />
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between">
                    <label htmlFor="message" className="text-xs font-medium text-ink-900/55 dark:text-mist-400">Message</label>
                    <span className="text-xs text-ink-900/30 dark:text-mist-500">{msg.length}/500</span>
                  </div>
                  <textarea id="message" name="message" required rows={5} maxLength={500}
                    value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell me about your project or opportunity…"
                    className="w-full resize-none rounded-xl border border-ink-900/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-geo-teal/50 dark:border-white/10 dark:bg-white/5" />
                </div>
                <button type="submit" disabled={busy} className="btn-primary w-full disabled:opacity-60">
                  {busy ? "Sending…" : "Send Message"} {!busy && <Send className="h-4 w-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
