// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  // Define where editable content lives
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

  // Step 2: Distinguish which models represent pages
  modelExtensions: [
    { name: "HomePage", type: "page" },
    { name: "GalaPage", type: "page" }
  ],

  // Map each page document to its URL for navigation in the editor
  siteMap: ({ documents, models }) =>
    documents
      .filter(doc => models.some(m => m.name === doc.modelName && m.type === "page"))
      .map(document => {
        const model = models.find(m => m.name === document.modelName)!;
        return {
          stableId: document.id,
          urlPath: model.urlPath,
          document,
          isHomePage: document.filePath === "index.md"
        };
      })
});
