import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Registration",
  description:
    "Modern user registration demo using Next.js, Tailwind, and React Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 text-slate-900 antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-5xl">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
