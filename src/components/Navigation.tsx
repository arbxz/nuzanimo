import {
  faCalendar,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Navigation = async () => {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full bg-pastel-dark text-pure-white shadow-sm">
        <nav className="w-full flex items-center gap-4 px-4 py-2 mx-auto">
          <Link href="/">protez-nou-zanimo</Link>
          <ul className="flex items-center gap-2">
            <li>
              <Link className="px-4 py-2 font-semibold" href={`/adoptions`}>
                {"adoption" + "."}
              </Link>
            </li>
            <li>
              <Link className="px-4 py-2 font-semibold" href={`/neuter`}>
                {"sterelize ou zanimo" + "."}
              </Link>
            </li>
            <li>
              <Link className="px-4 py-2 font-semibold" href={`/events`}>
                {"events" + "."}
              </Link>
            </li>
            <li className="relative group">
              <div className="px-4 py-2 font-semibold cursor-pointer">
                articles.
              </div>
              <ul className="absolute top-full left-0 max-h-0 overflow-hidden h-fit w-max group-hover:max-h-96 bg-pastel-dark text-white rounded transition-all ease-in-out duration-300">
                <li>
                  <Link
                    className="block px-4 py-2 font-semibold hover:bg-red transition-colors duration-200"
                    href={`/blogs`}>
                    {"blog" + "."}
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 font-semibold hover:bg-red transition-colors duration-200"
                    href={`/blogs`}>
                    {"vets" + "."}
                  </Link>
                  <li>
                    <Link
                      className="block px-4 py-2 font-semibold hover:bg-red transition-colors duration-200"
                      href={`/blogs`}>
                      {"taxi-zanimo" + "."}
                    </Link>
                  </li>
                </li>
              </ul>
            </li>
          </ul>
          <Link
            className="group font-semibold text-sm flex gap-4 px-4 py-2 border-2 border-white rounded-full bg-pastel-dark hover:bg-red transition-colors duration-300 text-white ml-auto"
            href="/">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
            donate.
          </Link>
        </nav>
      </header>

      <div className="fixed flex flex-col justify-end gap-4 top-0 right-4 h-full pb-8 z-20 text-vermillion">
        <Link href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>

      <Link
        href="/events"
        className="fixed bottom-4 left-4 md:left-12 xl:left-4 flex gap-4 items-center px-4 py-3 bg-red text-pastel-beige hover:bg-vermillion duration-200 transition-colors rounded-full shadow-md z-50">
        <FontAwesomeIcon icon={faCalendar} />
        <span className="hidden lg:block">upcoming events.</span>
      </Link>
    </>
  );
};

export default Navigation;
