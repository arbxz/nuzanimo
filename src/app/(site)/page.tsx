import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import { Project } from "../../../types/Project";
import Link from "next/link";

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4">
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
    </div>
  );
}
