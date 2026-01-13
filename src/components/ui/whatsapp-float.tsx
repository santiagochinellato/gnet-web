"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Intersection Observer for Footer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of footer is visible
      }
    );

    const footer = document.getElementById("contacto"); // Using the footer ID we validated earlier
    if (footer) {
      observer.observe(footer);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const show = isVisible && !isOverFooter;

  const handleWhatsAppClick = () => {
    const phone = "5492944824423";
    const message = "Hola, quisiera hacer una consulta.";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? "https://api.whatsapp.com/send"
      : "https://web.whatsapp.com/send";
    const whatsappUrl = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={handleWhatsAppClick}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="fixed bottom-6 right-6 z-[90] flex h-14 items-center gap-2 overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-shadow hover:shadow-green-500/50 md:bottom-8 md:right-8 p-4"
          aria-label="Contactar por WhatsApp"
          layout
        >
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, width: 0, x: -10 }}
                animate={{ opacity: 1, width: "auto", x: 0 }}
                exit={{ opacity: 0, width: 0, x: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="whitespace-nowrap font-bold text-sm"
              >
                ¡Contactanos!
              </motion.span>
            )}
          </AnimatePresence>
          <MessageCircle className="h-6 w-6 fill-white shrink-0" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
