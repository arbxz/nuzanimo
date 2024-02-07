import { config } from "@fortawesome/fontawesome-svg-core";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getPages } from "../../../sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nu-zanimo",
  description:
    "Nu zanimo is an ngo that helps animals in need by providing education, an adoption platform and vets contact and animal transport.",
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
        <header className="w-full flex items-center gap-4 p-4 max-w-6xl mx-auto">
          <Link href="/">nu-zanimo</Link>
          <ul className="flex items-center gap-2">
            <li>
              <Link className="px-4 py-2 font-semibold" href={`/`}>
                {"adoption" + "."}
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
            Donate
          </Link>
        </header>
        <main>
          <section>
            <div className="flex items-center justify-center">
              <div className=" w-full max-w-96">
                <h1 className="font-extrabold text-7xl mb-4">
                  Help Our Animals Now!{" "}
                </h1>
                <p className="text-sm lg:pr-8">
                  We&apos;re a non profit organization regrouping resources to
                  help animals around mauritius.
                </p>
              </div>

              <Image
                className="rounded-md shadow-md"
                src={"/pexels-charles-1851164.jpg"}
                width={400}
                height={600}
                alt="Photo by charles from Pexels"
              />
            </div>
          </section>
          {children}
        </main>
      </body>
    </html>
  );
}
