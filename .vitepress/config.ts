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
        text: "v0.2.0",
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
          { text: "`_` Global Object", link: "/essentials/underscore_object" },
          { text: "`_` Label", link: "/essentials/underscore_label" },
          { text: "Optimizations", link: "/essentials/optimizations" },
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
      {
        text: "Other",
        items: [
          {
            text: "Caveats",
            link: "/other/caveats",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/hopper-mcbe" }],
  },
});
