import { groq } from "next-sanity";

export const articleQuery = groq`*[_type == "article"]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`;

export const singleArticleQuery = groq`*[_type == "article" && slug.current==$slug][0]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`;

export const adoptionQuery = groq`*[_type == "adoption"]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        breed,
        "image":image.asset->url,
        age,
        vaccinated,
        neutered,
        location,
     
    }`;

export const singleAdoptionQuery = groq`*[_type == "adoption" && slug.current==$slug][0]{
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
    }`;

export const pagesQuery = groq`*[_type == "page"]{
        _id,
        _createdAt,title,
        "slug":slug.current,
    }`;

export const singlePageQuery = groq`*[_type == "page" && slug.current==$slug][0]{
        _id,
        _createdAt,title,
        "slug":slug.current,
        content
    }`;

export const eventQuery = groq`*[_type == "event"]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        description,
        event_date,
        event_link,
        contact_email,
        location,
        "image":image.asset->url,
    }`;

export const singleEventQuery = groq`*[_type == "event" && slug.current==$slug][0]{
        _id,
        _createdAt,name,
        "slug":slug.current,
        description,
        event_date,
        event_link,
        contact_email,
        location,
        "image":image.asset->url,
    }`;

export const vetQuery = groq`*[_type == "vet"]{
        _id,name,
        region,
        map_link,
        contact_email,
        contact_tel,
        "image":image.asset->url,
    }`;

export const taxiQuery = groq`*[_type == "taxi"]{
        _id,
        name,
        region,
        contact_email,
        contact_tel,
        "image":image.asset->url,
    }`;
