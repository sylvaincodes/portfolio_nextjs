import "./globals.css";
import { font } from "./fonts";
import Providers from "@/providers";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx('dark:bg-dark', 'min-h-screen', font.className)} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
