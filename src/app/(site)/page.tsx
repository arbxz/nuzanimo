import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faArrowRight,
  faEye,
  faHospitalSymbol,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import LinkButton from "@/components/LinkButton";
import CommercialImage from "@/components/CommercialImage";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { getArticles } from "../../../sanity/sanity-utils";
import { Article } from "../../../types/Article";

export default async function Home() {
  const projects: Article[] = await getArticles();

  return (
    <div className="flex bg-pastel-beige flex-col">
      <section className="relative bg-pastel-dark noise overflow-x-hidden h-full">
        <Image
          src="/blob-haikei.svg"
          alt="bg-main"
          className="absolute -left-96 -top-48 block inset-0 w-auto h-full object-contain z-0"
          width={600}
          height={600}
        />

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 z-10 px-4 pt-16 lg:pt-8 min-h-svh">
          <div className="text-center lg:text-left w-full max-w-[500px] glass border-none rounded-xl p-4 text-white">
            <h1 className="font-extrabold text-6xl md:text-8xl mb-4">
              Help Our Animals Now!{" "}
            </h1>
            <p className="text-md lg:pr-8">
              We&apos;re a non profit organization regrouping resources to help
              animals around mauritius.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-full">
            <div className="hidden lg:block">
              <CommercialImage
                src="/home.webp"
                alt="home"
                width={500}
                height={500}
                blurDataUrl="/home.webp"
                credits="Photo by Tina Nord"
                creditLink="https://www.pexels.com/photo/adult-yellow-labrador-retriever-at-the-back-of-pickup-truck-917106/"
              />
            </div>

            <div className="block max-w-[500px]">
              <Link
                className="block text-white lg:hover:scale-105 transition-transform duration-300 shadow-md"
                href="/events">
                <div className="bg-primary flex items-end gap-4 p-4 rounded-md">
                  <div className="hidden lg:block">
                    <span className="font-bold text-sm bg-white text-primary p-1 mb-2 block">
                      Don&apos;t miss out !
                    </span>
                    <FontAwesomeIcon className="text-9xl" icon={faQrcode} />
                  </div>

                  <div className="w-full border-l-2 border-dashed border-white pl-4">
                    <h3 className="flex items-center gap-4 text-2xl lg:text-3xl font-bold mb-4">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>Upcoming Events</span>
                    </h3>
                    <div className="max-w-96 mb-6">
                      Check out our upcoming events by our partners about
                      adoptions or sterilization campaigns
                    </div>
                    <div className="text-center w-64 ml-auto flex justify-center items-center text-base lg:text-sm gap-4 border-2 border-white px-4 py-2 rounded-full">
                      Go to our events page{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative noise bg-pastel-dark text-white">
        <Image
          src="/blob-haikei.svg"
          alt="bg-main"
          className="absolute inset-0 w-auto h-full object-contain z-0"
          width={1920}
          height={1080}
        />
        <div className="relative z-20 flex flex-col md:flex-row gap-8 items-end px-4 py-24 lg:py-36 max-w-6xl mx-auto">
          <CommercialImage
            src="/adopt.webp"
            alt="adopt"
            width={650}
            height={650}
            blurDataUrl="/adopt.webp"
            credits="Photo by Edgar Daniel Hernández Cervantes"
            creditLink="https://www.pexels.com/photo/black-and-white-short-coated-dogs-3628100/"
          />
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 opacity-80 mb-2 ">
              Find Your Furry Companion
              <span className="flex-1 h-[1px] w-full bg-white opacity-40"></span>
            </div>
            <h2 className="block text-6xl font-bold mb-8">
              Adopt a Stray Today
            </h2>
            <span className="block w-full h-[1px] bg-white opacity-40 mb-8"></span>
            <p className="text-lg font-semibold mb-8">
              Take the first step towards unconditional love and lifelong
              friendship by browsing our available animals below. Together, we
              can make a difference, one adoption at a time.
            </p>
            <LinkButton text="learn more." link="/adoptions" icon={faEye} />
          </div>
        </div>
      </section>
      <section className="relative noise bg-pure-white">
        <div className="flex flex-col md:flex-row gap-8 items-start max-w-6xl mx-auto px-4 py-24">
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 opacity-80 mb-2">
              Spay and Neuter
              <span className="flex-1 h-[1px] w-full bg-black opacity-10"></span>
            </div>
            <h2 className="block text-6xl font-bold mb-8">
              Responsible Pet Ownership for a Better Future
            </h2>
            <span className="block w-full h-[1px] bg-black opacity-10 mb-8"></span>
            <p className="text-lg font-semibold mb-8">
              Sterilizing your pet is one of the most important decisions you
              can make as a responsible pet owner. At our NGO, we advocate for
              spaying and neutering as a critical component of animal welfare.
              Here&apos;s why:
            </p>
            <ul className="list-disc pl-4 mb-8">
              <li>Preventing Overpopulation</li>
              <li>
                Health Benefits: Sterilization offers numerous health benefits
                for your pet.
              </li>
              <li>
                Behavioral Benefits: Sterilization can reduce undesirable
                behaviors in your pet.
              </li>
              <li>
                Preventing Homelessness: Sterilization helps prevent the birth
                of unwanted animals.
              </li>
              <li>
                Longer Lifespan: Sterilized pets tend to live longer, healthier
                lives.
              </li>
            </ul>
            <LinkButton
              text="link to full article."
              link="/adoptions"
              icon={faHospitalSymbol}
            />
          </div>
          <div className="w-1/2 hidden md:block">
            <CommercialImage
              src="/vet.webp"
              alt="vet"
              width={650}
              height={650}
              blurDataUrl="/vet.webp"
              credits="Photo by Mikhail Nilov"
              creditLink=" https://www.pexels.com/photo/veteranarian-checking-on-a-dog-7469226/"
            />
          </div>
        </div>
      </section>
      <section className="relative text-center bg-white py-16 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="block text-6xl font-bold mb-8">
            Need Help
            <br /> Neutering Your Pet ?
          </h2>
          <Link
            className="mx-auto flex items-center w-fit gap-4 font-semibold text-base px-4 py-3 border-2 rounded-full bg-black text-white"
            href="/adoptions">
            <FontAwesomeIcon icon={faAddressBook} />
            <span>get help.</span>
          </Link>
        </div>
      </section>
      <section className="bg-pastel-dark text-pastel-beige">
        <div className="max-w-6xl mx-auto flex gap-4 lg:gap-8 flex-wrap justify-center text-center py-16 lg:py-32">
          <h3 className="text-4xl font-semibold w-full">Our Partners.</h3>
          <Image src="/PAWS-Logo.png" alt="paws" width={100} height={100} />
          <Image src="/PAWS-Logo.png" alt="paws" width={100} height={100} />
          <Image src="/PAWS-Logo.png" alt="paws" width={100} height={100} />
          <Image src="/PAWS-Logo.png" alt="paws" width={100} height={100} />
          <Image src="/PAWS-Logo.png" alt="paws" width={100} height={100} />
        </div>
      </section>
      {projects.length > 0 && (
        <section className="relative noise text-center py-16">
          <div className="flex flex-col items-center max-w-6xl mx-auto">
            <div className="mb-8 lg:mb-12">
              <h2 className="block text-6xl font-bold mb-4">Blog.</h2>
              <p>Catch up to what our community experts has to say.</p>
            </div>

            <div className="flex justify-center gap-4 mb-4 lg:mb-8">
              {projects.map((project) => (
                <Link
                  className="flex flex-col gap-4 p-2 rounded-md cursor-pointer"
                  key={project._id}
                  href={`/projects/${project.slug}`}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={200}
                      height={200}
                      className="rounded-md"
                      placeholder="blur"
                      blurDataURL={project.image}
                    />
                  )}
                  {project.name}
                </Link>
              ))}
            </div>

            <LinkButton text="view more." link="/blogs" icon={faEye} />
          </div>
        </section>
      )}
    </div>
  );
}

// todo encrypt data/slug
