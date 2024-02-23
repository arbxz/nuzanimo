import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "33hlrwn9",
  dataset: "production",
  title: "nou-zanimo-sanity-studio",
  apiVersion: "2024-02-04",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
