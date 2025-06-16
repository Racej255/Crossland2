// stackbit.config.ts
import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  // Define where your editable content lives
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: [
        ".",      // Markdown pages (index.md, gala.md)
        "_data"   // Data files (members.yml, former_members.yml)
      ],
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "index.md",
          fields: [
            { name: "title",   type: "string",   label: "Page Title", required: true },
            { name: "content", type: "markdown", label: "Page Content" }
          ]
        },
        {
          name: "GalaPage",
          type: "page",
          urlPath: "/gala/",
          filePath: "gala.md",
          fields: [
            { name: "title",   type: "string",   label: "Page Title", required: true },
            { name: "content", type: "markdown", label: "Page Content" }
          ]
        },
        {
          name: "Member",
          type: "data",
          filePath: "_data/members.yml",
          fields: [
            { name: "name",     type: "string", label: "Name",     required: true },
            { name: "title",    type: "string", label: "Title",    required: true },
            { name: "subtitle", type: "string", label: "Subtitle" },
            { name: "image",    type: "string", label: "Portrait Path" }
          ]
        },
        {
          name: "FormerMember",
          type: "data",
          filePath: "_data/former_members.yml",
          fields: [
            { name: "name",     type: "string", label: "Name",     required: true },
            { name: "title",    type: "string", label: "Title",    required: true },
            { name: "subtitle", type: "string", label: "Subtitle" },
            { name: "image",    type: "string", label: "Portrait Path" }
          ]
        }
      ]
    })
  ],

  // Distinguish which models represent pages
  modelExtensions: [
    { name: "HomePage", type: "page" },
    { name: "GalaPage", type: "page" }
  ],

  // Connect page models to URLs for navigation
  siteMap: ({ documents, models }): SiteMapEntry[] => {
    // 1. Filter all page models
    const pageModels = models.filter(m => m.type === "page");

    return (
      documents
        // 2. Keep only docs of a page model
        .filter(d => pageModels.some(m => m.name === d.modelName))
        // 3. Map each to a SiteMapEntry
        .map(d => {
          const model = pageModels.find(m => m.name === d.modelName)!;
          return {
            stableId: d.id,
            urlPath: model.urlPath,
            document: d,
            isHomePage: d.filePath === "index.md"
          };
        })
    );
  }
});
