import { PortableText } from "@portabletext/react";
import { getPage } from "../../../../sanity/sanity-utils";
import type { Page } from "@/types/Page";
import { sanityFetch } from "../../../../sanity/config/client-config";
import { singlePageQuery } from "../../../../sanity/sanity.query";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page: Page = await sanityFetch({
    query: singlePageQuery,
    tags: ["page"],
    qParams: { slug: params.slug }, // add slug from next-js params
  });

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
