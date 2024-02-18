import { config } from "@fortawesome/fontawesome-svg-core";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.css";
import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Navigation from "@/components/Navigation";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protez nu zanimo",
  description:
    "Protez nu zanimo is an ngo that helps animals in need by providing education and adoption and transport platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + "bg-white text-pastel-dark h-full min-h-svh"
        }>
        <Navigation />

        <main className="relative">{children}</main>

        <footer className="bg-pastel-dark text-white px-4 py-16 mt-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Links</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href={"/adoptions"}>adoption.</Link>
                  </li>
                  <li>
                    <Link href={"/vaccination"}>vaccination.</Link>
                  </li>
                  <li>
                    <Link href={"/neuter"}>neutering.</Link>
                  </li>
                  <li>
                    <Link href={"/animal-taxi"}>animal transport.</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href={"/adoptions"}>veteranarian.</Link>
                  </li>
                  <li>
                    <Link href={"/neuter"}>animal-taxi.</Link>
                  </li>
                  <li>
                    <Link href={"/vaccination"}>shadowscript studios.</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="block font-semibold text-center">
            © 2024 Protez nou zanimo Website by{" "}
            <Link target="_blank" href="https://www.shadowscript-studios.com">
              shadowscript-studios
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
