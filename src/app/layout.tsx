import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import QueryProvider from "@/providers/QueryProvider";
import { Poppins, Quicksand } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${quicksand.variable} antialiased`}
    >
      <body>
        <QueryProvider>
          <Layout>{children}</Layout>
        </QueryProvider>
      </body>
    </html>
  );
}
