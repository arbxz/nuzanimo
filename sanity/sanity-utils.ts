import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import clientConfig from "./config/client-config";
import { Page } from "../types/Page";
import { Adoption } from "../types/Adoption";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current==$slug][0]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`,
    { slug: slug }
  );
}

export async function getAdoptions(): Promise<Adoption[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "adoption"]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        "image":image.asset->url,
        age,
        vaccinated,
        neutered,
        location,
     
    }`
  );
}

export async function getAdoption(slug: string): Promise<Adoption> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "adoption" && slug.current==$slug][0]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        "image":image.asset->url,
        age,
        vaccinated,
        neutered,
        contact_url,
        contact_number,
        contact_email,
        location,
        content
    }`,
    { slug: slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,title,
        "slug":slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current==$slug][0]{
        _id,
        _createdAt,title,
        "slug":slug.current,
        content
    }`,
    { slug: slug }
  );
}
