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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('portfolio-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
