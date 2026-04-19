import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding navy-gradient" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Let's work together
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "wazirishaban20@gmail.com" },
                { icon: Phone, label: "+(255) 620847754" },
                { icon: MapPin, label: "Dar es salaam, Tanzania" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <item.icon size={18} className="text-accent-foreground" />
                  </div>
                  <span className="text-primary-foreground/80 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[Linkedin, Github, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card/10 backdrop-blur-md border border-primary-foreground/10 rounded-xl p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-primary-foreground/70 text-sm font-medium mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-primary-foreground/70 text-sm font-medium mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors text-sm"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="text-primary-foreground/70 text-sm font-medium mb-1.5 block">Subject</label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors text-sm"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="text-primary-foreground/70 text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full justify-center sm:w-auto"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
