import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "José Eric Alves | Engenharia da Computação",
  description:
    "Portfólio de José Eric Alves Uchoa Wanderley da Silva, estudante de Engenharia da Computação em São Luís, MA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
