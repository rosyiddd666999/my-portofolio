"use client";

import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Abdul Rosyid, a computer science student in Indonesia specializing in front-end development and UI/UX design. Building beautiful apps with clean code and thoughtful design to help your business grow digitally."
        />
        <meta
          name="keywords"
          content="abdul rosyid, ABDUL ROSYID, UNMUH, unmuh, "
        />
        <meta name="author" content="Abdul Rosyid" />
        <meta
          property="og:title"
          content="Abdul Rosyid - Front-End Developer & UI/UX Designer"
        />
        <meta
          property="og:description"
          content="Abdul Rosyid, a computer science student in Indonesia, specializing in front-end development and UI/UX design. Building beautiful apps to help businesses grow digitally."
        />
        <meta
          property="og:image"
          content="https://www.abdul-rosyid.my.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.06a27bb6.jpg&w=3840&q=75"
        />
        <meta property="og:url" content="https://www.abdul-rosyid.my.id/" />
      </head>
      <body
        className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
