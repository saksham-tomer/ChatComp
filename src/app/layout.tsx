import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/components/Provider";
import NavProvider from "@/components/Landing/NavProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AICreate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NavProvider>
          <Provider>
            <body className={inter.className}>{children}</body>
          </Provider>
        </NavProvider>
      </html>
    </ClerkProvider>
  );
}
