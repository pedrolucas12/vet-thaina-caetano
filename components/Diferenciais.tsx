"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Smile } from "lucide-react";

const items = [
  {
    icon: Heart,
    title: "Mais conforto",
    description: "Seu pet fica no ambiente que conhece, sem estresse de viagem.",
  },
  {
    icon: Shield,
    title: "Menos estresse",
    description: "Evitamos deslocamento e espera em clínicas.",
  },
  {
    icon: Smile,
    title: "Atendimento humanizado",
    description: "Tempo dedicado e cuidado personalizado para você e seu pet.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function Diferenciais() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="diferenciais"
      className="scroll-mt-20 px-4 py-12 md:py-24 md:px-6"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Fundo sutil em faixa para diferenciar da seção Serviços */}
        <div
          className="absolute inset-0 -mx-4 rounded-2xl bg-gradient-to-b from-[#6c8299]/08 via-transparent to-transparent md:-mx-6 md:rounded-3xl"
          aria-hidden
        />
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-title mb-10 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            Por que atendimento em casa?
          </motion.h2>

          {/* Mobile: timeline vertical | Desktop: grid 3 colunas ocupando a largura */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          >
            {/* Linha vertical da timeline só no mobile */}
            <div
              className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-[#8a5921]/40 via-[#6c8299]/30 to-transparent md:hidden"
              aria-hidden
            />
            {items.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative flex gap-4 py-5 pl-2 md:flex-col md:items-center md:px-4 md:py-6 md:pl-0 md:text-center"
              >
                {/* Nó (círculo com ícone) */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#8a5921]/30 bg-[#e7e1dc] shadow-sm md:h-14 md:w-14">
                  <Icon
                    className="h-5 w-5 text-[#8a5921] md:h-7 md:w-7"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Conteúdo: título + descrição */}
                <div className="min-w-0 flex-1 pt-0.5 md:pt-3">
                  <h3 className="mb-1 text-sm font-semibold text-foreground md:text-base">
                    {title}
                  </h3>
                  <p className="text-[0.8125rem] leading-relaxed text-muted-foreground md:text-sm">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
