import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider, ClerkLoaded } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Market - Premium Produce Delivered",
  description: "Fresh, organic produce delivered to your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ClerkLoaded>
            <Providers>
              {children}
              <Toaster />
            </Providers>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
