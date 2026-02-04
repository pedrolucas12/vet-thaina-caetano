"use client";

import { motion } from "framer-motion";
import { WhatsAppQRCode } from "./WhatsAppQRCode";
import { WHATSAPP_LINK } from "@/lib/constants";

export function SectionAgendeQR() {
  return (
    <section
      id="agendar"
      className="scroll-mt-20 overflow-hidden px-4 py-16 md:py-20 md:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto max-w-md rounded-2xl border border-[#6c8299]/15 bg-white/80 px-6 py-8 shadow-lg backdrop-blur-sm md:rounded-3xl md:px-10 md:py-10"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-1 text-xl font-bold tracking-tight text-[#2d2d2d] md:text-2xl">
              Agende pelo celular
            </h2>
            <p className="mb-6 text-sm text-[#5a6575] md:text-base">
              Escaneie o QR code com a câmera do celular e o WhatsApp abrirá com
              a mensagem já pronta para agendar.
            </p>
            <WhatsAppQRCode size={180} showLabel className="mb-4" />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#8a5921] underline decoration-[#8a5921]/50 underline-offset-2 transition hover:text-[#6c8299] hover:decoration-[#6c8299]"
            >
              Ou clique aqui para agendar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
