import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "MbioMbio Delivery in Arusha",
  description: "Fastest delivery service in Arusha, Tanzania.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}