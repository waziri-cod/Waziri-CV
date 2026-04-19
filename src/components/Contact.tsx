import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/wazirishaban20@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let result: { message?: string; error?: string } = {};
      try {
        result = await response.json();
      } catch {
        result = { error: response.statusText || 'Server returned an invalid response' };
      }

      if (!response.ok) {
        throw new Error(result.error || `Failed to send message (${response.status})`);
      }

      toast.success(result.message || 'Message sent successfully! I will get back to you soon.');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="bg-card p-8 rounded-3xl border shadow-sm space-y-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Me</h4>
                  <p className="text-muted-foreground">wazirishaban20@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Me</h4>
                  <p className="text-muted-foreground">+(255) 620-847754</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-muted-foreground">Dar es salaam,DSM, TANZANIA</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Follow My Journey</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={24} />, href: 'https://github.com/waziri-cod', label: 'Github' },
                  { icon: <Linkedin size={24} />, href: 'http://linkedin.com/in/waziri-shaban', label: 'Linkedin' },
                  { icon: <Twitter size={24} />, href: '#', label: 'Twitter' },
                  { icon: <MessageSquare size={24} />, href: 'mailto:wazirishaban20@gmail.com', label: 'Email' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-4 bg-background border rounded-2xl text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl border shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    id="name"
                    {...register('name')}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  {errors.name && <p className="text-destructive text-xs font-medium">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    id="email"
                    {...register('email')}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  {errors.email && <p className="text-destructive text-xs font-medium">{errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold">
                  Subject
                </label>
                <input
                  id="subject"
                  {...register('subject')}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                />
                {errors.subject && <p className="text-destructive text-xs font-medium">{errors.subject.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message')}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
                {errors.message && <p className="text-destructive text-xs font-medium">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}