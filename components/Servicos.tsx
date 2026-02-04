"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Stethoscope,
  Syringe,
  FlaskConical,
  FileCheck,
} from "lucide-react";

const servicos = [
  {
    icon: Stethoscope,
    title: "Consulta clínica",
    description: "Avaliação completa do seu pet no conforto do lar.",
  },
  {
    icon: Syringe,
    title: "Protocolo vacinal",
    description: "Vacinas aplicadas em casa, com segurança e tranquilidade.",
  },
  {
    icon: FlaskConical,
    title: "Exames laboratoriais",
    description: "Coleta de amostras que serão enviadas a laboratórios parceiros.",
  },
  {
    icon: FileCheck,
    title: "Atestado de saúde para viagens",
    description: "Documentação para transporte e viagens com seu pet.",
  },
];

export function Servicos() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 px-4 py-12 md:py-24 md:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-title mb-10 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          Serviços
        </motion.h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative h-full min-h-[240px] sm:min-h-[260px] md:min-h-[280px]"
            >
              <MagicCard
                gradientSize={220}
                gradientColor="#f5f2ef"
                gradientFrom="#b6896a"
                gradientTo="#8a5921"
                gradientOpacity={0.6}
                className="h-full overflow-hidden rounded-2xl"
              >
                <Card className="relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-2xl border-[#b6896a]/20 bg-card/95 py-6 shadow-sm backdrop-blur-sm sm:min-h-[260px] md:min-h-[280px] md:py-6 md:px-6">
                  <BorderBeam
                    duration={14}
                    colorFrom="#b6896a"
                    colorTo="#8a5921"
                    innerClassName="bg-[#f5f2ef]"
                  />
                  <CardHeader className="relative z-10 flex-shrink-0 gap-2 px-5 pb-2 md:px-6">
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary md:h-12 md:w-12">
                      <Icon className="h-5 w-5 md:h-5 md:w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground md:text-lg">
                      {title}
                    </h3>
                  </CardHeader>
                  <CardContent className="relative z-10 flex flex-1 flex-col justify-center px-5 pt-0 md:px-6">
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
