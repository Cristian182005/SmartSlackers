import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BadgeToast from "@/app/components/BadgeToast";
import { I18nProvider } from "@/lib/i18n";
import FloatingAvatarGuide from "@/app/components/FloatingAvatarGuide";
import { ThemeProvider } from "@/app/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vocatio | Orientación vocacional",
  description:
    "Plataforma de orientación vocacional con test, mentor IA y rutas personalizadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Aplica tema antes del primer paint para evitar flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('vocatio-theme');if(t==='dark'){document.documentElement.classList.add('dark');return;}if(t==='light')return;if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <I18nProvider>
            {children}
            <BadgeToast />
            <FloatingAvatarGuide />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
