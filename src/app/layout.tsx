import type { Metadata } from "next";
import "./globals.css";
import { App, Footer, Header } from "@/app/components";
import { getPublishers } from "./actions/getPublishers";
import { Publisher } from "@/types";

export const metadata: Metadata = {
  title: "Congregation Application",
  description: "A small congregation app to learn next",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishers: Publisher[] = await getPublishers();

  return (
    <html lang="en">
      <body>
        <Header />
        <App publishers={publishers} />
        <Footer />
      </body>
    </html>
  );
}
