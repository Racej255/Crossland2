import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: [
        ".",       // for index.md & gala.md
        "_data"    // for members.yml & former_members.yml
      ],
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "index.md",
          fields: [
            { name: "title",   type: "string",   label: "Page Title", required: true },
            { name: "content", type: "markdown", label: "Body Content" }
          ]
        },
        {
          name: "GalaPage",
          type: "page",
          urlPath: "/gala/",
          filePath: "gala.md",
          fields: [
            { name: "title",   type: "string",   label: "Page Title", required: true },
            { name: "content", type: "markdown", label: "Body Content" }
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
            { name: "image",    type: "image",  label: "Portrait" }
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
            { name: "image",    type: "image",  label: "Portrait" }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents, models }) =>
    documents
      .filter(d => models.some(m => m.name === d.modelName && m.type === "page"))
      .map(d => ({
        stableId: d.id,
        urlPath: models.find(m => m.name === d.modelName)!.urlPath,
        document: d,
        isHomePage: d.filePath === "index.md"
      }))
});
