import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from "@/components/Topbar";
import BottomBar from "@/components/bottom_bar/BottomBar";

const poppins = Poppins({
  variable: '--font-poppins', // nama CSS variable
  subsets: ['latin'],
  weight: ["100","200",'400', '500', '600', '700'], // sesuaikan kebutuhan
  display: 'swap', // optional
})

export const metadata: Metadata = {
  title: "DPC GMNI Blitar",
  description: "GMNI Blitar",
  icons:{
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${poppins.className} antialiased`}>
        <Topbar />
          {children}
        <BottomBar />
      </body>
    </html>
  );
}
