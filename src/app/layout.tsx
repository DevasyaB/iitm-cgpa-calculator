import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a standard modern font, close to the requested style
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SecurityProvider } from "@/components/SecurityProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ... existing metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SecurityProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </SecurityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
