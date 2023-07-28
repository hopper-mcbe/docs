import { defineConfig } from "vitepress";

export default defineConfig({
  head: [["link", { rel: "shortcut icon", href: "/docs/favicon.png" }]],
  base: "/docs/",
  srcExclude: ["README.md"],
  title: "Hopper MCBE",
  description: "Hopper MCBE Documentation",
  themeConfig: {
    editLink: {
      pattern: "https://github.com/hopper-mcbe/docs/edit/main/:path",
    },
    lastUpdated: {},
    outline: "deep",
    logo: "/favicon.png",

    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Introduction", link: "/getting-started/intro" },
      {
        text: "v0.0.2",
        link: "https://github.com/hopper-mcbe/hopper-mcbe/releases/latest",
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/getting-started/intro" },
          { text: "Quick Start", link: "/getting-started/start" },
        ],
      },
      {
        text: "Essentials",
        items: [
          { text: "Components", link: "/essentials/components" },
          { text: "createAddon", link: "/essentials/create-addon" },
        ],
      },
      {
        text: "Conventions",
        items: [
          {
            text: "Naming Conventions",
            link: "/conventions/naming-conventions",
          },
          {
            text: "Source Organization",
            link: "/conventions/source-organization",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/hopper-mcbe" }],
  },
});
