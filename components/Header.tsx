"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button as HeroUIButton } from "@heroui/react";

const NAV_LINKS = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre mim" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/60 bg-[#e7e1dc]/70 px-4 py-3 shadow-sm backdrop-blur-xl md:rounded-full md:px-6 md:py-2.5"
      >
        <a href="#" className="text-sm font-semibold tracking-tight text-[#2d2d2d] md:text-base">
          Dra. Thainá Caetano
        </a>
        <nav className="hidden md:flex md:items-center md:gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative px-4 py-2 text-sm font-medium text-[#5a6575] transition-colors hover:text-[#8a5921]"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#8a5921] after:transition-[width] after:duration-200 hover:after:w-full">
                {label}
              </span>
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5561999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <HeroUIButton color="primary" size="sm" radius="full" className="font-medium">
            Agendar
          </HeroUIButton>
        </a>
        <button
          type="button"
          aria-label="Abrir menu"
          className="flex h-9 w-9 items-center justify-center rounded-xl text-[#2d2d2d] transition hover:bg-white/40 md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="absolute right-0 top-0 flex h-full w-64 flex-col gap-2 rounded-l-2xl border-l border-[#6c8299]/10 bg-[#e7e1dc]/95 p-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex justify-end">
                <motion.button
                  type="button"
                  aria-label="Fechar menu"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-[#2d2d2d] hover:bg-white/50"
                  onClick={() => setMobileOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#2d2d2d] hover:bg-white/50 hover:text-[#8a5921]"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/5561999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full"
                onClick={() => setMobileOpen(false)}
              >
                <HeroUIButton color="primary" size="md" radius="lg" className="w-full font-medium">
                  Agendar via WhatsApp
                </HeroUIButton>
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
