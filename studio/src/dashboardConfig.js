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
                    "6093361c50962400e6e469d0",
                  title: "Sanity Studio",
                  name: "orange-blossom-gatsby-site-studio",
                  apiId: "3df6b027-f23e-4dd7-b6e5-ba81dbdce4f2",
                },
                {
                  buildHookId: "6093361cb913b200d5c0d834",
                  title: "Blog Website",
                  name: "orange-blossom-gatsby-site",
                  apiId: "9054e91d-fb4d-4b58-a681-7c3a3879a994",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/orangeblossomcandies/orange-blossom-gatsby-site",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://orange-blossom-gatsby-site.netlify.app",
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
