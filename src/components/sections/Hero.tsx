"use client";

import { useTranslations } from "next-intl";
import { MapPin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-4">
            {t("name")}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-6">
            {t("role")}
          </p>
          <p className="text-text-muted mb-10 flex items-center justify-center gap-2">
            <MapPin size={16} className="text-accent" />
            {t("location")}
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#projects");
                if (el) {
                  window.scrollTo({
                    top: (el as HTMLElement).offsetTop - 64,
                    behavior: "smooth",
                  });
                }
              }}
              className="px-6 py-3 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              {t("viewProjects")}
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-calderon-sanpedro/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg text-sm font-medium text-text-secondary hover:border-border-hover hover:text-text-primary transition-colors"
            >
              {t("linkedin")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-20"
        >
          <ArrowDown
            size={20}
            className="mx-auto text-text-muted animate-bounce"
          />
        </motion.div>
      </div>
    </section>
  );
}
