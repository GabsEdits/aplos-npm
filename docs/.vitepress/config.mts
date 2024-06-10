import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Aplós",
  description:
    "Aplós is a sleek, contemporary, and purposefully designed theme and template",

  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    links: "icons",
    author: "Gabriel Cozma",

    languages: [
      { name: "English", locale: false },
      { name: "Romanian", locale: "ro" },
    ],

    articles: {
      giscus: {
        repo: "GabsEdits/aplos",
        repoid: "R_kgDOK-fCGg",
        categoryid: "DIC_kwDOK-fCGs4Cd3kS",
        category: "Posts Comments",
        mapping: "title",
        theme: "preferred_color_scheme",
      },
    },
    nav: {
      links: [
        { link: "/demo", text: "Demo" },
        { link: "/guide/", text: "Guide" },
        { link: "/static", text: "Static" },
      ],
      git: "https://github.com/aplosdev/aplos",
    },
    footer: {
      copyright: true,
      poweredBy: true,

      madeby: {
        show: true,
        name: "Gabs",
        link: "https://gxbs.me/",
      },

      copyleft: {
        show: true,
        license: "MIT License",
        info: "https://github.com/aplosdev/aplos?tab=MIT-1-ov-file#readme",
      },

      sourcecode: {
        show: true,
        link: "https://github.com/aplosdev/aplos",
      },
    },
  },

  markdown: {
    container: {
      warningLabel: "Warning",
      tipLabel: "Tip",
      dangerLabel: "Danger",
      infoLabel: "Info",
    },
    theme: {
      light: "light-plus",
      dark: "vitesse-dark",
    },
  },
  head: [
    ["meta", { name: "author", content: "Gabriel Cozma/Gabs" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#ff3e00" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Aplós" }],
    [
      "meta",
      {
        name: "og:image",
        content: "https://aplos.gxbs.me/images/aplos-banner.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://aplos.gxbs.me/images/aplos-banner.png",
      },
    ],
    ["meta", { name: "twitter:title", content: "Aplós" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Build an website fast, and easy",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://aplos.gxbs.me" }],
  ],
  sitemap: {
    hostname: "https://aplos.gxbs.me",
  },
  vite: {
    ssr: {
      noExternal: ["vitepress-plugin-testcomponents"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $color-accent: #d16014;
            $bg-color-code-l: #ffffff;
            `,
        },
      },
    },
  },
});
