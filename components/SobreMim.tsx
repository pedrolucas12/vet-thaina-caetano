"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const PLACEHOLDER_IMAGE = "/assets/7ae09418-b618-470a-8f34-31831ba01fa5.jpeg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function SobreMim() {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 overflow-hidden px-4 py-16 md:py-28 md:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="section-title mb-14 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:mb-16"
        >
          Sobre mim
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:items-stretch">
          {/* Card esquerdo: imagem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex h-full min-h-[320px] md:min-h-[400px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl md:rounded-3xl">
              <Image
                src={PLACEHOLDER_IMAGE}
                alt="Dra. Thainá Caetano"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(138, 89, 33, 0.15)",
                }}
              />
            </div>
          </motion.div>

          {/* Card direito: texto (mesma altura e largura que o esquerdo) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex h-full min-h-[320px] md:min-h-[400px]"
          >
            <Card className="h-full w-full overflow-hidden rounded-2xl border-white/60 bg-white/70 shadow-lg backdrop-blur-xl md:rounded-3xl md:border">
              <CardContent className="flex h-full flex-col justify-center space-y-6 p-6 md:space-y-8 md:px-8 md:py-8">
                <motion.p
                  variants={item}
                  transition={{ duration: 0.4 }}
                  className="text-base leading-relaxed text-foreground md:text-lg md:leading-8"
                >
                  Sou <strong className="font-semibold text-foreground">médica veterinária</strong>, formada pela Universidade Católica de Brasília, e{" "}
                  <strong className="font-semibold text-primary">pós-graduanda em clínica médica de pequenos animais</strong>.
                  Atuo com foco em medicina de pequenos animais e atendimento domiciliar.
                </motion.p>
                <motion.p
                  variants={item}
                  transition={{ duration: 0.4 }}
                  className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8"
                >
                  Acredito que o cuidado no ambiente familiar reduz ansiedade e favorece o vínculo entre o pet e a família. Aqui você encontra um espaço dedicado ao bem-estar do seu companheiro, com protocolos atualizados e uma abordagem que coloca o conforto e a segurança do animal em primeiro lugar.
                </motion.p>
                {/* CRMV em destaque */}
                <motion.div
                  variants={item}
                  transition={{ duration: 0.4 }}
                  className="flex flex-wrap items-center gap-3 pt-2"
                >
                  <span className="inline-flex items-center rounded-full border-2 border-primary/30 bg-primary/10 px-4 py-2 text-base font-bold text-primary md:text-lg">
                    CRMV-DF 6825
                  </span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
