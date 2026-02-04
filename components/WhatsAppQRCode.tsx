"use client";

import { WHATSAPP_LINK } from "@/lib/constants";

const QR_API = "https://api.qrserver.com/v1/create-qr-code";

type WhatsAppQRCodeProps = {
  /** Tamanho em pixels (lado do quadrado). Default: 140 */
  size?: number;
  /** Classe do container (ex: para alinhamento no header/footer) */
  className?: string;
  /** Mostrar legenda "Escaneie para agendar" */
  showLabel?: boolean;
};

export function WhatsAppQRCode({
  size = 140,
  className = "",
  showLabel = true,
}: WhatsAppQRCodeProps) {
  const qrSrc = `${QR_API}/?size=${size}x${size}&data=${encodeURIComponent(WHATSAPP_LINK)}`;

  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-[#6c8299]/20 bg-white p-1.5 shadow-sm transition hover:border-[#8a5921]/40 hover:shadow-md"
        aria-label="Abrir WhatsApp para agendar (ou escaneie o QR code)"
      >
        <img
          src={qrSrc}
          alt="QR Code para agendar via WhatsApp"
          width={size}
          height={size}
          className="rounded-md"
        />
      </a>
      {showLabel && (
        <span className="text-center text-xs font-medium text-[#5a6575]">
          Escaneie para agendar
        </span>
      )}
    </div>
  );
}
