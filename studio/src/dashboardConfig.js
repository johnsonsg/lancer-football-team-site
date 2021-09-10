export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "613b60d1c2f88bd23bd9d383",
                  title: "Sanity Studio",
                  name: "lancer-football-team-site-studio",
                  apiId: "78c48473-e9bb-4ec1-a929-c271d38a91c8",
                },
                {
                  buildHookId: "613b60d1c79ab0d442ea23be",
                  title: "Blog Website",
                  name: "lancer-football-team-site",
                  apiId: "19a70aa0-32b8-4def-bebd-50cfc9698eab",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/johnsonsg/lancer-football-team-site",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://lancer-football-team-site.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
