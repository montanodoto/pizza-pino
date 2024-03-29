import StyledComponentsRegistry from "./registry";
import Header from "./components/header";
import Footer from "./components/footer";

import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="menu">
        <Header />

        <StyledComponentsRegistry>
          <main className="canvas">{children}</main>
        </StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
