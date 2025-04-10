import type { Metadata } from "next";
import {
  Epilogue,
  Inter,
  Noto_Sans,
  Open_Sans,
  Poppins,
  Roboto,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Configure all fonts with light weight (300)
const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const notoSans = Noto_Sans({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

const workSans = Work_Sans({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const epilogue = Epilogue({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aquachain dApp",
  description: "Blockchain water management dApp",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          // Select ONE of these options by uncommenting:
          // roboto.className
          // openSans.className
          // poppins.className
          // notoSans.className
          workSans.className
          // epilogue.className
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
