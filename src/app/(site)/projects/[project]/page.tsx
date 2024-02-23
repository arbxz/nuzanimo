import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { getArticle } from "../../../../../sanity/sanity-utils";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getArticle(slug);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex gap-4 items-baseline justify-between mb-8">
        <h1 className="font-bold text-6xl">{project.name}</h1>

        <Link
          className="inline-block border-2 border-white px-4 py-2 rounded-full text-white bg-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          href={project.url}
          target="_blank">
          View project
        </Link>
      </div>

      <div className="text-xl mb-4">
        <PortableText value={project.content} />
      </div>
      <Image
        className="rounded-lg"
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL={project.image}
      />
    </div>
  );
}
