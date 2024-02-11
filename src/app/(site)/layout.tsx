import { config } from "@fortawesome/fontawesome-svg-core";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getPages } from "../../../sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nu-zanimo",
  description:
    "Nu zanimo is an ngo that helps animals in need by providing education and adoption and transport platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className + "bg-white min-h-screen"}>
        <header className="fixed top-0 left-0 z-20 w-full bg-white shadow-sm">
          <nav className=" w-full flex items-center gap-4 px-4 py-2 max-w-6xl mx-auto">
            <Link href="/">protez-nou-zanimo</Link>
            <ul className="flex items-center gap-2">
              <li>
                <Link className="px-4 py-2 font-semibold" href={`/adoptions`}>
                  {"adoption" + "."}
                </Link>
              </li>
              <li>
                <Link className="px-4 py-2 font-semibold" href={`/vets`}>
                  {"vets" + "."}
                </Link>
              </li>
              <li>
                <Link className="px-4 py-2 font-semibold" href={`/neuter`}>
                  {"sterelize ou zanimo" + "."}
                </Link>
              </li>
              <li>
                <Link className="px-4 py-2 font-semibold" href={`/taxis`}>
                  {"taxi-zanimo" + "."}
                </Link>
              </li>
              <li>
                <Link className="px-4 py-2 font-semibold" href={`/blogs`}>
                  {"blog" + "."}
                </Link>
              </li>
              {pages.map((page) => (
                <li key={page._id}>
                  <Link
                    className="px-4 py-2 font-semibold lowercase"
                    href={`/${page.slug}`}>
                    {page.title + "."}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              className="group font-semibold text-sm flex gap-4 px-4 py-2 border-2 rounded-full bg-black text-white ml-auto"
              href="/">
              <FontAwesomeIcon icon={faHandHoldingDollar} />
              donate.
            </Link>
          </nav>
        </header>

        <div className="fixed flex flex-col justify-end gap-4 top-0 right-4 h-full pb-8 z-20  mix-blend-difference text-white">
          <Link href="">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>

        <main className="pt-24 relative">{children}</main>

        <footer className="bg-black text-white px-4 py-16 mt-16">
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
