import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/site/header";
import {Montserrat} from 'next/font/google';
import Footer from "@/components/site/footer/page";
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Jota",
  description: "Jota news portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="pt-br" suppressHydrationWarning className={montserrat.className}>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
