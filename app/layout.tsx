import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "sabler.me",
  description: "Navigate to my professional LinkedIn, personal Goodreads, Letterboxd, and Github profiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-zinc-200'>
        {children}
      </body>
    </html>
  );
}
