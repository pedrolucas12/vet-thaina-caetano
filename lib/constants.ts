/** Número WhatsApp: +55 61 98499-2402 (apenas dígitos para wa.me) */
export const WHATSAPP_NUMBER = "5561984992402";

/** Mensagem pré-pronta para agendamento */
const MENSAGEM_AGENDAMENTO =
  "Olá, Dra. Thainá! Gostaria de agendar uma consulta domiciliar para meu pet. Poderia me informar os horários disponíveis e valores? Obrigado(a)!";

/** Link completo para abrir WhatsApp com a mensagem pré-preenchida */
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAGEM_AGENDAMENTO)}`;
