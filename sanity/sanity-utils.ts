import { createClient, groq } from "next-sanity";
import { Article } from "../types/Article";
import clientConfig from "./config/client-config";
import { Page } from "../types/Page";
import { Adoption } from "../types/Adoption";
import { ngoEvent } from "../types/Event";
import { Vet } from "../types/Vet";
import { Taxi } from "../types/Taxi";

export async function getArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article"]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`
  );
}

export async function getArticle(slug: string): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && slug.current==$slug][0]{
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
        breed,
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

export async function getEvents(): Promise<ngoEvent[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "event"]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        description,
        event_date,
        event_link,
        contact_email,
        location,
        "image":image.asset->url,
    }`
  );
}

export async function getEvent(slug: string): Promise<ngoEvent> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "event" && slug.current==$slug][0]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        description,
        event_date,
        event_link,
        contact_email,
        location,
        "image":image.asset->url,
    }`,
    { slug: slug }
  );
}

export async function getVets(): Promise<Vet[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "vet"]{
        _id,name,
        region,
        map_link,
        contact_email,
        contact_tel,
        "image":image.asset->url,
    }`
  );
}

export async function getTaxis(): Promise<Taxi[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "taxi"]{
        _id,
        name,
        region,
        contact_email,
        contact_tel,
        "image":image.asset->url,
    }`
  );
}
