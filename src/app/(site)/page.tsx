import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import { Project } from "../../../types/Project";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEye,
  faHospitalSymbol,
} from "@fortawesome/free-solid-svg-icons";
import LinkButton from "@/components/LinkButton";
import CommercialImage from "@/components/CommercialImage";

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex bg-pastel-beige flex-col">
      <section className="relative noise">
        <div className="relative flex items-center justify-center gap-8 z-10 px-4 min-h-svh">
          <div className="w-full max-w-96">
            <h1 className="font-extrabold text-8xl mb-4">
              Help Our Animals Now!{" "}
            </h1>
            <p className="text-md lg:pr-8">
              We&apos;re a non profit organization regrouping resources to help
              animals around mauritius.
            </p>
          </div>

          <div className="hidden md:block">
            <CommercialImage
              src="/home.jpg"
              alt="home"
              width={600}
              height={500}
              credits="Photo by Tina Nord"
              creditLink="https://www.pexels.com/photo/adult-yellow-labrador-retriever-at-the-back-of-pickup-truck-917106/"
            />
          </div>
        </div>
      </section>
      <section className="relative bg-pastel-dark text-white">
        <div className="flex flex-col md:flex-row gap-8 items-end px-4 py-24 lg:py-36 max-w-6xl mx-auto">
          <div>
            <CommercialImage
              src="/adopt.jpg"
              alt="adopt"
              width={650}
              height={650}
              credits="Photo by Edgar Daniel Hernández Cervantes"
              creditLink="https://www.pexels.com/photo/black-and-white-short-coated-dogs-3628100/"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 opacity-80 mb-2">
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
          <div className="w-1/2">
            <CommercialImage
              src="/vet.jpg"
              alt="vet"
              width={650}
              height={650}
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
      <span className="text-3xl">
        add our partners block here + image credit hover on image
      </span>
      <section className="relative noise text-center py-16 lg:py-32">
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
    </div>
  );
}
