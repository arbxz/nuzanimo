import { PortableTextBlock } from "sanity";

export type Adoption = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  age: number;
  vaccinated: string;
  neutered: string;
  image: string;
  contact_url: string;
  contact_number: number;
  contact_email: string;
  location: string;
  content: PortableTextBlock[];
};
