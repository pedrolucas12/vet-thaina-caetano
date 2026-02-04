import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dra. Thainá Caetano | Veterinária Domiciliar",
  description:
    "Atendimento domiciliar humanizado para seu pet. Consulta clínica, protocolo vacinal e mais no conforto da sua casa.",
  icons: {
    icon: "/assets/e762c95a-73a2-4489-b816-5993c932dc21.jpeg",
    apple: "/assets/e762c95a-73a2-4489-b816-5993c932dc21.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dmSans.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
