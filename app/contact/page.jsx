"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Info */}
            <ContactInfo />
          </div>
          
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-2xl overflow-hidden border border-border/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53091445498!2d85.7858529!3d19.8134554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c4556041e6e3%3A0x2d06add3c1c6d73e!2sPuri%2C%20Odisha!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
