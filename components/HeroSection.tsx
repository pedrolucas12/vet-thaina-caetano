"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Layout: coluna esquerda = [0] em cima, [1] embaixo | coluna direita = [2] em cima, [3] embaixo
// [0] = superior esquerdo, [1] = inferior esquerdo, [2] = superior direito, [3] = inferior direito
const BENTO_IMAGES = [
  "/assets/ad4c7917-eb34-4f6e-a328-3db292046c09.jpeg",
  "/assets/e762c95a-73a2-4489-b816-5993c932dc21.jpeg",
  "/assets/2cbb9243-ab35-4946-8764-623c844bef84.jpeg",
  "/assets/2f7826d6-b5d3-48f4-97a4-8a254b4052a6.jpeg",
];

import { WHATSAPP_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden px-4 pb-24 pt-20 md:min-h-screen md:pb-12 md:px-6 md:pt-28">
      {/* Faixa de destaque mobile */}
      <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[#8a5921] via-[#b6896a] to-[#6c8299] md:hidden" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-4 text-center lg:text-left"
          >
            <h1 className="section-title text-2xl leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2rem] lg:leading-tight">
              Cuido da saúde do seu pet no conforto da sua casa, garantindo mais
              conforto e tranquilidade para ele.
            </h1>
            <div className="flex justify-center pt-4 lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-[#25D366] px-6 font-semibold text-white shadow-lg transition-all hover:bg-[#20BD5A] active:scale-[0.98] md:h-11 md:rounded-lg md:px-5"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar Consulta via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-2 md:gap-3"
          >
            <div className="space-y-2 md:space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl"
              >
                <Image
                  src={BENTO_IMAGES[0]}
                  alt="Atendimento pet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl"
              >
                <Image
                  src={BENTO_IMAGES[1]}
                  alt="Pet em casa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            </div>
            <div className="space-y-2 pt-8 md:space-y-3 md:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl"
              >
                <Image
                  src={BENTO_IMAGES[2]}
                  alt="Consulta veterinária"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl"
              >
                <Image
                  src={BENTO_IMAGES[3]}
                  alt="Cuidados com pet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
