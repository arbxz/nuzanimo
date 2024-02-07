import { PortableText } from "@portabletext/react";
import { getPage } from "../../../../sanity/sanity-utils";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex gap-4 items-baseline justify-between mb-8">
        <h1 className="font-bold text-6xl">{page.title}</h1>
      </div>

      <div className="text-xl mb-4">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
