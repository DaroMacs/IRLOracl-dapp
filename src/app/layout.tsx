import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// // Configure Montserrat font
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-montserrat", // Optional: for CSS variable usage
//   // If you want specific weights, add them like this:
//   // weight: ['400', '500', '700'],
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aquachain dApp",
  description: "Blockchain water management dApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
